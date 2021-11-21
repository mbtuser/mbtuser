If Browser("LongPress demo").Page("LongPress demo").WebButton("Yay! Got longpressed!").Exist(60) Then
	Browser("LongPress demo").Page("LongPress demo").WebElement("Long Press").Click
End If
Browser("LongPress demo").Page("LongPress demo").WebButton("Back Button").Click
