Dim username
Dim password
'
'user = Parameter("user_name")
'pass_word = Parameter("password")
'
systemUtil.CloseProcessByName ("chrome.exe")
Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(chromeExist) then
 systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
Else
   systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
End If

Browser("Home - Advantage Bank").Navigate "https://advantageonlinebanking.com/dashboard"
wait(3)
'IF already login so log out
If Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton_2").Exist(5) Then @@ script infofile_;_ZIP::ssf18.xml_;_
	Reporter.ReportEvent micDone, "User already login", "User already login"
'	wait(5)
'	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Open_2").DoubleClick @@ script infofile_;_ZIP::ssf65.xml_;_
	wait(3)
	Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton_2").DoubleClick
	wait(3)
	Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebMenu("My Profile Management").Select "Logout"
End If

If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login").Exist Then
       Reporter.ReportEvent micPass, "Passed Test", "Logout succefull"
 	else
 	Reporter.ReportEvent micFail, "Failed", "Fail to Logout"
 End If
      
If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username_2").Exist Then @@ script infofile_;_ZIP::ssf21.xml_;_
If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username_2").Exist(5) Then
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username_2").Set Parameter("user_name")
End If
'      wait(5)
	
	wait(3)
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").Set Parameter("password") @@ script infofile_;_ZIP::ssf23.xml_;_
	wait(3)
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login").Click
else
      Reporter.ReportEvent micFail, "Failed", "Log out from the application failed"
End If @@ script infofile_;_ZIP::ssf11.xml_;_
     wait(3) @@ script infofile_;_ZIP::ssf17.xml_;_
 If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login").Exist(5) Then
 	Reporter.ReportEvent micFail, "Failed", "Fail to Login incurrect user or password"
 	else
 	Reporter.ReportEvent micPass, "Passed Test", "Login succefull"
 End If @@ script infofile_;_ZIP::ssf10.xml_;_
 

 @@ hightlight id_;_65658_;_script infofile_;_ZIP::ssf57.xml_;_
