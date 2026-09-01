﻿Dim iURL, objShell, fileSystemObj, chromePath

iURL = "https://google.com"
Set objShell = CreateObject("Shell.Application")
Set fileSystemObj = CreateObject("Scripting.FileSystemObject")

chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
If Not fileSystemObj.FileExists(chromePath) Then
    Reporter.ReportEvent micFail, "Browser Launch", "Google Chrome not found on this machine"
    ExitTest
End If

objShell.ShellExecute chromePath, iURL, "", "", 1
Wait(5)

Browser("Google").Page("Google").WebList("Search").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Google").Page("Google").WebList("opentext.MagqMc .ZFiwCf{backgr").Select "opentext" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Google").Page("opentext - Google Search").Link("OpenText | Secure Information").Click @@ hightlight id_;_2136920872_;_script infofile_;_ZIP::ssf8.xml_;_
