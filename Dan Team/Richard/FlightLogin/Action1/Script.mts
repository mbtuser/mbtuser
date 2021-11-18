systemUtil.CloseProcessByName ("FlightsGUI.exe")
systemUtil.Run ("C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe")
'SystemUtil.CloseProcessByWndTitle ("Micro Focus Flights Service APIs")
'systemUtil.Run ("C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsAPI.exe")

'/////////////////////
 @@ hightlight id_;_2067902600_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set Parameter("User_Name") @@ hightlight id_;_2113647904_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure Parameter("Password") @@ hightlight id_;_2092967184_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
 @@ hightlight id_;_2363996_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate "29-Jul-2021" @@ hightlight id_;_2090155848_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2085992504_;_script infofile_;_ZIP::ssf16.xml_;_
' @@ hightlight id_;_2090158344_;_script infofile_;_ZIP::ssf21.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("BACK").Click @@ hightlight id_;_2090127384_;_script infofile_;_ZIP::ssf25.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate "30-Jul-2021" @@ hightlight id_;_2090158392_;_script infofile_;_ZIP::ssf22.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2090160408_;_script infofile_;_ZIP::ssf23.xml_;_
systemUtil.CloseProcessByName ("FlightsGUI.exe")
