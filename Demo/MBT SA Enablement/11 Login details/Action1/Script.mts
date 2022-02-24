				Dim a
Dim b

a=Parameter("User_Name")
b=Parameter("Password")


If b="MySecretPassword"  Then
	Reporter.ReportEvent micDone, "Expecting ""MySecretPassword"" ", "Got: "& b
	Parameter("Bank_account")="1234"
	Reporter.ReportEvent micPass, "Passing on", "Bank account is set to: 1234"
Else
	Reporter.ReportEvent micFail, "Expecting ""MySecretPassword"" ", "But got: " & b
	Parameter("Bank_account")="4321"
End If
 


