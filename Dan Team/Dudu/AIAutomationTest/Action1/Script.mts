Dim iURL
Dim objShell
iURL = "https://abstracta.us --start-fullscreen"
set objShell = CreateObject("Shell.Application")

Set fileSystemObj = createobject("Scripting.FileSystemObject")
chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(chromeExist) then
objShell.ShellExecute "C:\Program Files\Google\Chrome\Application\chrome.exe", iURL, "", ""
Else
objShell.ShellExecute "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe", iURL, "", ""
End If

AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("LET'S GET STARTED").Click
AIUtil.FindTextBlock("Full Name").Click
AIUtil("text_box", "Full Name").Type "test"
AIUtil.FindTextBlock("Email").Click
AIUtil("text_box", "Email *").Type "test@test.com"
AIUtil.FindTextBlock("Organization *").Click
AIUtil("text_box", "Organization *").Type "microfocus"
AIUtil("check_box", "Functional").SetState "On"
AIUtil("check_box", "Automation").SetState "On"
AIUtil("check_box", "Web").SetState "On"
AIUtil("check_box", "Yes, In house team").SetState "On"

If AIUtil.FindTextBlock("LET'S GET STARTED").Exist Then
	AIUtil.FindTextBlock("LET'S GET STARTED").Click
	Else
	AIUtil("button", "LET'S GET" + vbLf + "STARTED").Click
End If

systemUtil.CloseProcessByName ("chrome.exe")
