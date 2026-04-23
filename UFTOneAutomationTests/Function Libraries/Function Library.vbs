Option Explicit

Function GetTestDir()
    GetTestDir = Environment.Value("TestDir")
End Function

Function BuildPathFromTestDir(ByVal relativePath)
    Dim basePath
    basePath = Environment.Value("TestDir")

    If Right(basePath, 1) <> "\" Then
        basePath = basePath & "\"
    End If

    BuildPathFromTestDir = basePath & relativePath
End Function

Function FileExists(ByVal fullPath)
    Dim fso
    Set fso = CreateObject("Scripting.FileSystemObject")
    FileExists = fso.FileExists(fullPath)
    Set fso = Nothing
End Function

Function GetPythonCommand(ByVal relativePythonFile)
    Dim pythonFilePath
    pythonFilePath = BuildPathFromTestDir(relativePythonFile)

    GetPythonCommand = "cmd /c python """ & pythonFilePath & """"
End Function

Sub RunPythonFromTestDir(ByVal relativePythonFile)
    Dim pythonFilePath
    pythonFilePath = BuildPathFromTestDir(relativePythonFile)

    If FileExists(pythonFilePath) Then
        Reporter.ReportEvent micDone, "Python File", "File exists: " & pythonFilePath
        SystemUtil.Run "cmd.exe", "/c python """ & pythonFilePath & """"
    Else
        Reporter.ReportEvent micFail, "Python File", "File not found: " & pythonFilePath
    End If
End Sub