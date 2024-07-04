package org.example;

import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class MD5Tests {
    static RemoteWebDriver driver;
    static WebDriverWait waiter;

    @Test()
    @Parameters({"filePath"})
    void calculateMD5(@Optional("") String filePath) {
        fte.utils.MD5.calculateMD5(filePath);
    }

}
