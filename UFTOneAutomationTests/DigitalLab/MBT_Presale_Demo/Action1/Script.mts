Dim QTP, qtMobileLauncher, launchApp

Set QTP = CreateObject("QuickTest.Application")
QTP.Launch
QTP.Visible = True

Set qtMobileLauncher = QTP.Test.Settings.Launchers.Item("Mobile")

' Mobile tab
qtMobileLauncher.Lab = "DigitalLab" 
qtMobileLauncher.Device.OS = "Android"


' App Settings + Test Options
Set launchApp = qtMobileLauncher.LaunchOnStart
launchApp.IsPackaged = True
launchApp.Counter = 1

qtMobileLauncher.InstallApps = True
qtMobileLauncher.RestartApps = False
qtMobileLauncher.UninstallApps = False

qtMobileLauncher.TrackCPUMetric = False
qtMobileLauncher.TrackMemoryMetric = False
qtMobileLauncher.TrackFreeMemoryMetric = False
qtMobileLauncher.TrackLogs = False

' Web tab: Use = Mobile Browser + URL + Use settings on Mobile tab
qtMobileLauncher.EnableWebSettingForMobile

QTP.Test.Save

Set launchApp = Nothing
Set qtMobileLauncher = Nothing
Set QTP = Nothing


Browser("Browser").Page("Advantage Shopping").WebElement("WebElement_3").Click
Browser("Browser").Page("Advantage Shopping").Link("Link").Click
Browser("Browser").Page("Advantage Shopping").WebEdit("username").Set Parameter("username")
Browser("Browser").Page("Advantage Shopping").WebEdit("password").SetSecure Parameter("password")
Browser("Browser").Page("Advantage Shopping").WebElement("SIGN IN").Click
Browser("Browser").Page("Advantage Shopping").WebButton("sign_in_btn").Click
Browser("Browser").Page("Advantage Shopping").Link("LaptopsCategory").Click
Browser("Browser").Page("Advantage Shopping").WebElement("HP Chromebook 14 G1(ENERGY").Click
Browser("Browser").Page("Advantage Shopping").WebButton("save_to_cart").Click
Browser("Browser").Page("Advantage Shopping").WebElement("WebElement_2").Click
Browser("Browser").Page("Advantage Shopping").Link("1").Click
Browser("Browser").Page("Advantage Shopping").WebButton("check_out_btn").Click
Browser("Browser").Page("Advantage Shopping").WebButton("next_btn").Click
Browser("Browser").Page("Advantage Shopping").WebButton("pay_now_btn_MasterCredit").Click
wait(10)
Dim orderText
Dim orderNumber
Dim regEx
Dim matches

orderText = Browser("Browser").Page("Advantage Shopping").WebElement("orderNumberLabel").GetROProperty("innertext")

Set regEx = New RegExp
regEx.Pattern = "(\d+)"
regEx.IgnoreCase = True

Set matches = regEx.Execute(orderText)

If matches.Count > 0 Then
    orderNumber = matches(0).SubMatches(0)
    Reporter.ReportEvent micPass, "Order Number captured", orderNumber
Else
    Reporter.ReportEvent micFail, "Order Number not found", orderText
    ExitTest
End If

Parameter("OrderNumber") = orderNumber
