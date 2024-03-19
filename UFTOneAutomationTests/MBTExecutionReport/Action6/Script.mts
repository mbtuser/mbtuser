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

'----------------------------------------------------------------------------------------------------------------------- @@ hightlight id_;_2035501256_;_script infofile_;_ZIP::ssf29.xml_;_
 
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set Parameter("User_Name") @@ hightlight id_;_2113647904_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure Parameter("Password") @@ hightlight id_;_2092967184_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
 @@ hightlight id_;_2363996_;_script infofile_;_ZIP::ssf12.xml_;_
 If WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").Exist(5) Then
 	Reporter.ReportEvent micPass, "Passed Test", "Login succefull"
 	else
 	Reporter.ReportEvent micFail, "Failed", "Fail to Login incurrect user or password"
 End If
Reporter.ReportEvent micWarning, "Warning Tests","the Warning is presented properly on the report" @@ hightlight id_;_2085992504_;_script infofile_;_ZIP::ssf16.xml_;_
Reporter.ReportEvent micDone, "Login Done","the Flight App Done login with Warning report Test"
systemUtil.CloseProcessByName ("FlightsGUI.exe")
