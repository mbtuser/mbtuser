Option Explicit

Dim sURL, sUser, sPass

sURL  = "https://uptight-pilot-test-flow.base44.app/Home"
sUser = "admin"
sPass = "admin"

SystemUtil.Run "msedge.exe", sURL
Browser("creationtime:=0").Sync

Reporter.ReportEvent micDone, "Step 1", "Site opened successfully"

Browser("AutoPilot AI").Page("AutoPilot AI").WebButton("Login").Click

Wait 2

Reporter.ReportEvent micDone, "Step 2", "Login popup opened"

Browser("AutoPilot AI").Page("AutoPilot AI").WebEdit("Enter any username").Set sUser
Reporter.ReportEvent micDone, "Step 3", "Username entered"

Browser("AutoPilot AI").Page("AutoPilot AI").WebEdit("Enter any password").Set sPass
Reporter.ReportEvent micDone, "Step 4", "Password entered"

Browser("AutoPilot AI").Page("AutoPilot AI").WebButton("Login_2").Click

Reporter.ReportEvent micDone, "Step 5", "Login button clicked"

Wait 3

If Browser("creationtime:=0").Page("title:=.*").Exist(5) Then
    Reporter.ReportEvent micWarning, "Validation", "Login flow executed (needs UI validation)"
Else
    Reporter.ReportEvent micWarning, "Validation", "Unable to verify login result"
End If
