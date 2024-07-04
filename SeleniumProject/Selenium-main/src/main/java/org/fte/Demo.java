package org.fte;

import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class Demo {

    static RemoteWebDriver driver;
    static WebDriverWait waiter;

    @Test()
    @Parameters({"param"})
    void Performance(@Optional("9") int param) {
        int c = 8;
        Reporter.log(param + "=" + "good", true);
        Assert.assertEquals(param > c, true);
    }

    @Test()
    void Regression() {
        int c = 2;
        Reporter.log("3 = good", true);
        Assert.assertEquals(3 > c, true);

    }

    @Test()
    @Parameters({"param"})
    void Sanity(@Optional("6") int param) {
        int c = 5;
        Reporter.log(param + "=" + "good", true);
        Assert.assertEquals(param > c, true);

    }

    @Test()
    void E2E() {
        int c = 2;
        int d = 1 + 1;
        Reporter.log("2 = good", true);
        Assert.assertEquals(c, d);
    }

    @Test()
    void Extreme() {
        int c = 3;
        int d = 1 + 1;
        Reporter.log("Failed", true);
        Assert.assertEquals(c, d);
    }
}
