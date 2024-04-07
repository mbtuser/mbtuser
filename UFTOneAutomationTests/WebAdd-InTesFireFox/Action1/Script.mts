If Browser("Browser").Page("Page").WebEdit("firstname").Exist(5) Then
Reporter.ReportEvent micPass, "Passed Test", "FireFox Browser work properly"
else
Reporter.ReportEvent micFail, "Failed Test", "FireFox Browser Failed"
End If
 @@ hightlight id_;_1642432_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Page").WebEdit("firstname").Set Parameter("firstname") @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("Page").WebEdit("lastname").Set Parameter("lastname") @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("sex").Select "Female" @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("exp").Select "1" @@ script infofile_;_ZIP::ssf18.xml_;_
 @@ hightlight id_;_65662_;_script infofile_;_ZIP::ssf12.xml_;_
