'-----------------------------------------------------------------------------------------------------------------------

systemUtil.CloseProcessByName ("FlightsGUI.exe")
systemUtil.Run ("C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe")
SystemUtil.CloseProcessByWndTitle ("Micro Focus Flights Service APIs")
systemUtil.Run ("C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsAPI.exe")

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
