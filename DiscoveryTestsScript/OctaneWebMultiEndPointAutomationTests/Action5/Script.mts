Browser("DASHBOARD").Page("DASHBOARD").Link("DASHBOARD").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("DASHBOARD").Page("DASHBOARD").Link("Units").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Reporter.ReportEvent micDone, "Done the tests","Done the Octane Navigate to Units Test"
systemUtil.CloseProcessByName ("firefox.exe")
