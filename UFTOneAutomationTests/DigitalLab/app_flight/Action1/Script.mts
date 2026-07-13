Dim objShell
set objShell = CreateObject("Shell.Application")

Set fileSystemObj = createobject("Scripting.FileSystemObject")
flightsExist = "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
If fileSystemObj.FileExists(flightsExist) then
objShell.ShellExecute "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
Else
objShell.ShellExecute "C:\Program Files (x86)\OpenText\Functional Testing\samples\Flights Application\FlightsGUI.exe"
End If @@ hightlight id_;_462826_;_script infofile_;_ZIP::ssf75.xml_;_

AIUtil.SetContext Window("regexpwndtitle:=OpenText MyFlight Sample Application")
AIUtil.FindTextBlock("Username").Click
AIUtil("text_box", "").Type Parameter("Username")
AIUtil.FindTextBlock("Password").Click
AIUtil("text_box", "").Type Parameter("Password")
AIUtil.FindTextBlock("OK").Click
