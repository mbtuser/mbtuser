package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import java.time.Duration;
import java.util.List;

public class MBTSeleniumSanityTests {
/*
    static RemoteWebDriver driver;
    static WebDriverWait waiter;

    private static final String url = "https://www.google.com";
    private static final String demoUrl = "https://demo.guru99.com/test/newtours";
    private static final String demoUserName = "admin";
    private static final String demoPassword = "admin";
    //WebDriver driver = new ChromeDriver();

    @Test()
    void browserGoogleSearchTest() {
        driver.manage().window().maximize();
        driver.get("https://google.com");
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        driver.findElement(By.xpath("//*[@id=\"L2AGLb\"]")).click();
        driver.findElement(By.xpath("//*[@id=\"APjFqb\"]")).sendKeys("OpenText");
        driver.findElement(By.xpath("//*[@id=\"APjFqb\"]")).sendKeys(Keys.RETURN);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        assert driver.getTitle().contains("OpenText");
        Reporter.log("search on google 'OpenText' work properly");
    }

    @Test()
    void browserKeyboardActionsTest() {
        driver.manage().window().maximize();
        driver.get("https://google.com");
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));

        WebElement searchField = driver.findElement(By.xpath("//*[@id=\"L2AGLb\"]"));
        searchField.click();
        WebElement setText = driver.findElement(By.xpath("//*[@id=\"APjFqb\"]"));
        new Actions(driver)
                .sendKeys(setText, "OpenText!")
                .perform();

        new Actions(driver)
                .sendKeys(setText, Keys.ENTER)
                .perform();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        assert driver.getTitle().contains("OpenText");
        Reporter.log("search on google 'OpenText' work properly");

    }

    @Test()
    @Parameters({"demoSite", "userName", "password"})
    void browserParameterXmlLoginTest(String demoSite, String userName, String password) {
        driver.manage().window().maximize();
        driver.get(demoSite);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        String expectedTitle = "Welcome: Mercury Tours";
        String actualTitle = "";
        if (actualTitle.contentEquals(expectedTitle)) {
            System.out.println("Test Passed!");
        } else {
            System.out.println("Test Failed");
        }
        WebElement userNameLogin = driver.findElement(By.name("userName"));
        userNameLogin.sendKeys(userName);
        WebElement passwordLogin = driver.findElement(By.name("password"));
        passwordLogin.sendKeys(password);
        WebElement submitLogin = driver.findElement(By.name("submit"));
        submitLogin.click();
        List<WebElement> list = driver.findElements(By.xpath("//*[contains(text(),'" + "Login Successfully" + "')]"));
        Assert.assertTrue(list.size() > 0, "Text not found!");
    }

    @Test()
    @Parameters({"site"})
    void browserParameterXmlUrlTest(String site) {
        driver.manage().window().maximize();
        driver.get(site);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        Assert.assertTrue(driver.getCurrentUrl().contains(site), "the URL is incorrect : Test Failed");
        Reporter.log("navigate to " + site + " work properly");
    }

    @Test()
    @Parameters({"site"})
    void browserIterationUrlTest(String site) {
        driver.manage().window().maximize();
        driver.get(site);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        Assert.assertTrue(driver.getCurrentUrl().contains(site), "the URL is incorrect : Test Failed");
        Reporter.log("the Iteration of navigate to " + site + " work properly");
    }

    @Test
    void browserFormTest() {
        driver.manage().window().maximize();
        driver.get("https://www.techlistic.com/p/selenium-practice-form.html");
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));

        WebElement cookie = driver.findElement(By.id("ez-accept-all"));
        if (cookie.isDisplayed()) {
            cookie.click();
        } else {
            Reporter.log("the Cookies windows not display");
        }

        // Set Chrome window size
        // driver.manage().window().setSize(new Dimension(1552, 840));
        // Enter Firstname
        driver.findElement(By.name("firstname")).click();
        driver.findElement(By.name("firstname")).sendKeys("Tom");
        // Set Lastname
        driver.findElement(By.name("lastname")).click();
        driver.findElement(By.name("lastname")).sendKeys("Wood");
        // Select Gender
        driver.findElement(By.id("sex-0")).click();
        // Select Experience
        driver.findElement(By.id("exp-4")).click();
        // Enter Date
        driver.findElement(By.id("datepicker")).click();
        driver.findElement(By.id("datepicker")).sendKeys("16-05-2018");
        // Select Profession
        driver.findElement(By.id("profession-1")).click();
        // Select Automation Tool
        driver.findElement(By.id("tool-2")).click();

        // Select Continent
        driver.findElement(By.id("continents")).click();
        WebElement dropdown1 = driver.findElement(By.id("continents"));
        dropdown1.findElement(By.xpath("//option[. = 'Europe']")).click();

        // Select Command
        WebElement dropdown2 = driver.findElement(By.id("selenium_commands"));
        dropdown2.findElement(By.xpath("//option[. = 'Browser Commands']")).click();


        // Scroll Vertical
        // js.executeScript("window.scrollTo(0,675.5555419921875)");

        // Click Submit
        driver.findElement(By.id("submit")).click();

    }

 */
}
