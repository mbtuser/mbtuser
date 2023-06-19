systemUtil.CloseProcessByName ("FlightsGUI.exe")
systemUtil.Run ("C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe")

'/////////////////////

WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set Parameter("User_Name")
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure Parameter("Password")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click

WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate "29-Jul-2024"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click

