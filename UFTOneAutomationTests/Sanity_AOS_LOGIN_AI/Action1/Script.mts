' Launch Google Chrome browser
SystemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe"

' Set context again after browser launch
AIUtil.SetContext Browser("creationtime:=0")

' Navigate to the site and refresh
Browser("creationtime:=0").Navigate "https://advantageonlineshopping.com/#/"
Browser("creationtime:=0").Refresh

' Click profile icon
AIUtil("profile").Click

' Check if user is already logged in
If AIUtil.FindTextBlock("Sign out").Exist(1) Then
    Reporter.ReportEvent micWarning, "User already logged in", "Logging out from Advantage Online Shopping"
    AIUtil.FindTextBlock("Sign out").Click
    Wait 1
End If

' Attempt to log in
If AIUtil("input", "Username").Exist(3) Then
    AIUtil("input", "Username").Type "dominikg"
    AIUtil.FindTextBlock("Password").Click
    AIUtil("input", "Password").Type "Password1"
    AIUtil.FindTextBlock("SIGN IN").Click
Else
    ' If not on login page, try navigating to login again
    AIUtil("profile").Click
    AIUtil("input", "Username").Type "dominikg"
    AIUtil.FindTextBlock("Password").Click
    AIUtil("input", "Password").Type "Password1"
    AIUtil.FindTextBlock("SIGN IN").Click
End If

' Click profile icon
AIUtil("profile").Click

' ===== Final verification =====
Wait 2 ' small delay to allow page to load

If AIUtil.FindTextBlock("My orders").Exist(5) Then
    Reporter.ReportEvent micPass, "Login Validation", "Login succeeded - 'My orders' found"
Else
    Reporter.ReportEvent micError, "Login Validation", "Login failed - 'My orders' not found"
End If
