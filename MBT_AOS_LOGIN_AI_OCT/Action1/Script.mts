'AIUtil.SetContext Browser("creationtime:=0")
systemUtil.Run ("C:\Program Files\Mozilla Firefox\firefox.exe")
'systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
AIUtil.SetContext Browser("creationtime:=0")
Browser("creationtime:=0").Navigate("https://advantageonlineshopping.com/#/category/Speakers/4")
wait(1)
Browser("creationtime:=0").Refresh
AIUtil("profile").Click
If AIUtil.FindTextBlock("Sign out").Exist(1) Then
	Reporter.ReportEvent micWarning, "the AOB already in login", "going to logout from advantage online shopping"
	AIUtil.FindTextBlock("Sign out").Click
End If
If AIUtil("input", "Username").Exist(1) Then
	AIUtil("input", "Username").Type "dominikg"
       AIUtil.FindTextBlock("Password").Click
       AIUtil("input", "Password").Type "Password1"
       AIUtil.FindTextBlock("SIGN IN").Click
       else
      AIUtil("profile").Click
      AIUtil("input", "Username").Type "dominikg"
      AIUtil.FindTextBlock("Password").Click
      AIUtil("input", "Password").Type "Password1"
      AIUtil.FindTextBlock("SIGN IN").Click 
End If


