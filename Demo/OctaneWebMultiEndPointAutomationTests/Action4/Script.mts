Browser("DASHBOARD").Page("DASHBOARD").Link("DASHBOARD").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("DASHBOARD").Page("DASHBOARD").Link("Models").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Reporter.ReportEvent micDone, "Done the tests","Done the Octane Navigate to Models Test"
systemUtil.CloseProcessByName ("firefox.exe")
