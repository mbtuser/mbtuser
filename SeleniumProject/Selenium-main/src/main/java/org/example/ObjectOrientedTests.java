package org.example;

import fte.utils.Elements;
import fte.utils.Strings;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Reporter;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

import java.time.Duration;

public class ObjectOrientedTests {

    static RemoteWebDriver driver;
    static WebDriverWait waiter;
    //WebDriver driver = new ChromeDriver();

    @BeforeSuite
    void prepare() {
        driver.manage().window().maximize();
    }

    @Test
    void objectOrientedStrings() {
        driver.manage().window().maximize();
        driver.get(Strings.url);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        driver.findElement(By.xpath("//*[@id=\"L2AGLb\"]")).click();
        driver.findElement(By.xpath("//*[@id=\"APjFqb\"]")).sendKeys(Strings.search);
        driver.findElement(By.xpath("//*[@id=\"APjFqb\"]")).sendKeys(Keys.RETURN);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        assert driver.getTitle().contains(Strings.search);
        Reporter.log("search on google 'OpenText' work properly");

    }

    @Test
    void objectOrientedElements() {
        Elements.prepareTest();
        Elements.clickSearchTextFiled();
        Elements.setText();
        Elements.enter();
        Elements.verifyText();
        Reporter.log("search on google 'OpenText' work properly");

    }

}
