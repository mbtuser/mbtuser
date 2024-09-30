'Create a QTP object
Set QTP = CreateObject("QuickTest.Application")
QTP.Launch
QTP.Visible = False
 
'Open a UFT One test
QTP.Open "C:\Users\Administrator\Desktop\tool\DigitalLabSetConficuration", True 

'Set result location
Set qtpResultsOpt = CreateObject("QuickTest.RunResultsOptions")
qtpResultsOpt.ResultsLocation = "C:\Users\Administrator\Desktop\tool\DigitalLabSetConficuration" + "\Results" 

'Run the test
QTP.Test.Run qtpResultsOpt
 
'Close UFT One
QTP.Test.Close
QTP.Quit