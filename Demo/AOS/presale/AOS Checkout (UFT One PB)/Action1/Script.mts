If Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Cart Icon").Exist(3) Then
	Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Cart Icon").Click
	else
Reporter.ReportEvent micFail, "Failed", "Failed to find Cart Icon"
End If
If Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("Check Out Button").Exist(3) Then
	Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("Check Out Button").Click
	else
Reporter.ReportEvent micFail, "Failed", "Failed to click on Check Out Button"
End If
If Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("Next Button").Exist(3) Then
	Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("Next Button").Click
	else
Reporter.ReportEvent micFail, "Failed", "Failed to click on Next Button"
End If
If Browser("Advantage Shopping").Page("Advantage Shopping").WebRadioGroup("MasterCredit Radio Button").Exist(3) Then
	Browser("Advantage Shopping").Page("Advantage Shopping").WebRadioGroup("MasterCredit Radio Button").Select
	else
Reporter.ReportEvent micFail, "Failed", "Failed to select MasterCredit Radio Button"
End If
If Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("Pay Now Button").Exist(3) Then
	Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("Pay Now Button").Click
	else
Reporter.ReportEvent micFail, "Failed", "Failed to click on Pay Now Button"
End If
If Browser("Advantage Shopping").Page("Advantage Shopping").Link("Home Link").Exist(3) Then
	Browser("Advantage Shopping").Page("Advantage Shopping").Link("Home Link").Click
	else
Reporter.ReportEvent micFail, "Failed", "Failed to click on Home Link"
End If
