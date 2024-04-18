Browser("Browser").Navigate Parameter("url")
 @@ hightlight id_;_65872_;_script infofile_;_ZIP::ssf2.xml_;_
If Browser().Page().WebElement().GetROProeprty("text") = "Server Not Found" Then
	Reporter.ReportEvent micFail, "failed to get url page","the page cannot be reached"
	else
	Reporter.ReportEvent micPass, "url page open properly","the page success to open"
End If
