If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Open").Exist Then
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Open").Click
End If @@ script infofile_;_ZIP::ssf8.xml_;_

If Browser("Dashboard - Advantage").Page("Dashboard - Advantage").Link("Accounts").Exist Then
	Browser("Dashboard - Advantage").Page("Dashboard - Advantage").Link("Accounts").Click
	Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebButton("Open new account").Click
	Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebEdit("name").Set Parameter("accountName"
       Browser("Dashboard - Advantage").Page("Accounts - Advantage Bank").WebButton("Create").Click
End If
