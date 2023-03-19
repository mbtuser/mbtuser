Dim a
Dim b
Dim c

a=Parameter("User_Name")
b=Parameter("Password")

Reporter.ReportEvent micPass, "Open Stocks ", "Successfully login to AOB site"
Reporter.ReportEvent micPass, "StockB ", "Successfully manage my stocks"
Reporter.ReportEvent micPass, "My account ", "My account balance is correct"
Reporter.ReportEvent micPass, "Go to Dashboard ", "Dashboard opened successfully"

randomize
c = 0 'Always pass

'If send User_Name = AOB user from data set
If a = "AOB user" Then
	c=9
End If

If c=0  Then
	Reporter.ReportEvent micPass, "Log out", "Log out from the AOB account"
Else
	Reporter.ReportEvent micFail, "Logout ", "Failed to Logout from AOB"
End If




