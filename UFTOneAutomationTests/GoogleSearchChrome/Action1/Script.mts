' Launch Chrome and open Google
SystemUtil.Run "chrome.exe", "https://www.google.com"

' Identify the browser and page
Set oBrowser = Browser("micclass:=Browser", "creationtime:=0")
Set oPage = oBrowser.Page("micclass:=Page")

' Wait for Google to load
oPage.Sync
Wait 3

' Identify the visible Google search field
Set oSearch = oPage.WebEdit( _
    "html tag:=TEXTAREA", _
    "name:=q", _
    "index:=0")

' Verify that the search field exists
If oSearch.Exist(10) Then

    ' Click the search field
    oSearch.Click
    Wait 1

 ' Enter the search term using keyboard simulation
Set oDeviceReplay = CreateObject("Mercury.DeviceReplay")
oDeviceReplay.SendString "OpenText"
Wait 1

' Press Enter
oDeviceReplay.PressKey 28

    ' Wait for the results
    Wait 5

    Reporter.ReportEvent micPass, _
        "Google Search", _
        "The OpenText search was completed"

Else

    Reporter.ReportEvent micFail, _
        "Google Search", _
        "The Google search field was not found"

End If
