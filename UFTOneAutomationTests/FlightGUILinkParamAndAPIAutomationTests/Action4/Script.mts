RunAPITest "APITestCreateOrder"
Reporter.ReportEvent micDone, "API Test Done" , "the API test and link parameters work properly"
systemUtil.CloseProcessByName ("FlightsGUI.exe")
SystemUtil.CloseProcessByWndTitle ("Micro Focus Flights Service APIs")
