package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.*;

public class MBTAOBTests {
/*
    static RemoteWebDriver driver;
    static WebDriverWait waiter;

    @BeforeSuite
    void prepare() {
        driver.manage().window().maximize();
        driver.get("https://advantageonlinebanking.com/");
    }

    @Test
    void aob_login() {
        driver.findElement(By.id("form-username")).sendKeys("admin");
        driver.findElement(By.id("form-password")).sendKeys("demo");
        driver.findElement(By.cssSelector(".btn-primary > .button-label")).click();
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    @Test
    void loan_calculator() {
        WebElement loansTab = waiter.until(ExpectedConditions.visibilityOfElementLocated(By.linkText("Loans")));
        loansTab.click();
        driver.findElement(By.cssSelector(".btn-primary > .button-label")).click();
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Test
    void add_to_watchlist() {
        WebElement stocksTab = waiter.until(ExpectedConditions.visibilityOfElementLocated(By.linkText("Stocks")));
        stocksTab.click();
        WebElement stocksDropDown = waiter.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".MuiAutocomplete-inputRoot")));
        stocksDropDown.click();
        WebElement firstListItem = waiter.until(ExpectedConditions.visibilityOfElementLocated(By.id("watchlist-option-0")));
        firstListItem.click();
        driver.findElement(By.cssSelector(".btn-primary > .button-label")).click(); //add stock
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Test
    void loan_calculator2() {
        WebElement loansTab = waiter.until(ExpectedConditions.visibilityOfElementLocated(By.linkText("Loans")));
        loansTab.click();
        driver.findElement(By.cssSelector(".btn-primary > .button-label")).click();
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @Test
    void aob_logout() {
        WebElement infoButton = waiter.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div > .injected-svg")));
        infoButton.click();
        WebElement logoutMenu = waiter.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".MuiButtonBase-root:nth-child(3)")));
        logoutMenu.click();
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

 */

}
