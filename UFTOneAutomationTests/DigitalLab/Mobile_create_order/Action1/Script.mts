AIUtil.SetContext Device("micclass:=Device")
AIUtil("hamburger_menu").Click
AIUtil.FindTextBlock("LOGIN").Click
AIUtil.FindTextBlock("USER NAME").Click
Device("Device").App("Advantage Shopping").MobileEdit("User Name").Set Parameter("UserName")
AIUtil.FindTextBlock("PASSWO RD").Click
Device("Device").App("Advantage Shopping").MobileEdit("Password").SetSecure Parameter("Password")
AIUtil.FindTextBlock("LOGIN", micFromBottom, 1).Click
If Device("Device").App("Advantage Shopping").MobileButton("No").Exist Then
	Device("Device").App("Advantage Shopping").MobileButton("No").Tap
End If

