wait 5
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Los Angeles"
wait 5
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "San Francisco"
wait 5
WpfWindow("Micro Focus MyFlight Sample").WpfImage("WpfImage_3").Click 9,13
wait 5
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("Su").SetDate "30-Dec-2023"
wait 5
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2"
wait 5
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click
wait 5
