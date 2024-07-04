package org.example;

import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class MBTWithoutDriverTests {
    static RemoteWebDriver driver;
    static WebDriverWait waiter;

    @Test()
    @Parameters({"param"})
    void parameterEqualsOnePlusOne(@Optional("2") int param) {
        int c = 1 + 1;
        Reporter.log(param + "=" + "good", true);
        Assert.assertEquals(param == c, true);
    }

    @Test()
    @Parameters({"param"})
    void parameterGreaterThanTwo(@Optional("3") int param) {
        int c = 2;
        Reporter.log(param + "=" + "good", true);
        Assert.assertEquals(param > c, true);

    }

    @Test()
    void passedTest() {
        int c = 2;
        int d = 1 + 1;
        Reporter.log("2 = good", true);
        Assert.assertEquals(c, d);
    }

    @Test()
    void failedTest() {
        int c = 3;
        int d = 1 + 1;
        Reporter.log("Failed", true);
        Assert.assertEquals(c, d);
    }
}
