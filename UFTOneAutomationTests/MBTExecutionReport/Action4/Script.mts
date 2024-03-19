'-----------------------------------------------------------------------------------------------------------------------
Dim objShell
set objShell = CreateObject("Shell.Application")

Set fileSystemObj = createobject("Scripting.FileSystemObject")
flightsExist = "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
If fileSystemObj.FileExists(flightsExist) then
objShell.ShellExecute "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
Else
objShell.ShellExecute "C:\Program Files (x86)\OpenText\UFT One\samples\Flights Application\FlightsGUI.exe"
End If

'----------------------------------------------------------------------------------------------------------------------- @@ hightlight id_;_2067902600_;_script infofile_;_ZIP::ssf7.xml_;_

WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set Parameter("User_Name") @@ hightlight id_;_2113647904_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure Parameter("Password") @@ hightlight id_;_2092967184_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
If WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Exist(5) Then
	Reporter.ReportEvent micPass, "Passed Test", "Login succefull"
	else
	Reporter.ReportEvent micFail, "Login Fail","the Flight App fail to login"
End If @@ hightlight id_;_2085992504_;_script infofile_;_ZIP::ssf16.xml_;_
Reporter.ReportEvent micDone, "Login Done","the Flight App Done login with parameters Input type password Test"
systemUtil.CloseProcessByName ("FlightsGUI.exe")
