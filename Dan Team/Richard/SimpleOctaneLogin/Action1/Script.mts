Browser("Login").Navigate "https://nightly-dev.almoctane.com/" @@ script infofile_;_ZIP::ssf11.xml_;_
 @@ hightlight id_;_134732_;_script infofile_;_ZIP::ssf12.xml_;_
 If Browser("Login").Page("MODEL BASED TESTING -").Image("user avatar").Exist Then
Browser("Login").Page("MODEL BASED TESTING -").Image("user avatar").Click 19,20 @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Login").Page("MODEL BASED TESTING -").WebButton("Logout").Click 5,5
 End If
 
Browser("Login").Page("Login").WebEdit("WebEdit_2").Set "mqm_rnd@hpe.com" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Login").Page("Login").WebEdit("WebEdit").SetSecure "61111463cfd8268e020b0ef8e22f5dab1987eee0601528ae" @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Login").Page("Login").WebButton("Login").Click 5,5
