Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(chromeExist) then
 systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
Else
   systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
End If

Browser("New Transfer - Advantage").Navigate "https://advantageonlinebanking.com/dashboard"

Browser("New Transfer - Advantage").Page("New Transfer - Advantage").Link("New Transfer").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait(5)
Browser("New Transfer - Advantage").Refresh
Browser("New Transfer - Advantage").Page("New Transfer - Advantage").WebButton("Transfer To My Own Account").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Wait(5)
Browser("New Transfer - Advantage").Page("New Transfer - Advantage").WebNumber("amount").Click @@ script infofile_;_ZIP::ssf32.xml_;_
wait(5)
Browser("New Transfer - Advantage").Page("New Transfer - Advantage").WebNumber("amount").Set Parameter("amount") @@ script infofile_;_ZIP::ssf3.xml_;_
wait(5)
Browser("New Transfer - Advantage").Page("New Transfer - Advantage").WebEdit("description").Set Parameter("description") @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("New Transfer - Advantage").Page("New Transfer - Advantage").WebButton("Send").Click @@ script infofile_;_ZIP::ssf5.xml_;_

wait (5)
If Browser("New Transfer - Advantage").Page("Accounts - Advantage Bank").WebElement("My Accounts").Exist Then
	Reporter.ReportEvent micPass, "Passed Test", "the new transfer created succefully"
 	else
	Reporter.ReportEvent micFail, "Failed", "Fail to create new transfer"	
End If
