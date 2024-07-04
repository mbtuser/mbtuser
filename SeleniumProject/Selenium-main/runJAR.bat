set projectLocation=C:\dev\testProject

cd %projectLocation%

REM set classpath=%projectLocation%/*;C:\dev\ngTest\target\test-classes

java -cp .\target\testProject-1.0-SNAPSHOT.jar org.testng.TestNG .\src\main\resources\testng_classes.xml 
