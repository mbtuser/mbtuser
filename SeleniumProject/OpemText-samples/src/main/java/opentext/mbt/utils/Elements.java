package opentext.mbt.utils;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Elements {

    public static RemoteWebDriver driver;
    public static WebDriverWait waiter;

    public static boolean customerDashboard = driver.equals(By.xpath("//*[@id=\"root\"]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]"));
    public static boolean alreadyLogin = driver.equals(By.xpath("//*[@id=\"root\"]/div[1]/header[1]/div[1]/div[1]/div[1]/button[1]"));
    public static WebElement open = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]/span[1]"));
    public static WebElement profile = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/header[1]/div[1]/div[1]/div[1]/button[1]"));
    public static WebElement logout = driver.findElement(By.xpath("//*[@id=\"testProfileMenu\"]/div[3]/ul[1]/li[3]"));
    public static WebElement userNameElement = driver.findElement(By.xpath("//*[@id=\"form-username\"]"));
    public static WebElement passwordElement = driver.findElement(By.xpath("//*[@id=\"form-password\"]"));
    public static WebElement signIn = driver.findElement(By.xpath("//*[@id=\"scrollable-auto-tabpanel-0\"]/form[1]/div[3]/button[1]"));
    public static WebElement login = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/span[1]"));
    public static WebElement registration = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/button[2]/span[1]"));
    public static WebElement firstNameElement = driver.findElement(By.xpath("//*[@id=\"form-firstName\"]"));
    public static WebElement lastNameElement = driver.findElement(By.xpath("//*[@id=\"form-lastName\"]"));
    public static WebElement emailElement = driver.findElement(By.xpath("//*[@id=\"form-email\"]"));
    public static WebElement confirmPasswordElement = driver.findElement(By.xpath("//*[@id=\"form-confirmPass\"]"));
    public static WebElement register = driver.findElement(By.xpath("//*[@id=\"scrollable-auto-tabpanel-1\"]/form[1]/button[1]"));
    public static WebElement accountsTab = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/a[1]"));
    public static WebElement newAccounts = driver.findElement(By.xpath("//*[@id=\"root\"]/div[1]/main[1]/div[1]/div[2]/div[2]/button[1]/span[1]"));
    public static WebElement currency = driver.findElement(By.xpath("//*[@id=\"currency_code\"]"));
    public static WebElement currencySelect = driver.findElement(By.xpath("//*[@id=\"menu-currency_code\"]/div[3]/ul[1]/li[10]"));
    public static WebElement accountsName = driver.findElement(By.xpath("//*[@id=\"name\"]"));
    public static WebElement create = driver.findElement(By.cssSelector("html > body > div:nth-of-type(5) > div:nth-of-type(3) > div > div:nth-of-type(2) > form > div:nth-of-type(5) > div > button"));

}
