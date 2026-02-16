Dim iURL
Dim objShell
iURL = Parameter("url")
set objShell = CreateObject("Shell.Application")

Set fileSystemObj = createobject("Scripting.FileSystemObject")
edgeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(edgeExist) then
objShell.ShellExecute "C:\Program Files\Google\Chrome\Application\chrome.exe", iURL, "", ""
Else
objShell.ShellExecute "C:\Program Files\Google\Chrome\Application\chrome.exe", iURL, "", ""
End If
Browser("OpenText MF Connect").Navigate Parameter("url")
Browser("OpenText MF Connect").Page("OpenText MF Connect").WebEdit("Username").Set "Opentext" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("OpenText MF Connect").Page("OpenText MF Connect").WebEdit("Password").SetSecure "69930c0602bc7ca82d765847a13b2cc58d8c0f5a5ab1" @@ script infofile_;_ZIP::ssf14.xml_;_
wait(3)
Browser("OpenText MF Connect").Page("OpenText MF Connect").WebButton("Sign In").Click @@ script infofile_;_ZIP::ssf16.xml_;_
wait(5)
Browser("OpenText MF Connect").Page("OpenText MF Connect").WebButton("User Settings").Click @@ hightlight id_;_65662_;_script infofile_;_ZIP::ssf12.xml_;_
