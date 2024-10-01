Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(chromeExist) then
 systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
Else
   systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
End If

Browser("Dashboard - Advantage").Navigate "https://advantageonlinebanking.com/dashboard" @@ script infofile_;_ZIP::ssf17.xml_;_

If Browser("Dashboard - Advantage").Page("Dashboard - Advantage").Link("Accounts").Exist(5) Then
Browser("Dashboard - Advantage").Page("Dashboard - Advantage").Link("Accounts").Click
Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebButton("Open new account").Click @@ script infofile_;_ZIP::ssf2.xml_;_
'Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebElement("You need to enable JavaScript").Click @@ script infofile_;_ZIP::ssf3.xml_;_
'Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebList("Currency").Select "ILS" @@ script infofile_;_ZIP::ssf4.xml_;_
'Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebElement("You need to enable JavaScript_2").Click @@ script infofile_;_ZIP::ssf5.xml_;_
'Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebList("Currency").Select "Checking Account" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebEdit("name").Set Parameter("Account_Name") @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebCheckBox("create_debit_card").Set "ON" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebButton("Create").Click
wait (10)
End If
 
 If Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebElement("modal-title").Exist(5) Then
 	       Reporter.ReportEvent micFail, "Failed", "Fail to create new account"
 	else
 	 	Reporter.ReportEvent micPass, "Passed Test", "the new account created succefully"
End If @@ script infofile_;_ZIP::ssf19.xml_;_
