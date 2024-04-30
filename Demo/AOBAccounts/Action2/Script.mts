Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(chromeExist) then
 systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
Else
   systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
End If

Browser("Accounts - Advantage Bank").Navigate "https://advantageonlinebanking.com/dashboard"
 @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Accounts - Advantage Bank").Page("Dashboard - Advantage").Link("Accounts").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Accounts - Advantage Bank").Page("Accounts - Advantage Bank").WebButton("WebButton").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait(5)
Browser("Accounts - Advantage Bank").Page("Accounts - Advantage Bank").WebMenu("Cancel Account").Select "Cancel Account" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Accounts - Advantage Bank").Page("Accounts - Advantage Bank").WebButton("Confirm").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait(5) @@ script infofile_;_ZIP::ssf19.xml_;_
 If Browser("Accounts - Advantage Bank").Page("Accounts - Advantage Bank").WebElement("modal-title").Exist(5) Then
 	       Reporter.ReportEvent micFail, "Failed", "Fail to cancel the account"
 	else
 	 	Reporter.ReportEvent micPass, "Passed Test", "the account canceled succefully"
End If @@ script infofile_;_ZIP::ssf13.xml_;_
