major = Split(Environment("ProductVer"), ".")(0)
minjor = Split(Environment("ProductVer"),".")(1)
If (CInt(major) = 23 and CInt(minjor)=4) or CInt(major) > 23 Then
	SystemUtil.Run "C:\Program Files (x86)\OpenText\UFT One\samples\Flights Application\FlightsGUI.exe"
Else
	SystemUtil.Run "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
End If
wait 5
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "John"
wait 5
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "648176b85d94c0ef56cd"
wait 5
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
wait 3
