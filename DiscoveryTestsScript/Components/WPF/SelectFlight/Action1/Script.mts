WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 3,0
wait 5
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click
wait 5
WpfWindow("Micro Focus MyFlight Sample").Close
wait 3
