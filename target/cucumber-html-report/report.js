$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Test Hart Login scenario",
  "description": "",
  "id": "test-hart-login-scenario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-hart-login-scenario;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"code.challenge@hart.com\" and valid \"Challenge1!\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I should see page title as \"Hart - Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_firefox_and_start_application()"
});
formatter.result({
  "duration": 4912930414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "code.challenge@hart.com",
      "offset": 15
    },
    {
      "val": "Challenge1!",
      "offset": 51
    }
  ],
  "location": "SmokeTest.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "duration": 586433381,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 45807489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hart - Login",
      "offset": 28
    }
  ],
  "location": "SmokeTest.i_should_see_page_title_as(String)"
});
formatter.result({
  "duration": 19998516,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 138327761,
  "status": "passed"
});
});