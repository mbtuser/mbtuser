Dim a
Dim b
Dim c
a=Parameter("Password")
b=Parameter("User_Name")



If a="Password"  Then
	Reporter.ReportEvent micPass, "Expect Password ", "Got "& a
	Parameter("Bank_account")="1234"
	Reporter.ReportEvent micDone, "This line to print the bank account", "Bank account is: 1234"
Else
	Reporter.ReportEvent micFail, "Expect Password ", "Got " & a
End If
 


