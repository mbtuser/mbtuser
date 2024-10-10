If Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Profile Icon").Exist(3) Then
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Profile Icon").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Sync
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Sign Out Link").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Sync
End If
 @@ script infofile_;_ZIP::ssf1.xml_;_
If Browser("Advantage Shopping_2").Page("Advantage Shopping").Link("UserMenu").Exist(5) Then
Reporter.ReportEvent micPass, "Passed", "Logout properly"
else
Reporter.ReportEvent micFail, "Failed", "Failed to Logout"
End If
Browser("Advantage Shopping").Close
