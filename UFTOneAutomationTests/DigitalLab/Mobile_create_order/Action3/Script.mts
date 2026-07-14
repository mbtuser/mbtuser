AIUtil.SetContext Device("micclass:=Device")

Device("Device").App("Advantage Shopping").MobileObject("Main Menu").Tap
'AIUtil("hamburger_menu").Click
AIUtil.FindTextBlock("SIGN OUT").Click
AIUtil.FindTextBlock("YES").Click
