SystemUtil.Run "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
wait 7
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "John"
wait 3
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "648176b85d94c0ef56cd"
wait 3
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
wait 5
