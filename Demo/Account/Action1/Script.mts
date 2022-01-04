Dim a
Dim b
Dim c
a=Parameter("Account")


If a="1234"  Then
	Reporter.ReportEvent micPass, "Expect Password ", "Got "& a
Else
	Reporter.ReportEvent micFail, "Expect Password ", "Got " & a
End If
 
