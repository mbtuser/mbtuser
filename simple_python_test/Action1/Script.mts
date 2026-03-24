Dim shell, exec, pythonFile, cmd, exitCode, fso

pythonFile = Environment("TestDir") & "\simple_python_test.py"

Set fso = CreateObject("Scripting.FileSystemObject")
If Not fso.FileExists(pythonFile) Then
    Reporter.ReportEvent micFail, "Python Test", "Python file not found: " & pythonFile
    ExitAction
End If

Set shell = CreateObject("WScript.Shell")

' Try py first
cmd = "cmd /c py " & Chr(34) & pythonFile & Chr(34)
On Error Resume Next
Set exec = shell.Exec(cmd)
If Err.Number <> 0 Then
    Err.Clear
    Set exec = Nothing
End If
On Error GoTo 0

' If py failed, try python
If exec Is Nothing Then
    cmd = "cmd /c python " & Chr(34) & pythonFile & Chr(34)
    On Error Resume Next
    Set exec = shell.Exec(cmd)
    If Err.Number <> 0 Then
        Err.Clear
        Set exec = Nothing
    End If
    On Error GoTo 0
End If

If exec Is Nothing Then
    Reporter.ReportEvent micFail, "Python Test", "Could not start Python using 'py' or 'python'"
    ExitAction
End If

Do While exec.Status = 0
    Wait 1
Loop

exitCode = exec.ExitCode

If exitCode = 0 Then
    Reporter.ReportEvent micPass, "Python Test", "Python script passed successfully"
Else
    Reporter.ReportEvent micFail, "Python Test", "Python script failed with exit code: " & exitCode
End If
