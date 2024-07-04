package opentext.mbt.samples;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Reporter;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import java.util.concurrent.TimeUnit;

public class Samples {
    //static RemoteWebDriver driver;
    static WebDriverWait waiter;
    static WebDriver driver = new ChromeDriver();
    private static final String url = "https://advantageonlinebanking.com/";

    @BeforeSuite
    void prepare() {
        driver.manage().window().maximize();
    }

    @Test
    @Parameters({"userName", "password"})
    void Login(@Optional("admin") String userName, @Optional("demo") String password) {
        driver.get(url);
        boolean customerDashboard = driver.equals(By.xpath("//*[@id=\"root\"]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]"));
        boolean alreadyLogin = driver.equals(By.xpath("//*[@id=\"root\"]/div[1]/header[1]/div[1]/div[1]/div[1]/button[1]"));
        if (customerDashboard) {
            Reporter.log("need to navigate to Customer Dashboard page");
            WebElement open = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]"));
            open.click();
        } else if (alreadyLogin) {
            Reporter.log("the advantage online banking already in login, need to logout");
            WebElement profile = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/header[1]/div[1]/div[1]/div[1]/button[1]"));
            profile.click();
            WebElement logout = driver.findElement(By.xpath("//*[@id=\"testProfileMenu\"]/div[3]/ul[1]/li[3]"));
            logout.click();
        }
        WebElement userNameElement = driver.findElement(By.xpath("//*[@id=\"form-username\"]"));
        userNameElement.sendKeys(userName);
        WebElement passwordElement = driver.findElement(By.xpath("//*[@id=\"form-password\"]"));
        passwordElement.sendKeys(password);
        WebElement signIn = driver.findElement(By.xpath("//*[@id=\"scrollable-auto-tabpanel-0\"]/form[1]/div[3]/button[1]"));
        signIn.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        WebElement userButton = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/header[1]/div[1]/div[1]/div[1]/button[1]"));
        if (userButton.isDisplayed()) {
            Reporter.log("Login to advantage online banking properly");
        } else {
            Reporter.log("failed to login to advantage online banking");
        }
    }

    @Test
    @Parameters({"firstName", "lastName", "email", "userName", "password", "confirmPassword"})
    void RegisterNewUser(@Optional("Sample first Name") String firstName, @Optional("Sample last Name") String lastName, @Optional("samples@opentext.com") String email, @Optional("Samples") String userName, @Optional("Aa1234567890") String password, @Optional("Aa1234567890") String confirmPassword) {
        driver.get(url);
        boolean customerDashboard = driver.equals(By.xpath("//*[@id=\"root\"]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]"));
        boolean alreadyLogin = driver.equals(By.xpath("//*[@id=\"root\"]/div[1]/header[1]/div[1]/div[1]/div[1]/button[1]"));
        if (customerDashboard) {
            Reporter.log("need to navigate to Customer Dashboard page");
            WebElement open = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]"));
            open.click();
        } else if (alreadyLogin) {
            WebElement profile = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/header[1]/div[1]/div[1]/div[1]/button[1]"));
            profile.click();
            WebElement logout = driver.findElement(By.xpath("//*[@id=\"testProfileMenu\"]/div[3]/ul[1]/li[3]"));
            logout.click();
        }
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
        confirmPasswordElement.sendKeys(confirmPassword);
        WebElement register = driver.findElement(By.xpath("//*[@id=\"scrollable-auto-tabpanel-1\"]/form[1]/button[1]"));
        register.click();

        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        boolean userButton = driver.equals(By.xpath("//*[@id=\"root\"]/div[1]/header[1]/div[1]/div[1]/div[1]/button[1]"));
        if (userButton) {
            Reporter.log("Login to advantage online banking properly");
        } else {
            Reporter.log("failed to login to advantage online banking");
        }
    }

    @Test
    @Parameters({"accountName"})
    void OpenNewAccount(@Optional("Samples Account") String accountName) {
        WebElement accountsTab = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/a[1]"));
        accountsTab.click();
        WebElement newAccounts = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/main[1]/div[1]/div[2]/div[2]/button[1]/span[1]"));
        newAccounts.click();
        WebElement currency = driver.findElement(By.xpath("//*[@id=\"currency_code\"]"));
        currency.click();
        WebElement currencySelect = driver.findElement(By.xpath("//*[@id=\"menu-currency_code\"]/div[3]/ul[1]/li[10]"));
        currencySelect.click();
        WebElement accountsName = driver.findElement(By.xpath("//*[@id=\"name\"]"));
        accountsName.sendKeys(accountName);

        WebElement create = driver.findElement(By.cssSelector("html > body > div:nth-of-type(5) > div:nth-of-type(3) > div > div:nth-of-type(2) > form > div:nth-of-type(5) > div > button"));
        create.submit();
    }

    @Test
    void Logout() {
        boolean customerDashboard = driver.equals(By.xpath("//*[@id=\"root\"]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]"));
        boolean alreadyLogin = driver.equals(By.xpath("//*[@id=\"root\"]/div[1]/header[1]/div[1]/div[1]/div[1]/button[1]"));
        if (customerDashboard) {
            Reporter.log("need to navigate to Customer Dashboard page");
            WebElement open = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]"));
            open.click();
        } else if (alreadyLogin) {
            WebElement profile = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/header[1]/div[1]/div[1]/div[1]/button[1]"));
            profile.click();
            WebElement logout = driver.findElement(By.xpath("//*[@id=\"testProfileMenu\"]/div[3]/ul[1]/li[3]"));
            logout.click();
        } else {
            Reporter.log("the advantage online banking page is opened in login page");
        }
    }
}
