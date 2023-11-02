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

flightsAPIExist = "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsAPI.exe"
If fileSystemObj.FileExists(flightsAPIExist) then
objShell.ShellExecute "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsAPI.exe"
Else
objShell.ShellExecute "C:\Program Files (x86)\OpenText\UFT One\samples\Flights Application\FlightsAPI.exe"
End If

'-----------------------------------------------------------------------------------------------------------------------

WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set Parameter("User_Name") @@ hightlight id_;_4260040_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure Parameter("Password")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1928934064_;_script infofile_;_ZIP::ssf5.xml_;_
If WpfWindow("Micro Focus MyFlight Sample_2").WpfButton("FIND FLIGHTS").Exist(5) Then
Reporter.ReportEvent micPass, "Passed Test", "Login work properly" @@ hightlight id_;_2067896736_;_script infofile_;_ZIP::ssf7.xml_;_
else
Reporter.ReportEvent micFail, "fail to login", "Login failed"
End If
Reporter.ReportEvent micDone, "Login Done","the Flight App Done login Test"
