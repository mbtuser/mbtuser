package opentext.mbt.samples;

import opentext.mbt.utils.Elements;
import opentext.mbt.utils.Strings;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Reporter;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import java.util.concurrent.TimeUnit;

public class Samples {
    static RemoteWebDriver driver;
    static WebDriverWait waiter;

    @BeforeSuite
    void prepare() {
        Elements.driver.manage().window().maximize();
    }

    @Test
    @Parameters({"userName", "password"})
    void Login(@Optional("admin") String userName, @Optional("demo") String password) {
        Elements.driver.get(Strings.url);
        if (Elements.customerDashboard) {
            Reporter.log("need to navigate to Customer Dashboard page");
            Elements.open.click();
        } else if (Elements.alreadyLogin) {
            Reporter.log("the " + Strings.appName + "already in login, need to logout");
            Elements.profile.click();
            Elements.logout.click();
        }
        Elements.userNameElement.sendKeys(userName);
        Elements.passwordElement.sendKeys(password);
        Elements.signIn.click();
        Elements.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);

        if (Elements.profile.isDisplayed()) {
            Reporter.log("Login to " + Strings.appName + "properly");
        } else {
            Reporter.log("failed to login to " + Strings.appName);
        }
    }

    @Test
    @Parameters({"firstName", "lastName", "email", "userName", "password", "confirmPassword"})
    void RegisterNewUser(@Optional("Sample first Name") String firstName, @Optional("Sample last Name") String lastName, @Optional("samples@opentext.com") String email, @Optional("Samples") String userName, @Optional("Aa1234567890") String password, @Optional("Aa1234567890") String confirmPassword) {
        Elements.driver.get(Strings.url);
        if (Elements.customerDashboard) {
            Reporter.log("need to navigate to Customer Dashboard page");
            Elements.open.click();
        } else if (Elements.alreadyLogin) {
            Elements.profile.click();
            Elements.logout.click();
        }
        Elements.registration.click();
        Elements.firstNameElement.sendKeys(firstName);
        Elements.lastNameElement.sendKeys(lastName);
        Elements.emailElement.sendKeys(email);
        Elements.userNameElement.sendKeys(userName);
        Elements.passwordElement.sendKeys(password);
        Elements.confirmPasswordElement.sendKeys(confirmPassword);
        Elements.register.click();

        Elements.login.click();
        Elements.userNameElement.sendKeys(userName);
        Elements.passwordElement.sendKeys(password);
        Elements.signIn.click();
        Elements.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        if (Elements.profile.isDisplayed()) {
            Reporter.log("Login to " + Strings.appName + "properly");
        } else {
            Reporter.log("failed to login to " + Strings.appName);
        }
    }

    @Test
    @Parameters({"accountName"})
    void OpenNewAccount(@Optional("Samples Account") String accountName) {
        Elements.accountsTab.click();
        Elements.newAccounts.click();
        Elements.currency.click();
        Elements.currencySelect.click();
        Elements.accountsName.sendKeys(accountName);
        Elements.create.submit();
    }

    @Test
    void Logout() {
        if (Elements.customerDashboard) {
            Reporter.log("need to navigate to Customer Dashboard page");
            Elements.open.click();
        } else if (Elements.alreadyLogin) {
            Elements.profile.click();
            Elements.logout.click();
        } else {
            Reporter.log("the " + Strings.appName + "page is opened in login page");
        }
    }
}
