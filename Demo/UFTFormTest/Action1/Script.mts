
Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(chromeExist) then
 systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
Else
   systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
End If

Browser("Browser").Navigate Parameter("url")

If Browser("Browser").Page("Page").WebButton("Allow Necessary Cookies").Exist Then
	Browser("Browser").Page("Page").WebButton("Allow Necessary Cookies").Click
End If
Browser("Browser").Page("Page").WebEdit("firstname").Set "bob" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Page("Page").WebEdit("lastname").Set "dylan" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Browser").Page("Page").WebEdit("WebEdit").Set "18/05/2018" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Browser").Page("Page").WebElement("Date:").Click @@ script infofile_;_ZIP::ssf5.xml_;_

Browser("Browser").Page("Page").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("sex").Select "Male" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("exp").Select "7" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Browser").Page("Page").WebList("continents").Select "Europe" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Browser").Page("Page").WebButton("Button").Click @@ script infofile_;_ZIP::ssf10.xml_;_
