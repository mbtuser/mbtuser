systemUtil.CloseProcessByName ("FlightsGUI.exe")
systemUtil.Run ("C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe")
SystemUtil.CloseProcessByWndTitle ("Micro Focus Flights Service APIs")
systemUtil.Run ("C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsAPI.exe")

foo = 1 ' just to be able to set a breakpoint
