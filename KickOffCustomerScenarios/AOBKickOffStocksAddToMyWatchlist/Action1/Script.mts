Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(chromeExist) then
 systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
Else
   systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
End If

Browser("Dashboard - Advantage").Navigate "https://advantageonlinebanking.com/dashboard"

Browser("Dashboard - Advantage").Page("Dashboard - Advantage").Link("Stocks").Click
wait(3) @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("Dashboard - Advantage").Page("Stocks - Advantage Bank").WebButton("Open").Click @@ script infofile_;_ZIP::ssf24.xml_;_
wait(3)
'Browser("Dashboard - Advantage").Page("Stocks - Advantage Bank").WebList("Add to my watchlist").Select "PLTR - Palantir Technologies Inc." @@ script infofile_;_ZIP::ssf31.xml_;_

Browser("Dashboard - Advantage").Page("Stocks - Advantage Bank").WebButton("Open").Click @@ script infofile_;_ZIP::ssf32.xml_;_
Browser("Dashboard - Advantage").Page("Stocks - Advantage Bank").WebList("Add to my watchlist").Select "AMD - Advanced Micro Devices, Inc." @@ script infofile_;_ZIP::ssf33.xml_;_
Browser("Dashboard - Advantage").Page("Stocks - Advantage Bank").WebEdit("Example: Tesla, Apple").Set "AMD - Advanced Micro Devices, Inc." @@ script infofile_;_ZIP::ssf34.xml_;_
wait(3) @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Dashboard - Advantage").Page("Stocks - Advantage Bank").WebButton("Add").Click @@ script infofile_;_ZIP::ssf29.xml_;_
wait(5)
If Browser("Dashboard - Advantage").Page("Stocks - Advantage Bank").WebButton("Add").Exist then
	Reporter.ReportEvent micFail, "Failed", "Fail to Add to my watchlist"	
Else
	Reporter.ReportEvent micPass, "Passed Test", "The stock was Add to my watchlist succefully"
End  If
 @@ script infofile_;_ZIP::ssf20.xml_;_
