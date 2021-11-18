WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set Parameter("Name") @@ hightlight id_;_1892971928_;_script infofile_;_ZIP::ssf16.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click
'-----------------------------------------------------------------------------------------------------------------------
WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order # completed").WaitProperty "visible",true,10000
strOrder=WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order # completed").GetROProperty("text")
arrValues=split(strOrder," ")
OrderNum=arrValues(1)
Parameter("Order_Number")=cint(OrderNum)
print OrderNum
'-----------------------------------------------------------------------------------------------------------------------
'create new order with call to Rest API Tests
RunAPITest "APITestCreateOrder" ,"Denver","Frankfurt","john"

'-----------------------------------------------------------------------------------------------------------------------
'DB SQLite3 Output Wizard

' the database connection string must be parameterized to match who is running this test so
connstring = "DSN=QT_Flight32;DBQ=C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\DB\flight32.mdb;Driver=C:\Windows\system32\odbcjt32.dll;DriverId=281;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
DataTable.Value("SQL_Query", dtGlobalSheet) = "SELECT * FROM Orders ORDER BY OrderNumber DESC LIMIT 1"
DataTable.Value("connectionstring", dtGlobalSheet) = connstring

'If DbTable("DbTable_2").Exist (0) Then
'Print " Current query : " & DbTable("DbTable_2").GetTOProperty ("Source")
'DbTable("DbTable").SetTOProperty "Source", "Select * from Orders"
'Print " Modified query : " & DbTable("DbTable_2").GetTOProperty ("DbTable_2")
'End If
 @@ hightlight id_;_2073777992_;_script infofile_;_ZIP::ssf33.xml_;_
'DbTable("DbTable_2").Check CheckPoint("DbTable_2")
'-----------------------------------------------------------------------------------------------------------------------
'whoIsLoggedIn = Environment.Value("UserName") ' get the name
'DataTable.Value("userLoggedIn", dtLocalSheet) = whoIsLoggedIn ' store it into the data table
' now, in this connection string, it can concatentate the string
'DbTable("DbTable_2").Output CheckPoint("DbTable_2")
'-----------------------------------------------------------------------------------------------------------------------
'Capture "Order number" in Output Parameter
'WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order # completed").Output CheckPoint("Order # completed")
'Parse "Order Number" with Regular Expression
str = Parameter.Item("Order_Number")
Set RegEx = New RegExp
RegEx.Pattern = "[^\d*]"
RegEx.IgnoreCase = True 
RegEx.Global = True 
Parameter.Item("Order_Number") = RegEx.Replace(str, "")

'-----------------------------------------------------------------------------------------------------------------------
WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click
