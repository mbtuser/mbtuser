WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2022729984_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,1 @@ hightlight id_;_2021591160_;_script infofile_;_ZIP::ssf2.xml_;_
If WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Exist(5) Then
	Reporter.ReportEvent micFail, "Failed Test", "Fail to find element"
	Else 
	Reporter.ReportEvent micPass, "Passed Test", "find element properly"
End If @@ hightlight id_;_2017343920_;_script infofile_;_ZIP::ssf3.xml_;_
Reporter.ReportEvent micDone, "Test Done","the Flight App Done Failed to find element Test"
systemUtil.CloseProcessByName ("FlightsGUI.exe")
