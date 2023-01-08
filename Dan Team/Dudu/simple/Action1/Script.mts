systemUtil.CloseProcessByName ("firefox.exe")
systemUtil.Run ("C:\Program Files\Mozilla Firefox\firefox.exe")

Browser("Home - advantage online shopping").Navigate "http://advantageonlineshopping.com"

AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("SPEAKERS").Click
AIUtil("button", "BUY NOW").Click
AIUtil("plus", micAnyText,micWithAnchorOnLeft, AIUtil("minus")).Click
AIUtil("profile").Click
AIUtil("input", "Username").SetText "demo"
AIUtil("close").Click
