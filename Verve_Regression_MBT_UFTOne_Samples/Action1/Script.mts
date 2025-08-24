' =============================================================================
' ✅ פונקציה להצגת שכבת שגיאה - מקבלת כעת את אובייקט הדף
' =============================================================================
Sub ShowErrorOnPage(oPage, errorMessage)
    ' בדיקה שהעברנו אובייקט דף תקין
    If oPage Is Nothing Then
        Reporter.ReportEvent micWarning, "ShowErrorOnPage", "Page object was not provided. Cannot display visual error."
        Exit Sub
    End If

    On Error Resume Next
    Dim jsErrorMessage
    jsErrorMessage = Replace(errorMessage, "'", "\'")
    jsErrorMessage = Replace(jsErrorMessage, """", "\""")
    jsErrorMessage = Replace(jsErrorMessage, vbCrLf, "<br>")
    Dim jsCode
    jsCode = "var overlayDiv = document.createElement('div');" & _
             "overlayDiv.id = 'uft-error-overlay';" & _
             "overlayDiv.style.cssText = 'position:fixed; top:30px; left:50%; transform:translateX(-50%); padding:25px; background-color:rgba(220, 53, 69, 0.9); color:white; font-size:22px; font-weight:bold; border:4px solid black; border-radius:12px; z-index:999999; box-shadow: 0 0 20px rgba(0,0,0,0.7); font-family:Arial,sans-serif; text-align:center;';" & _
             "overlayDiv.innerHTML = '❌ UFT One Test Failure ❌<hr style=""border-color:white; margin:10px 0;""><p style=""font-size:18px; font-weight:normal;"">" & jsErrorMessage & "</p>';" & _
             "if (document.body) { document.body.appendChild(overlayDiv); } else { console.error('UFT Error: " & jsErrorMessage & "'); }"
    
    ' הזרקת הסקריפט לאובייקט הדף הספציפי שהעברנו
    oPage.RunScript(jsCode)
    
    If Err.Number <> 0 Then
        Reporter.ReportEvent micWarning, "ShowErrorOnPage", "Failed to inject visual error. Error: " & Err.Description
    End If
    
    Wait(5) ' המתנה כדי שההודעה תוקלט בוידאו
    On Error GoTo 0
End Sub


' =============================================================================
' 								 START OF ACTION LOGIC
' =============================================================================
Dim iURL, fileSystemObj, browserPath, browserName
iURL = "https://advantageonlinebanking.com/dashboard"
Set fileSystemObj = CreateObject("Scripting.FileSystemObject")

If fileSystemObj.FileExists("C:\Program Files\Google\Chrome\Application\chrome.exe") Then
    browserPath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
    browserName = "chrome.exe"
ElseIf fileSystemObj.FileExists("C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe") Then
    browserPath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
    browserName = "msedge.exe"
Else
    Reporter.ReportEvent micFail, "Browser Launch", "No supported browser found"
    ExitTest
End If

SystemUtil.Run browserPath, iURL
Wait(5)

' --- הגדרת אובייקטים מרכזיים פעם אחת ---
Dim oBrowser, oPage
Set oBrowser = Browser("title:=Home - Advantage Bank")
Set oPage = oBrowser.Page("title:=Home - Advantage Bank")

Dim usernameObj, passwordObj, signInObj, loginObj, dashObj, errorMsg

' שימוש ישיר ב-oPage לזיהוי אובייקטים
Set usernameObj = oPage.WebEdit("name:=" & Parameter("usernameField"))
If usernameObj.Exist(3) Then
    usernameObj.Set Parameter("username")
    Reporter.ReportEvent micPass, "Username Set", "Username set successfully"
Else
    errorMsg = "Failed to find username field using identifier: '" & Parameter("usernameField") & "'"
    ShowErrorOnPage oPage, errorMsg ' <-- העברת אובייקט הדף
    Reporter.ReportEvent micFail, "Username Not Found", errorMsg
    ExitTest
End If

Set passwordObj = oPage.WebEdit("name:=" & Parameter("passwordField"))
If passwordObj.Exist(3) Then
    passwordObj.SetSecure Parameter("password")
    Reporter.ReportEvent micPass, "Password Set", "Password set successfully"
Else
    errorMsg = "Failed to find password field using identifier: '" & Parameter("passwordField") & "'"
    ShowErrorOnPage oPage, errorMsg ' <-- העברת אובייקט הדף
    Reporter.ReportEvent micFail, "Password Not Found", errorMsg
    ExitTest
End If

Set signInObj = oPage.WebButton("name:=" & Parameter("signInButton"))
Set loginObj  = oPage.WebButton("name:=" & Parameter("loginButton"))

If signInObj.Exist(3) Then
    signInObj.Click
ElseIf loginObj.Exist(3) Then
    loginObj.Click
Else
    errorMsg = "No login button found using identifiers: '" & Parameter("signInButton") & "' or '" & Parameter("loginButton") & "'"
    ShowErrorOnPage oPage, errorMsg ' <-- העברת אובייקט הדף
    Reporter.ReportEvent micFail, "Login Button", errorMsg
    ExitTest
End If

Wait(3)

' ייתכן שלאחר לוגין, כותרת הדף משתנה - נצטרך אובייקט דף חדש
Dim oPageDashboard
Set oPageDashboard = Browser("title:=.*Advantage.*").Page("title:=.*Advantage.*")

Set dashObj = oPageDashboard.WebElement("innertext:=Bank Accounts")
If dashObj.Exist(20) Then
    Reporter.ReportEvent micPass, "Login Test", "Login successful"
    dashObj.Click
Else
    errorMsg = "Login failed. Dashboard button not found."
    ShowErrorOnPage oPageDashboard, errorMsg ' <-- העברת אובייקט הדף החדש
    Reporter.ReportEvent micFail, "Login Test", errorMsg
    ExitTest
End If

SystemUtil.CloseProcessByName browserName
