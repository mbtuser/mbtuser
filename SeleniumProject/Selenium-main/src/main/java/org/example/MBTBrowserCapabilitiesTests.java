package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

public class MBTBrowserCapabilitiesTests {
/*
    public String username = "YOUR USERNAME";
    public String accessKey = "YOUR ACCESSKEY";
    public static RemoteWebDriver driver;
    public static WebDriverWait waiter;
    private static final String url = "https://www.google.com";



    @BeforeClass
    public void setUp() {
        ChromeOptions options = new ChromeOptions();
        Map<String, Object> dlOptions = new HashMap<>();
        dlOptions.put("oauthClientId", "oauth2-yHLID3fe26HQNcmLiRP0@microfocus.com");
        dlOptions.put("oauthClientSecret", "Gem3lCYh3Dj2d87bp3go");
        dlOptions.put("tenantId", "681752805");
        dlOptions.put("browserType", "chrome");
        dlOptions.put("browserVersion", "latest");
        options.setCapability("dl:options", dlOptions);
        URL url = null;
        try {
            url = new URL("https://integ-master.ftdigitallab.valueedge.saas.microfocus.com/selenium/wd/hub");
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
        driver = new RemoteWebDriver(url, options);

        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("browserType", "chrome");
        capabilities.setCapability("version", "94.0");
        capabilities.setCapability("platform", "win10"); // If this cap isn't specified, it will just get the any available one
        capabilities.setCapability("build", "TestNGWithoutPriorityTests");
        capabilities.setCapability("name", "TestNGWithoutPriorityTestsSample");

    }

    @Test
    void findGoogleSearchButton() {
        driver.findElement(By.xpath("body/div[1]/div[3]/form[1]/div[1]/div[1]/div[4]/center[1]/input[1]")).isDisplayed();
    }

    @Test
    void findGoogleButton() {
        driver.findElement(By.xpath("body/div[1]/div[3]/form[1]/div[1]/div[1]/div[4]/center[1]/input[2]")).isDisplayed();
    }

 */

}
