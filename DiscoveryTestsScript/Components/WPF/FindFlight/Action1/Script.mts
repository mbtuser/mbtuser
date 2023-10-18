WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Los Angeles"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "San Francisco"
WpfWindow("Micro Focus MyFlight Sample").WpfImage("WpfImage_3").Click 9,13
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("Su").SetDate "30-Jun-2023"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click
