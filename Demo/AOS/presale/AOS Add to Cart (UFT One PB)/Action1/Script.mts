If Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Search Icon").Exist(3) Then
	Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Search Icon").Click
	else
Reporter.ReportEvent micFail, "Failed", "Failed to click on Search Icon"
End If
If Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("Search Box").Exist(3) Then
	Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("Search Box").Set Parameter("ProductID")
	else
Reporter.ReportEvent micFail, "Failed", "Failed to set to Search Box"
End If
If Browser("Advantage Shopping").Page("Advantage Shopping").Link("View All Link").Exist(3) Then
	Browser("Advantage Shopping").Page("Advantage Shopping").Link("View All Link").Click
	else
Reporter.ReportEvent micFail, "Failed", "Failed to click on View All Link"
End If
If Browser("Advantage Shopping").Page("Advantage Shopping").Image("Search Close Button").Exist(3) Then
	Browser("Advantage Shopping").Page("Advantage Shopping").Image("Search Close Button").Click
	else
Reporter.ReportEvent micFail, "Failed", "Failed to click on Search Close Button"
End If
wait(2)
If Browser("Advantage Shopping").Page("Advantage Shopping").Image("First Image").Exist(5) Then
	Browser("Advantage Shopping").Page("Advantage Shopping").Image("First Image").Click
	else
Reporter.ReportEvent micFail, "Failed", "Failed to click on First Image"
End If
If Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("Quantity Box").Exist(5) Then
	Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("Quantity Box").Set Parameter("Quantity")
	else
Reporter.ReportEvent micFail, "Failed", "Failed to set to Quantity Box"
End If
If Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("Add to Cart Button").Exist(3) Then
	Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("Add to Cart Button").Click
	else
Reporter.ReportEvent micFail, "Failed", "Failed to click on Add to Cart Button"
End If
If Browser("Advantage Shopping").Page("Advantage Shopping").Link("Home Link").Exist(3) Then
	Browser("Advantage Shopping").Page("Advantage Shopping").Link("Home Link").Click
	else
Reporter.ReportEvent micFail, "Failed", "Failed to click on Home Link"
End If
