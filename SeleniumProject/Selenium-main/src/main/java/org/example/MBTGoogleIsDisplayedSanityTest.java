package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

public class MBTGoogleIsDisplayedSanityTest {

    static RemoteWebDriver driver;
    static WebDriverWait waiter;
    //WebDriver driver = new ChromeDriver();

    @BeforeSuite
    void prepare() {

        driver.manage().window().maximize();
        driver.get("https://google.com/");
    }

    @Test
    void findGoogleSearchField() {
        driver.get("https://google.com");
        driver.findElement(By.xpath("//*[@id=\"APjFqb\"]")).isDisplayed();
    }

    @Test
    void findGoogleSearchButton() {
        driver.get("https://google.com");
        driver.findElement(By.xpath("//*[@class=\"iblpc\"]")).isDisplayed();
    }

}
