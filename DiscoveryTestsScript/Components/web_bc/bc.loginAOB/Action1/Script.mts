WebUtil.LaunchBrowser "CHROMIUMEDGE"
Browser("Browser").Navigate "http://afc1c72a7579a43d99a3670334f6c186-ff4ae9272aa34b72.elb.us-east-1.amazonaws.com/"
Browser("Browser").Page("Home - Advantage Bank").WebEdit("username").Set "admin"
Browser("Browser").Page("Home - Advantage Bank").WebEdit("password").SetSecure "6481729e3b5b10ff4867a8430ec1"
Browser("Browser").Page("Home - Advantage Bank").WebButton("Sign-In").Click
