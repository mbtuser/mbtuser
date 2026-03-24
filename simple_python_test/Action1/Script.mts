Dim shell, exec, pythonFile, cmd, exitCode

pythonFile = Environment("TestDir") & "\simple_python_test.py"
cmd = "python " & Chr(34) & pythonFile & Chr(34)

Set shell = CreateObject("WScript.Shell")
Set exec = shell.Exec(cmd)

Do While exec.Status = 0
    Wait 1
Loop

exitCode = exec.ExitCode

If exitCode = 0 Then
    Reporter.ReportEvent micPass, "Python Test", "Python script passed successfully"
Else
    Reporter.ReportEvent micFail, "Python Test", "Python script failed with exit code: " & exitCode
End If
