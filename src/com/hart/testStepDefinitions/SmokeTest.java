package com.hart.testStepDefinitions;

import com.gargoylesoftware.htmlunit.javascript.host.Console;
import com.hart.pageobjects.LoginPage;
import com.hart.testStepDefinitions.TestBaseSetup;
import static org.junit.Assert.*;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeTest extends TestBaseSetup {
	

	@Given("^Open firefox and start application$")
	public void open_firefox_and_start_application() throws Throwable {
		String browserType = "firefox";
		String appURL = "https://app-yellow.hart.com";
		initializeTestBaseSetup(browserType, appURL);
	}

	@When("^I enter valid \"([^\"]*)\" and valid \"([^\"]*)\"$")
	public void i_enter_valid_and_valid(String userName, String userPassword) throws Throwable {
		LoginPage loginPage = new LoginPage();
		loginPage.verifyLogin(userName, userPassword);
	}

	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
		LoginPage loginPage = new LoginPage();
		loginPage.verifyLoginPageTitle();
		assertTrue(loginPage.verifyLoginPageTitle());
	}
	
	@Then("^I should see page title as \"([^\"]*)\"$")
	public void i_should_see_page_title_as(String title) throws Throwable {
		LoginPage loginPage = new LoginPage();
		String tl = loginPage.loginPageTitle();
		assertEquals("Title is incorrect", title, tl);
	}

	@Then("^application should be closed$")
	public void application_should_be_closed() throws Throwable {
		tearDown();
	}
}
