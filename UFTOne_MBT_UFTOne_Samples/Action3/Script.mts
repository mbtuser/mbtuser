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
wait(5)
 @@ script infofile_;_ZIP::ssf12.xml_;_
If Browser("Dashboard - Advantage").Page("Dashboard - Advantage").Link("Accounts").Exist(5) Then
wait(3)
	Browser("Dashboard - Advantage").Page("Dashboard - Advantage").Link("Accounts").Click
wait(3)
	Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebButton("Open new account").Click
	Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebEdit("name").Set Parameter("accountName")
       Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebButton("Create").Click
End If
wait(3)
        systemUtil.CloseProcessByName ("firefox.exe")
