RunAPITest "APITestCreateOrder"

Reporter.ReportEvent micDone, "API Test Done","the Flight App API Done Test"
systemUtil.CloseProcessByName ("FlightsGUI.exe")
SystemUtil.CloseProcessByWndTitle ("Micro Focus Flights Service APIs")
