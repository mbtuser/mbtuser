systemUtil.CloseProcessByName ("chrome.exe")
systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
Browser("Google").Navigate "https://www.google.com/" @@ script infofile_;_ZIP::ssf11.xml_;_
 
 If Browser("Google").Page("Google").WebEdit("חיפוש").Exist(15) Then
Browser("Google").Page("Google").WebEdit("חיפוש").Set Parameter("SearchValue") @@ script infofile_;_ZIP::ssf36.xml_;_
Browser("Google").Page("Google").WebButton("חיפוש ב-Google").Click
Reporter.ReportEvent micFail, "search with fail success","the demo fail message for search of input value on google success"
 End If
systemUtil.CloseProcessByName ("chrome.exe")
