Dim iURL
Dim objShell
iURL = "http://advantageonlineshopping.com --start-fullscreen"
set objShell = CreateObject("Shell.Application")

Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Mozilla Firefox\firefox.exe"
If fileSystemObj.FileExists(chromeExist) then
objShell.ShellExecute "C:\Program Files\Mozilla Firefox\firefox.exe", iURL, "", ""
Else
objShell.ShellExecute "C:\Program Files (x86)\Mozilla Firefox\firefox.exe", iURL, "", ""
End If
wait(5)

AIUtil.SetContext Window("regexpwndtitle:=Advantage Shopping — Mozilla Firefox", "regexpwndclass:=MozillaWindowClass", "is owned window:=False", "is child window:=False")
AIUtil("profile").Click
AIUtil("input", "Usemame").Type "karat"
AIUtil.SetContext Window("regexpwndtitle:=Advantage Shopping — Mozilla Firefox", "regexpwndclass:=MozillaWindowClass", "is owned window:=False", "is child window:=False")
AIUtil.FindTextBlock("OR").Click
AIUtil.FindTextBlock("Password").Type "Pass1"
AIUtil.FindTextBlock("SIGN IN").Click

systemUtil.CloseProcessByName ("firefox.exe")
