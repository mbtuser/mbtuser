package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import java.time.Duration;

public class MBTReporterTests {

    static RemoteWebDriver driver;
    static WebDriverWait waiter;
    //private static final String site_alvaro = "http://alvaro.private.net:8000/";

    @Test()
    @Parameters({"site"})
    void reporterStepTest(String site) {
        //WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get(site);
        Reporter.log("navigate to " + site + " properly");
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        driver.findElement(By.xpath("//*[@id=\"L2AGLb\"]")).click();
        driver.findElement(By.xpath("//*[@id=\"APjFqb\"]")).sendKeys("OpenText");
        Reporter.log("searching 'OpenText' properly");
        driver.findElement(By.xpath("//*[@id=\"APjFqb\"]")).sendKeys(Keys.RETURN);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        assert driver.getTitle().contains("OpenText");
        Reporter.log("search on google 'OpenText' work properly", true);
    }

    @Test()
    @Parameters({"site_failed", "assert_contains"})
    void reporterFailedTest(String site_failed, String assert_contains) {
        //WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get(site_failed);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        Boolean display = driver.findElement(By.xpath("//*[@id=\"L2AGLb\"]")).isDisplayed();
        if (display) {
            Reporter.log("navigate to " + site_failed + " properly");
        } else {
            Reporter.log("navigate to " + site_failed + " failed");
        }
        assert driver.getTitle().contains(assert_contains);
    }

    @Test()
    @Parameters({"site_alvaro"})
    void reporterSideRespondTest(String site_alvaro) {
        //WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get(site_alvaro);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        try {
            Assert.assertEquals(site_alvaro, driver.getCurrentUrl());
            System.out.println("Navigated to correct webpage");
        } catch (Throwable pageNavigationError) {
            System.out.println("Didn't navigate to correct webpage");
        }
    }


}
