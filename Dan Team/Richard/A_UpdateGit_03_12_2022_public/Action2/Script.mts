WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Los Angeles" @@ hightlight id_;_1928904928_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "San Francisco" @@ hightlight id_;_1920630488_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfImage("WpfImage").Click 5,13 @@ hightlight id_;_2100778920_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("Su").SetDate "12-Aug-2022" @@ hightlight id_;_1920631592_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business" @@ hightlight id_;_2077103192_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_1920633032_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2073651032_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,0 @@ hightlight id_;_1928938336_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1928938816_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "John Smith" @@ hightlight id_;_2072076296_;_script infofile_;_ZIP::ssf17.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_1920632312_;_script infofile_;_ZIP::ssf18.xml_;_
 @@ hightlight id_;_2061061648_;_script infofile_;_ZIP::ssf30.xml_;_
WpfWindow("Micro Focus MyFlight Sample_2").WpfObject("Order # completed").WaitProperty "visible",true,10000
strOrder=WpfWindow("Micro Focus MyFlight Sample_2").WpfObject("Order # completed").GetROProperty("text")
arrValues=split(strOrder," ")
OrderNum=arrValues(1)
Parameter("Order_Number")=cint(OrderNum)
print OrderNum

str = Parameter.Item("Order_Number")
Set RegEx = New RegExp
RegEx.Pattern = "[^\d*]"
RegEx.IgnoreCase = True 
RegEx.Global = True 
Parameter.Item("Order_Number") = RegEx.Replace(str, "")

For i=0 to 1
    Set a=createobject("wscript.shell") 'Creat one object
    msgbox_message=Parameter.Item("Order_Number") 
    msgbox_time=2
    msgbox_title=""
    a.popup msgbox_message,msgbox_time,msgbox_title  
    Set a=Nothing
Next
print Parameter.Item("Order_Number")  ' this concatenates it to the end of the output window

