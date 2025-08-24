' =============================================================================
' ✅ פונקציה להצגת שכבת שגיאה - מקבלת את אובייקט הדף
' =============================================================================
Sub ShowErrorOnPage(oPage, errorMessage)
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
    Reporter.ReportEvent micFail, "Browser Launch", "No supported browser found on this machine"
    ExitTest
End If

SystemUtil.Run browserPath, iURL
Wait(5)

' --- הגדרת אובייקטים מרכזיים פעם אחת ---
Dim oBrowser, oPageDashboard, oPageAccounts, errorMsg
Set oBrowser = Browser("title:=Dashboard - Advantage")
Set oPageDashboard = oBrowser.Page("title:=Dashboard - Advantage")
' נגדיר את עמוד החשבונות כאן, נשתמש בו מאוחר יותר
Set oPageAccounts = oBrowser.Page("title:=Accounts - Advantage Bank")

Dim accountsLinkText
accountsLinkText = Parameter("ElementName")
If Trim(accountsLinkText) = "" Then
    accountsLinkText = Parameter("ElementName")
End If

If oPageDashboard.Link(accountsLinkText).Exist(5) Then
    Wait(1)
    oPageDashboard.Link(accountsLinkText).Click
    Wait(3)

    If oPageAccounts.WebButton("Open new account").Exist(3) Then
        oPageAccounts.WebButton("Open new account").Click

        If oPageAccounts.WebEdit("name").Exist(3) Then
            oPageAccounts.WebEdit("name").Set Parameter("accountName")
            oPageAccounts.WebButton("Create").Click
            Reporter.ReportEvent micPass, "Account Creation", "New account created successfully"
        Else
            errorMsg = "Name input field not found on 'New Account' page."
            ShowErrorOnPage oPageAccounts, errorMsg
            Reporter.ReportEvent micFail, "Account Creation", errorMsg
            ExitTest
        End If
    Else
        errorMsg = "'Open new account' button not found on 'Accounts' page."
        ShowErrorOnPage oPageAccounts, errorMsg
        Reporter.ReportEvent micFail, "Account Creation", errorMsg
        ExitTest
    End If
Else
    errorMsg = "'Accounts' link not found on dashboard using text: '" & accountsLinkText & "'"
    ShowErrorOnPage oPageDashboard, errorMsg
    Reporter.ReportEvent micFail, "Navigation", errorMsg
    ExitTest
End If

Wait(3)
SystemUtil.CloseProcessByName browserName
