Option Explicit

Dim pythonFilePath

pythonFilePath = BuildPathFromTestDir("..\Function Libraries\simple_python_test.py")
Reporter.ReportEvent micDone, "Python Path", pythonFilePath

If FileExists(pythonFilePath) Then
    Reporter.ReportEvent micDone, "File Check", "File exists: " & pythonFilePath
    SystemUtil.Run "cmd.exe", "/c python """ & pythonFilePath & """"
Else
    Reporter.ReportEvent micFail, "File Check", "File not found: " & pythonFilePath
End If
