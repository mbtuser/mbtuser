Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(chromeExist) then
 systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
Else
   systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
End If @@ script infofile_;_ZIP::ssf15.xml_;_

Browser("Dashboard - Advantage").Navigate "https://advantageonlinebanking.com/dashboard" @@ script infofile_;_ZIP::ssf13.xml_;_

Browser("Dashboard - Advantage").Page("Dashboard - Advantage").Link("New Transfer").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait(5)
Browser("Dashboard - Advantage").Refresh
Browser("Dashboard - Advantage").Page("New Transfer - Advantage").WebButton("Transfer To External Recipient").Click
wait(5)
Browser("Dashboard - Advantage").Page("New Transfer - Advantage").WebEdit("recipient.name").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Wait(5)
Browser("Dashboard - Advantage").Page("New Transfer - Advantage").WebEdit("recipient.name").Set Parameter("recipien_name") @@ script infofile_;_ZIP::ssf4.xml_;_
wait(5)
Browser("Dashboard - Advantage").Page("New Transfer - Advantage").WebEdit("recipient.iban").Set Parameter("recipient_iban") @@ script infofile_;_ZIP::ssf5.xml_;_
wait(5)
Browser("Dashboard - Advantage").Page("New Transfer - Advantage").WebEdit("recipient.bic").Set Parameter("recipient_bic") @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dashboard - Advantage").Page("New Transfer - Advantage").WebEdit("recipient.bankName").Set Parameter("recipient_bankName") @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dashboard - Advantage").Page("New Transfer - Advantage").WebNumber("amount").Set Parameter("amount") @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Dashboard - Advantage").Page("New Transfer - Advantage").WebEdit("description").Set Parameter("description") @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Dashboard - Advantage").Page("New Transfer - Advantage").WebButton("Send").Click @@ script infofile_;_ZIP::ssf10.xml_;_
wait (5)
If Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebElement("My Accounts").Exist Then
	Reporter.ReportEvent micPass, "Passed Test", "the new transfer created succefully"
 	else
	Reporter.ReportEvent micFail, "Failed", "Fail to create new transfer"	
End If
 @@ script infofile_;_ZIP::ssf11.xml_;_
