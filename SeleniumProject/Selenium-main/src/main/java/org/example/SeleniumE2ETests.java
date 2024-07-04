package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.TestNG;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

public class SeleniumE2ETests {
    static RemoteWebDriver driver;
    static WebDriverWait waiter;

    private static final String url = "https://www.google.com";
    private static final String demoUrl = "https://demo.guru99.com/test/newtours";
    private static final String formUrl = "https://www.techlistic.com/p/selenium-practice-form.html";
    private static final String demoUserName = "admin";
    private static final String demoPassword = "admin";
    private static final String firstname = "Bob";
    private static final String lastname = "Dylan";
    private static final String datepicker = "16-05-2018";
    //WebDriver driver = new ChromeDriver();

    @BeforeSuite
    void prepare() {
        driver.manage().window().maximize();
    }

    @Test()
    void runTestSuites() {
             class MainTest {
            public void main(String[] args){
                List<String> file = new ArrayList<>();
                file.add("../Selenium-main/src/testng.xml");
                TestNG testNG = new TestNG();
                testNG.setTestSuites(file);
                testNG.run();}
        }
    }

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
    void keyboardActionsTest() {
        driver.get(url);
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
    @Parameters({"site"})
    void browserParameterXmlUrlTest(@Optional("https://www.google.com") String site) {
        driver.manage().window().maximize();
        driver.get(site);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        Assert.assertTrue(driver.getCurrentUrl().contains(site), "the URL is incorrect : Test Failed");
        Reporter.log("navigate to " + site + " work properly");
    }

    @Test()
    void loginTest() {
        driver.get(demoUrl);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        String expectedTitle = "Welcome: Mercury Tours";
        String actualTitle = "";
        if (actualTitle.contentEquals(expectedTitle)) {
            System.out.println("Test Passed!");
        } else {
            System.out.println("Test Failed");
        }
        WebElement userNameLogin = driver.findElement(By.name("userName"));
        userNameLogin.sendKeys(demoUserName);
        WebElement passwordLogin = driver.findElement(By.name("password"));
        passwordLogin.sendKeys(demoPassword);
        WebElement submitLogin = driver.findElement(By.name("submit"));
        submitLogin.click();
        List<WebElement> list = driver.findElements(By.xpath("//*[contains(text(),'" + "Login Successfully" + "')]"));
        Assert.assertTrue(list.size() > 0, "Text not found!");
    }

    @Test()
    @Parameters({"demoSite", "userName", "password"})
    void parameterXmlLoginTest(@Optional("https://demo.guru99.com/test/newtours") String demoSite, @Optional("admin") String userName, @Optional("admin") String password) {
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

    @Test
    void formTest() {
        driver.get(formUrl);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        //WebElement cookie = driver.findElement(By.id("ez-accept-all"));
        if (driver.findElement(By.id("ez-accept-all")).isDisplayed()) {
            driver.findElement(By.id("ez-accept-all")).click();
        } else {
            Reporter.log("the Cookies windows not display");
        }

        // Enter Firstname
        driver.findElement(By.name("firstname")).click();
        driver.findElement(By.name("firstname")).sendKeys(firstname);
        // Set Lastname
        driver.findElement(By.name("lastname")).click();
        driver.findElement(By.name("lastname")).sendKeys(lastname);
        // Select Gender
        driver.findElement(By.id("sex-0")).click();
        // Select Experience
        driver.findElement(By.id("exp-4")).click();
        // Enter Date
        driver.findElement(By.id("datepicker")).click();
        driver.findElement(By.id("datepicker")).sendKeys(datepicker);
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

        driver.findElement(By.id("submit")).click();

    }

    @Test
    @Parameters({"formSite", "formFirstname", "formLastname", "formDatepicker"})
    void parametersXmlFormTest(@Optional("https://www.techlistic.com/p/selenium-practice-form.html") String formSite, @Optional("bob") String formFirstname, @Optional("dylan") String formLastname, @Optional("16-05-2018") String formDatepicker) {
        driver.get(formSite);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        // WebElement cookie = driver.findElement(By.id("ez-accept-all"));
        if (driver.findElement(By.id("ez-accept-all")).isDisplayed()) {
            driver.findElement(By.id("ez-accept-all")).click();
        } else {
            Reporter.log("the Cookies windows not display");
        }

        // Enter Firstname
        driver.findElement(By.name("firstname")).click();
        driver.findElement(By.name("firstname")).sendKeys(formFirstname);
        // Set Lastname
        driver.findElement(By.name("lastname")).click();
        driver.findElement(By.name("lastname")).sendKeys(formLastname);
        // Select Gender
        driver.findElement(By.id("sex-0")).click();
        // Select Experience
        driver.findElement(By.id("exp-4")).click();
        // Enter Date
        driver.findElement(By.id("datepicker")).click();
        driver.findElement(By.id("datepicker")).sendKeys(formDatepicker);
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

        driver.findElement(By.id("submit")).click();

    }

    @Test
    void seleniumFormTest() {
        driver.get("https://www.techlistic.com/p/selenium-practice-form.html");
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        // WebElement cookie = driver.findElement(By.id("ez-accept-all"));
        if (driver.findElement(By.id("ez-accept-all")).isDisplayed()) {
            driver.findElement(By.id("ez-accept-all")).click();
        } else {
            Reporter.log("the Cookies windows not display");
        }

        // Enter Firstname
        driver.findElement(By.name("firstname")).click();
        driver.findElement(By.name("firstname")).sendKeys("Bob");
        // Set Lastname
        driver.findElement(By.name("lastname")).click();
        driver.findElement(By.name("lastname")).sendKeys("Dylan");
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

        driver.findElement(By.id("submit")).click();

    }

}
