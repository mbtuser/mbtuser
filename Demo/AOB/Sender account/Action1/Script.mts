Dim x

x= Parameter("Account")


Reporter.ReportEvent micDone, "Got Bank account", x

If x="1234"  Then
	Reporter.ReportEvent micDone, "Bank account number is  as Expected: ", x
Else
	Reporter.ReportEvent micFail, "Got worng Bank account number", x
End If
 
