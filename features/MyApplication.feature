Feature: Test Hart Login scenario

	Scenario: Test login with valid credentials
	Given Open firefox and start application
	When I enter valid "code.challenge@hart.com" and valid "Challenge1!"
	Then user should be able to login successfully
	Then I should see page title as "Hart - Login"
	Then application should be closed