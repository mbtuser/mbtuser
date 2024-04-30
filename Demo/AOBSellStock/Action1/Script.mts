'Set fileSystemObj = createobject("Scripting.FileSystemObject")
'chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
'If fileSystemObj.FileExists(chromeExist) then
' systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
'Else
'   systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
'End If

Browser("Stocks - Advantage Bank").Navigate "https://advantageonlinebanking.com/stocks"
wait(5)
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").WebButton("Sell").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait(3)
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").WebNumber("amount").Set "10" @@ script infofile_;_ZIP::ssf2.xml_;_
wait(3)
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").WebButton("Sell_2").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait(3)
Browser("Stocks - Advantage Bank").Page("Stocks - Advantage Bank").Link("Dashboard").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Stocks - Advantage Bank").Refresh @@ hightlight id_;_659120_;_script infofile_;_ZIP::ssf5.xml_;_
wait(10)

Browser("Stocks - Advantage Bank").Page("Dashboard - Advantage").WebElement("WebElement").Click

If Browser("Stocks - Advantage Bank").Page("Dashboard - Advantage").WebElement("WebElement").Object.innerText = "10.00" then
	Reporter.ReportEvent micPass, "Passed Test", "The stock was sold succefully"
Else
	Reporter.ReportEvent micFail, "Failed", "Fail to sell stock"
End  If


