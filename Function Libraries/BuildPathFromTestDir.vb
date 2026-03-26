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


Function GetResourceFile(ByVal folderName, ByVal fileName)
    Dim basePath
    basePath = Environment.Value("TestDir")
    
    If Right(basePath, 1) <> "\" Then
        basePath = basePath & "\"
    End If
    
    GetResourceFile = basePath & folderName & "\" & fileName
End Function