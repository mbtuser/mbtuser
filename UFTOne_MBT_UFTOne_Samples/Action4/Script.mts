Dim iURL
Dim objShell
iURL = "https://advantageonlinebanking.com/dashboard"
set objShell = CreateObject("Shell.Application")

Set fileSystemObj = createobject("Scripting.FileSystemObject")
edgeExist = "C:\Program Files\Mozilla Firefox\firefox.exe"
If fileSystemObj.FileExists(edgeExist) then
	objShell.ShellExecute "C:\Program Files\Mozilla Firefox\firefox.exe", iURL, "", ""
Else
	objShell.ShellExecute "C:\Program Files (x86)\Mozilla Firefox\firefox.exe", iURL, "", ""
End If
wait(3) @@ script infofile_;_ZIP::ssf13.xml_;_

If Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Exist Then
       Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Click
       wait(1)
       Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebMenu("My Profile Management").Select "Logout"
End If @@ script infofile_;_ZIP::ssf3.xml_;_
        systemUtil.CloseProcessByName ("firefox.exe")
