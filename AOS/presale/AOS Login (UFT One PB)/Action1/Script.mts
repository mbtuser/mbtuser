Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(chromeExist) then
systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
Else
   systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
End If

Browser("Advantage Shopping").Navigate Parameter("URL")

If Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Profile Icon").Exist(5) Then
Reporter.ReportEvent micPass, "Passed", "navigate to AOS url properly"
else
Reporter.ReportEvent micFail, "Failed", "Failed to open AOS URL"
End If
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Profile Icon").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Sync
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("Username Field").Set Parameter("User_ID")
Browser("Advantage Shopping").Page("Advantage Shopping").Sync
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("Password Field").Set Parameter("User_Password")
Browser("Advantage Shopping").Page("Advantage Shopping").Sync
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("Sign In Button").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Sync
If Browser("Advantage Shopping").Page("Advantage Shopping_2").Link("UserMenu").Exist(5) Then
Reporter.ReportEvent micPass, "Passed", "Login properly"
else
Reporter.ReportEvent micFail, "Failed", "Failed to Login" @@ script infofile_;_ZIP::ssf3.xml_;_
End If

