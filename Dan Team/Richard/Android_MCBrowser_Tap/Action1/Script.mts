if Browser("Browser").Page("LongPress demo").WebButton("Longpress Me for 2 Seconds").Exist(60) Then
Browser("Browser").Page("LongPress demo").WebButton("Back Button").Click
End If
Browser("Browser").Page("Page").Link("Pinch").Click

