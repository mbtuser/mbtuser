'DB SQLite3 Checkpoint Wizard 
'CheckPoint If DB matches passed parameter "OrderNumber" & Static "CustomerName" exists
 ' this halts execution until you dismiss the msgbox
For i=0 to 1
    Set a=createobject("wscript.shell") 'Creat one object
    msgbox_message=Parameter.Item("Order_Number") 
    msgbox_time=2
    msgbox_title=""
    a.popup msgbox_message,msgbox_time,msgbox_title  
    Set a=Nothing
Next
print Parameter.Item("Order_Number")  ' this concatenates it to the end of the output window
'-----------------------------------------------------------------------------------------------------------------------

'-----------------------------------------------------------------------------------------------------------------------

WpfWindow("Micro Focus MyFlight Sample").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER" @@ hightlight id_;_3738022_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfRadioButton("byNumberRadio").Set @@ hightlight id_;_2035303112_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("byNumberWatermark").Set Parameter("Order_Number") @@ hightlight id_;_2035413112_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SEARCH").Click

'-----------------------------------------------------------------------------------------------------------------------
'Using the DB output parameters from action 5 to perform GUI validation
WpfWindow("Micro Focus MyFlight Sample").Check CheckPoint("FlightNum") @@ hightlight id_;_1445576_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTicketsCombo").Check CheckPoint("NumOfTicketsCombo") @@ hightlight id_;_1997777216_;_script infofile_;_ZIP::ssf11.xml_;_

'Application object highlight
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTicketsCombo").highlight

foo = 1 ' to make it easy to set a breakpoint so that variable values can be examined @@ hightlight id_;_2035445080_;_script infofile_;_ZIP::ssf30.xml_;_

