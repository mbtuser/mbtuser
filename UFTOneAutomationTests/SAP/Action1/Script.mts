'************************************************************************************************************************
'Description:
'
'This example opens UFT One and configures options for recording and running
'tests on an SAP Gui for Windows application.
'
'************************************************************************************************************************

Dim qtApp 'As QuickTest.Application ' Declare the Application object variable
Dim qtTest 'As QuickTest.Test ' Declare a Test object variable

Set qtApp = CreateObject("QuickTest.Application") ' Create the Application object
qtApp.SetActiveAddins Array("SAP") ' Load the SAP Add-in
qtApp.Launch ' Start UFT One
qtApp.Visible = True ' Make the UFT One application visible
qtApp.Open "D:\OpenText\mbtuser_git\mbtuser\UFTOneAutomationTests\SAP\Test", False

' Configure Advanced SAP options

'Automatically create a data sheet associated with each table
' and grid on which you record. The data sheet contains data for all cells that are set
'during a single server correspondence.
qtApp.Options.SAP.AutoParameterizeTables = True

'Record a SAPGuiStatusBar.Sync method and capture the corresponding
' Active Screen every time an SAP status bar displays a message.
qtApp.Options.SAP.RecordStatusBar = True

'Instruct UFT One to terminate all currently open SAP Gui for
' Windows sessions when a test is closed.
qtApp.Options.SAP.SessionCleanup = True

'Do not record a Reset method at the start of a recording session opened
'using the Auto-Logon option.
qtApp.Options.SAP.RecordResetMethod = False

'Show a warning message each time the server is set to use the "Low speed connection" option.
qtApp.Options.SAP.ShowLowSpeedWarnings = True

'Show a warning message each time the SAP Gui Scripting Interface is disabled.
qtApp.Options.SAP.ShowDisabledConnectionWarnings = True

'Instruct UFT One to use its built-in Web support to record and run on HTML elements.
qtApp.Options.SAP.UseSapGuiScriptingForHTML = False

Set qtApp = Nothing ' Release the Application object
