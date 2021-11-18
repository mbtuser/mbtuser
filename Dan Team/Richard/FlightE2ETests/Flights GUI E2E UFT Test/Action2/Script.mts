WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select DataTable("fromCity", dtGlobalSheet) @@ hightlight id_;_1892998568_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select DataTable("toCity", dtGlobalSheet) @@ hightlight id_;_1892997848_;_script infofile_;_ZIP::ssf5.xml_;_
 @@ hightlight id_;_2029914288_;_script infofile_;_ZIP::ssf4.xml_;_
'-----------------------------------------------------------------------------------------------------------------------
'Force a Fail on Interation 2 & Active Recovery Scenario
If cint(Environment.Value("TestIteration")) = (cint(2)) Then
	WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate dateAdd("d",-1,date)
	departureDate = WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").GetROProperty("date")
	If check_data_validity(departureDate) Then
		reporter.ReportEvent micPass, "Date is valid", departureDate
	End If
Else
       WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate dateAdd("d",1,date)
       departureDate = WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").GetROProperty("date")
	If check_data_validity(departureDate) Then
		reporter.ReportEvent micPass, "Date is valid", departureDate
	End If
End If

'-----------------------------------------------------------------------------------------------------------------------

'-----------------------------------------------------------------------------------------------------------------------
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business" @@ hightlight id_;_2046911600_;_script infofile_;_ZIP::ssf30.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_1908840192_;_script infofile_;_ZIP::ssf32.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click

foo = 1 ' to make it easy to set a breakpoint so that variable values can be examined

