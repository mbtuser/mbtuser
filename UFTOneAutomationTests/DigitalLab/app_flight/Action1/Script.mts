Dim objShell
set objShell = CreateObject("Shell.Application")

Set fileSystemObj = createobject("Scripting.FileSystemObject")
flightsExist = "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
If fileSystemObj.FileExists(flightsExist) then
objShell.ShellExecute "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
Else
objShell.ShellExecute "C:\Program Files (x86)\OpenText\Functional Testing\samples\Flights Application\FlightsGUI.exe"
End If @@ hightlight id_;_1446274_;_script infofile_;_ZIP::ssf40.xml_;_
 @@ hightlight id_;_331972_;_script infofile_;_ZIP::ssf67.xml_;_
 Window("OpenText MyFlight Sample_7").Click 202,224
Window("OpenText MyFlight Sample_6").Type Parameter("Username") @@ hightlight id_;_331972_;_script infofile_;_ZIP::ssf68.xml_;_
Window("OpenText MyFlight Sample_6").Click 187,278 @@ hightlight id_;_331972_;_script infofile_;_ZIP::ssf69.xml_;_
Window("OpenText MyFlight Sample_6").Type Parameter("Password") @@ hightlight id_;_331972_;_script infofile_;_ZIP::ssf70.xml_;_
Window("OpenText MyFlight Sample_6").Click 160,343 @@ hightlight id_;_331972_;_script infofile_;_ZIP::ssf71.xml_;_


 @@ hightlight id_;_462826_;_script infofile_;_ZIP::ssf75.xml_;_
'
'AIUtil.SetContext Window("regexpwndtitle:=OpenText MyFlight Sample Application", "regexpwndclass:=HwndWrapper\[FlightsGUI\.exe;;ffc83301-260b-481d-ac92-dbde0c624706\]", "is owned window:=False", "is child window:=False")
'AIUtil.SetContext Window("regexpwndtitle:=OpenText MyFlight Sample Application", "regexpwndclass:=HwndWrapper\[FlightsGUI\.exe;;31a96a75-b0ef-4be3-8807-ce8f04bc43bd\]", "is owned window:=False", "is child window:=False")
'AIUtil.FindTextBlock("Username").Click
'AIUtil("text_box", "").Type Parameter("Username")
'AIUtil.FindTextBlock("Password").Click
'AIUtil("text_box", "").Type Parameter("Password")
'AIUtil.FindTextBlock("OK").Click
