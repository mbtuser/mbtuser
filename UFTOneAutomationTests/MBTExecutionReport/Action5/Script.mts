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

'-----------------------------------------------------------------------------------------------------------------------

WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set Parameter("User_Name") @@ hightlight id_;_2059373704_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure Parameter("Password") @@ hightlight id_;_2136349448_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1981704688_;_script infofile_;_ZIP::ssf5.xml_;_
If WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS_2").Exist(5) Then
	Reporter.ReportEvent micPass, "Passed", "Login succefull"
	else 
	Reporter.ReportEvent micFail, "Failed Test", "Fail to Login incurrect user or password"
End If @@ hightlight id_;_1931996136_;_script infofile_;_ZIP::ssf16.xml_;_
Reporter.ReportEvent micDone, "Login Done","the Flight App Done login failed Test"
systemUtil.CloseProcessByName ("FlightsGUI.exe")

