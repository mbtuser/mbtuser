package org.fte;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class AdvantageDemo {

    static RemoteWebDriver driver;
    static WebDriverWait waiter;
    private static final String url = "https://advantageonlinebanking.com/";
    //WebDriver driver = new ChromeDriver();

    @BeforeSuite
    void prepare() {

        driver.manage().window().maximize();
    }

    @Test
    void AOBLogin() {
        driver.get(url);
        boolean alreadyLogin = driver.equals(By.xpath("//*[@id=\"root\"]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]"));
        if (alreadyLogin) {
            WebElement logout = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]"));
            logout.click();
        } else {
            WebElement userName = driver.findElement(By.xpath("//*[@id=\"form-username\"]"));
            userName.sendKeys("admin");
            WebElement password = driver.findElement(By.xpath("//*[@id=\"form-password\"]"));
            password.sendKeys("demo");
            WebElement signIn = driver.findElement(By.xpath("//*[@id=\"scrollable-auto-tabpanel-0\"]/form[1]/div[3]/button[1]"));
            signIn.click();
        }
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        WebElement userButton = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/header[1]/div[1]/div[1]/div[1]/button[1]"));
        if (userButton.isDisplayed()) {
            Reporter.log("Login to advantage online banking properly");
        } else {
            Reporter.log("failed to login to advantage online banking");
        }
    }

    @Test
    @Parameters({"firstName", "lastName", "email", "userName", "password"})
    void AOBRegistration(@Optional("bob") String firstName, @Optional("dylan") String lastName, @Optional("bob@theking.com") String email, @Optional("dylan") String userName, @Optional("Aa1234567890") String password) {
        driver.get(url);
        boolean alreadyLogin = driver.equals(By.xpath("//*[@id=\"root\"]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]"));
        if (alreadyLogin) {
            WebElement logout = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]"));
            logout.click();
        } else {
            WebElement registration = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/button[2]/span[1]"));
            registration.click();
            WebElement firstNameElement = driver.findElement(By.xpath("//*[@id=\"form-firstName\"]"));
            firstNameElement.sendKeys(firstName);
            WebElement lastNameElement = driver.findElement(By.xpath("//*[@id=\"form-lastName\"]"));
            lastNameElement.sendKeys(lastName);
            WebElement emailElement = driver.findElement(By.xpath("//*[@id=\"form-email\"]"));
            emailElement.sendKeys(email);
            WebElement userNameElement = driver.findElement(By.xpath("//*[@id=\"form-username\"]"));
            userNameElement.sendKeys(userName);
            WebElement passwordElement = driver.findElement(By.xpath("//*[@id=\"form-password\"]"));
            passwordElement.sendKeys(password);
            WebElement confirmPasswordElement = driver.findElement(By.xpath("//*[@id=\"form-confirmPass\"]"));
            confirmPasswordElement.sendKeys(password);
            WebElement register = driver.findElement(By.xpath("//*[@id=\"scrollable-auto-tabpanel-1\"]/form[1]/button[1]"));
            register.click();
        }
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        boolean userButton = driver.equals(By.xpath("//*[@id=\"root\"]/div[1]/header[1]/div[1]/div[1]/div[1]/button[1]"));
        if (userButton) {
            Reporter.log("Login to advantage online banking properly");
        } else {
            Reporter.log("failed to login to advantage online banking");
        }
    }

    @Test
    void AOBAccounts() {
        AOBLogin();
        WebElement accountsTab = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/a[1]"));
        accountsTab.click();
        WebElement newAccounts = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/main[1]/div[1]/div[2]/div[2]/button[1]/span[1]"));
        newAccounts.click();
        WebElement currency = driver.findElement(By.xpath("//*[@id=\"currency_code\"]"));
        currency.click();
        WebElement currencySelect = driver.findElement(By.xpath("//*[@id=\"menu-currency_code\"]/div[3]/ul[1]/li[10]"));
        currencySelect.click();
        WebElement accountsName = driver.findElement(By.xpath("//*[@id=\"name\"]"));
        accountsName.sendKeys("bob dylan");

        WebElement create = driver.findElement(By.cssSelector("html > body > div:nth-of-type(5) > div:nth-of-type(3) > div > div:nth-of-type(2) > form > div:nth-of-type(5) > div > button"));
        create.submit();

        //driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        //List<WebElement> list = driver.findElements(By.xpath("//*[contains(text(),'" + "bob dylan" + "')]"));
        //Assert.assertTrue(list.size() > 0, "Text not found!");
    }

}
