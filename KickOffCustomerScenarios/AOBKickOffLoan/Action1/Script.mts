Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(chromeExist) then
 systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
Else
   systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
End If

Browser("Loans - Advantage Bank").Navigate "https://advantageonlinebanking.com/dashboard"

Browser("Loans - Advantage Bank").Page("Loans - Advantage Bank").Link("Dashboard").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Loans - Advantage Bank").Page("Dashboard - Advantage").Link("Loans").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait(5) @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Loans - Advantage Bank").Page("Loans - Advantage Bank").WebButton("Calculate").Click @@ script infofile_;_ZIP::ssf5.xml_;_

Reporter.ReportEvent micPass, "Passed Test", "the Loan Calculator succefully"
