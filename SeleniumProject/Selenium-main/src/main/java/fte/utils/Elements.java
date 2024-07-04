package fte.utils;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class Elements {

    static RemoteWebDriver driver;
    static WebDriverWait waiter;
    //static WebDriver driver = new ChromeDriver();

    public static void prepareTest() {
        driver.manage().window().maximize();
        driver.get("https://google.com");
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));

    }

    public static void clickSearchTextFiled() {
        driver.findElement(By.xpath("//*[@id=\"L2AGLb\"]")).click();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
    }

    public static void setText() {
        driver.findElement(By.xpath("//*[@id=\"APjFqb\"]")).sendKeys("OpenText");
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
    }

    public static void enter() {
        driver.findElement(By.xpath("//*[@id=\"APjFqb\"]")).sendKeys(Keys.ENTER);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
    }

    public static void verifyText() {
        assert driver.getTitle().contains("OpenText");
    }
}
