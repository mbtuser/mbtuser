systemUtil.CloseProcessByName ("FlightsGUI.exe")
systemUtil.Run ("C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe")
 @@ hightlight id_;_5639336_;_script infofile_;_ZIP::ssf30.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set Parameter("Wrong_User_Name") @@ hightlight id_;_2093996680_;_script infofile_;_ZIP::ssf32.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure Parameter("Wrong_Password")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_19270084_;_script infofile_;_ZIP::ssf26.xml_;_

 Reporter.ReportEvent micWarning, "Warning login recovery","Warning login Tests recovery Description"
 
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set Parameter("User_Name") @@ hightlight id_;_2113647904_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure Parameter("Password") @@ hightlight id_;_2092967184_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
If WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").Exist(5) Then
	Reporter.ReportEvent micPass, "Passed Custom Step Test", "Login succefull Description"
	else
	Reporter.ReportEvent micFail, "Failed Error Step Test", "Fail to Login incurrect user or password Description"
End If
Reporter.ReportEvent micDone, "Recovery Test Step Done","the Flight App Done recovery Test Description" @@ hightlight id_;_2090160408_;_script infofile_;_ZIP::ssf23.xml_;_
systemUtil.CloseProcessByName ("FlightsGUI.exe")
