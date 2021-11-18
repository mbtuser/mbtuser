RunAction "1 Login", oneIteration
RunAction "2 Flight Confirmation", oneIteration
RunAction "3 Search Order", oneIteration, Parameter("2 Flight Confirmation", "Order_Number")
RunAction "4 RestAPITestCreateOrder", oneIteration
