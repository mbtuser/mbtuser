SystemUtil.Run "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "John"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "648176b85d94c0ef56cd"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
