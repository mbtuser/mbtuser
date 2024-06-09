Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(chromeExist) then
 systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
Else
   systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
End If

Browser("Home - Advantage Bank").Navigate "https://advantageonlinebanking.com" @@ script infofile_;_ZIP::ssf20.xml_;_

If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Registration").Exist(5) Then
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Registration").Click
Browser("Home - Advantage Bank_2").Page("Home - Advantage Bank").WebEdit("firstName").Set Parameter("username") @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("lastName").Set Parameter("lastName") @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("email").Set Parameter("email") @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username_2").Set Parameter("username") @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebElement("Password The password").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password_2").SetSecure Parameter("password") @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebElement("PasswordConfirm Password").Click @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("confirmPass").SetSecure Parameter("password") @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebCheckBox("createAccountInAOS").Set "ON" @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Register").Click
End If

 If Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Exist(5) Then
 	Reporter.ReportEvent micPass, "Passed Test", "new user Registration succes"
 	else
 	Reporter.ReportEvent micFail, "Failed", "Fail to new user Registration"
 End If
'Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set "admin" @@ script infofile_;_ZIP::ssf1.xml_;_
'Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure "63cd6657c961995fbd12fce5ce8d" @@ script infofile_;_ZIP::ssf2.xml_;_
'Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Registration").Click @@ script infofile_;_ZIP::ssf3.xml_;_
'Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username_2").Set "admin" @@ script infofile_;_ZIP::ssf4.xml_;_
'Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password_2").SetSecure "63cd66587498197451baf158ec1c" @@ script infofile_;_ZIP::ssf5.xml_;_
' @@ script infofile_;_ZIP::ssf17.xml_;_
'Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Click @@ script infofile_;_ZIP::ssf18.xml_;_
