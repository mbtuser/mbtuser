if Browser("LongPress demo").Page("LongPress demo").WebButton("Longpress Me for 2 Seconds").Exist(60) Then
Browser("LongPress demo").Page("LongPress demo").WebButton("Back Button").Click
End If
Browser("LongPress demo").Page("Page").Link("Pinch").Click
