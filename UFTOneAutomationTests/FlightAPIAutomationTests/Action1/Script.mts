'-----------------------------------------------------------------------------------------------------------------------
Dim objShell
set objShell = CreateObject("Shell.Application")

Set fileSystemObj = createobject("Scripting.FileSystemObject")
flightsExist = "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
If fileSystemObj.FileExists(flightsExist) then
objShell.ShellExecute "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
objShell.ShellExecute "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsAPI.exe"
Else
objShell.ShellExecute "C:\Program Files (x86)\OpenText\UFT One\samples\Flights Application\FlightsGUI.exe"
objShell.ShellExecute "C:\Program Files (x86)\OpenText\UFT One\samples\Flights Application\FlightsAPI.exe"
End If

'-----------------------------------------------------------------------------------------------------------------------
If WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Exist(3) Then
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set Parameter("User_Name")
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure Parameter("Password")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click

If WpfWindow("Micro Focus MyFlight Sample_2").WpfButton("FIND FLIGHTS").Exist(5) Then
Reporter.ReportEvent micPass, "Passed Test", "Login work properly" @@ hightlight id_;_2078633632_;_script infofile_;_ZIP::ssf10.xml_;_
else
Reporter.ReportEvent micFail, "Failed Test", "Failed to Login"
End If @@ hightlight id_;_2069150272_;_script infofile_;_ZIP::ssf11.xml_;_

ElseIf WpfWindow("OpenText MyFlight Sample").WpfEdit("agentName").Exist(3) Then
WpfWindow("OpenText MyFlight Sample").WpfEdit("agentName").Set Parameter("User_Name")
WpfWindow("OpenText MyFlight Sample").WpfEdit("password").SetSecure Parameter("Password")
WpfWindow("OpenText MyFlight Sample").WpfButton("OK").Click
 @@ hightlight id_;_1943385192_;_script infofile_;_ZIP::ssf16.xml_;_
 If WpfWindow("OpenText MyFlight Sample").WpfButton("FIND FLIGHTS").Exist(5) Then
 	Reporter.ReportEvent micPass, "Passed Test", "Login succefull"
 	else
 	Reporter.ReportEvent micFail, "Failed", "Fail to Login incurrect user or password"
 End If
 
End If
Reporter.ReportEvent micDone, "Login Done","the Flight App Done login Test"
systemUtil.CloseProcessByName ("FlightsGUI.exe")
