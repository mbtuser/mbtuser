
LoadAndRunAction "C:\test\repository\copy\src\repo-1003\repository\FlightGUIAPIAutomationTests","1 Login",rngAll,DataTable("User_Name"),DataTable("Password")

LoadAndRunAction "C:\test\repository\copy\src\repo-1003\repository\FlightGUIAPIAutomationTests","2 RestAPITestCreateOrder",rngAll


'********************************************************************************************************************************************


'Run action
LoadAndRunAction "C:\jenkins\workspace\MBT-test-runner-1039-wnp3y\..\..\_test_sources\github.com_ftegit_uftscript\FlightGUIAPIAutomationTests","1 Login",rngAll,DataTable("User_Name"),DataTable("Password")

'********************************************************************************************************************************************

'The action belongs to the test of the previous action. Skip reloading function libraries and recovery scenarios.

'Run action
LoadAndRunAction "C:\jenkins\workspace\MBT-test-runner-1039-wnp3y\..\..\_test_sources\github.com_ftegit_uftscript\FlightGUIAPIAutomationTests","2 RestAPITestCreateOrder"

'********************************************************************************************************************************************