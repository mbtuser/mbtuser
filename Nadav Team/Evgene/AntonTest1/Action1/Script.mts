Set objShell = CreateObject("Shell.Application")
Set fileSystemObj = CreateObject("Scripting.FileSystemObject")

myURL = "https://unixpapa.com/js/testmouse.html"

chromeExist = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If fileSystemObj.FileExists(chromeExist) Then
	objShell.ShellExecute "C:\Program Files\Google\Chrome\Application\chrome.exe", myURL, ""
else
	objShell.ShellExecute "C:\Program Files (X86)\Google\Chrome\Application\chrome.exe", myURL, ""
End If

x = Browser("Browser Mouse Event Test Page").Page("Browser Mouse Event Test Page").Link("click here to test").GetROProperty("abs_x")
y = Browser("Browser Mouse Event Test Page").Page("Browser Mouse Event Test Page").Link("click here to test").GetROProperty("abs_y")

x_1 = Browser("Browser Mouse Event Test Page").Page("Browser Mouse Event Test Page").Link("click here to clear").GetROProperty("abs_x")
y_1 = Browser("Browser Mouse Event Test Page").Page("Browser Mouse Event Test Page").Link("click here to clear").GetROProperty("abs_y")



print x
print y



Browser("Browser Mouse Event Test Page").Page("Browser Mouse Event Test Page").Highlight
Set device1 = CreateObject("Mercury.DeviceReplay")

For Iterator = 1 To 10 Step 1
	device1.MouseClick x+10, y+10, 0
	Browser("Browser Mouse Event Test Page").Sync
	device1.MouseClick x_1+10, y_1+10, 0
	Browser("Browser Mouse Event Test Page").Sync

Next

