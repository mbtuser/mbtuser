' Declare variables
Dim strExpectedTitle, iURL, objShell
iURL = Parameter("url")
set objShell = CreateObject("Shell.Application")
Set fileSystemObj = createobject("Scripting.FileSystemObject")
edgeExist = "C:\Program Files\Mozilla Firefox\firefox.exe"
If fileSystemObj.FileExists(edgeExist) then
objShell.ShellExecute "C:\Program Files\Mozilla Firefox\firefox.exe", iURL, "", ""
Else
objShell.ShellExecute "C:\Program Files (x86)\Mozilla Firefox\firefox.exe", iURL, "", ""
End If
wait(3)
' Set the expected page title
strExpectedTitle = Parameter("pageName")
strActualTitle = Browser("CreationTime:=1").GetROProperty("title")
' Compare the expected and actual titles
If strExpectedTitle = strActualTitle Then
    ' Log a pass message
    Reporter.ReportEvent micPass, "Page Title Verification", "Page title " & strExpectedTitle & ",matches the expected title."
Else
    ' Log a fail message
    Reporter.ReportEvent micFail, "Page Title Verification", "Page title does not match the expected title. Expected: " & strExpectedTitle & ", Actual: " & strActualTitle
End If
