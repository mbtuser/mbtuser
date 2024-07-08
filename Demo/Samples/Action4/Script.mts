If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Open").Exist Then
       Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Open").Click @@ script infofile_;_ZIP::ssf9.xml_;_
End If
wait(3)
       Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Click @@ script infofile_;_ZIP::ssf2.xml_;_
       Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebMenu("My Profile Management").Select "Logout" @@ script infofile_;_ZIP::ssf3.xml_;_
