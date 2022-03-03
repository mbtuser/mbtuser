WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click @@ hightlight id_;_1928943472_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER" @@ hightlight id_;_2100783096_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfRadioButton("byNumberRadio").Set @@ hightlight id_;_1918808760_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample_2").WpfEdit("byNumberWatermark").Set Parameter("Order_Number") @@ hightlight id_;_2065591816_;_script infofile_;_ZIP::ssf4.xml_;_
If Parameter("Order_Number") > 0 Then
	Reporter.ReportEvent micPass, "Passed Test", "Link to parameters Order_Number work properly"
	else
	Reporter.ReportEvent micFail, "Failed Test", "Link to parameters Order_Number Failed"
End If
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SEARCH").Click @@ hightlight id_;_2100783960_;_script infofile_;_ZIP::ssf5.xml_;_
Reporter.ReportEvent micDone, "Test Done","the Flight App Done Link parameters Order_Number Test" @@ hightlight id_;_461640_;_script infofile_;_ZIP::ssf24.xml_;_
