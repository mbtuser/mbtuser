package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;
/*
public class FlightAppTests
{

    int a = 0;

    @BeforeMethod
    void init() {
        a=1;
    }

    @Test
    @Parameters("site")
    void google_search(String site) {
        System.setProperty("webdriver.chrome.driver","C:\\dev\\chromedriver\\chromedriver.exe");

        WebDriver driver = new ChromeDriver();
        driver.get(site);
        driver.findElement(By.name("q")).sendKeys("Model based testing");

        // Simulate pressing the Enter key to perform the search
        driver.findElement(By.name("q")).sendKeys(Keys.RETURN);
        System.out.println("google search element");
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Close the browser
        driver.quit();
    }

    @Test
    void google_search_fail_rename() {
       // System.setProperty("webdriver.chrome.driver","C:\\dev\\chromedriver\\chromedriver.exe");

        WebDriver driver = new ChromeDriver();
        driver.get("http:\\www.google.com");
        driver.findElement(By.name("qqq")).sendKeys("Model based testing");

        // Simulate pressing the Enter key to perform the search
        driver.findElement(By.name("q")).sendKeys(Keys.RETURN);
        System.out.println("google search element");
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Close the browser
        driver.quit();
    }
    @Test(groups = {"unit_login"})
    void unit_login( ) {
        int b = 2;
        int expected = 3;
        System.out.println("unit login");
        Assert.assertEquals( a+b, expected);
    }

    @Test(groups = {"unit_add_flight"})
    void unit_add_flight( ) {
        int b = 2;
        int expected = 3;
        System.out.println("add flight");
        Assert.assertEquals( a+b, expected);
    }

    @AfterMethod
    void finish() {
        a = 0;
    }
}

 */
