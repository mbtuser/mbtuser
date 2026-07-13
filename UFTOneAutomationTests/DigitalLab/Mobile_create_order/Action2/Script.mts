AIUtil.FindTextBlock("APTOPS").Click
AIUtil.FindTextBlock("$299.99").Click
AIUtil.FindTextBlock("ADD TO CART").Click
AIUtil("shopping_cart").Click
AIUtil.FindTextBlock("CHECKOUT (PAY $299.99)").Click
AIUtil("button", "PAY NOW").Click




'AIUtil.SetContext Device("micclass:=Device")
'AIUtil.FindTextBlock("HP CHROMEBOOK", micFromLeft, 1).Click
'AIUtil.FindTextBlock("ADD TO CART").Click
'AIUtil("shopping_cart").Click

'AIUtil.FindTextBlock("CHECKOUT (PAY $299.99)").Click
'AIUtil.FindTextBlock("Your tracking number is 1783841323").Click



'AIUtil.FindTextBlock("Your order number is 3841325525").Click
Dim orderLabel
Dim orderText
Dim orderNumber
Dim regEx
Dim matches

Set orderLabel = Device("Device") _
    .App("Advantage Shopping") _
    .MobileLabel("resourceid:=textViewOrderNumber")

If orderLabel.Exist(20) Then

    orderText = orderLabel.GetROProperty("text")

    Reporter.ReportEvent micDone, _
        "Order text detected", _
        orderText

    Set regEx = New RegExp
    regEx.Pattern = "Your order number is\s+(\d+)"
    regEx.Global = False
    regEx.IgnoreCase = True

    Set matches = regEx.Execute(orderText)

    If matches.Count > 0 Then

        orderNumber = matches(0).SubMatches(0)

        Parameter("OrderNumber") = orderNumber

        Reporter.ReportEvent micPass, _
            "Order number captured", _
            orderNumber

    Else
        Reporter.ReportEvent micFail, _
            "Order number extraction failed", _
            "Detected text: " & orderText
        ExitAction
    End If

Else
    Reporter.ReportEvent micFail, _
        "Order number label not found", _
        "MobileLabel with resourceid=textViewOrderNumber was not detected"
    ExitAction
End If
