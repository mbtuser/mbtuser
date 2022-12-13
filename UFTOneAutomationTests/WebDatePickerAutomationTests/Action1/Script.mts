Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(chromeExist) then
 systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
Else
   systemUtil.Run ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
End If
Browser("Google").Navigate "https://mui.com/x/react-date-pickers/date-picker/"
Browser("Google").Page("React Date Picker component").WebButton("2021").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Google").Page("React Date Picker component").WebButton("5").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Google").Page("React Date Picker component").WebButton("Choose date, selected").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Google").Page("React Date Picker component").WebButton("5_2").Click @@ script infofile_;_ZIP::ssf9.xml_;_

