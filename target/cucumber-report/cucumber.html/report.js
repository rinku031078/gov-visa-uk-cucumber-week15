$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/visaconfrimationtest.feature");
formatter.feature({
  "line": 1,
  "name": "Verify that appropriate visa result is displayed for different visa application scenarios",
  "description": "",
  "id": "verify-that-appropriate-visa-result-is-displayed-for-different-visa-application-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 20356016600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify visa result for an Australian coming to the UK for Tourism",
  "description": "",
  "id": "verify-that-appropriate-visa-result-is-displayed-for-different-visa-application-scenarios;verify-visa-result-for-an-australian-coming-to-the-uk-for-tourism",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on reject cookies",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on start now",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User select nationality \u003c\"Australia\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on next step after selecting nationality",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User select reason for visit \u003c\"Tourism\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on next step after reason for travel",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should get visa result message \u003c\"You will not need a visa to come to the UK\"\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "ToursimSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 555081400,
  "status": "passed"
});
formatter.match({
  "location": "ToursimSteps.userClicksOnRejectCookies()"
});
formatter.result({
  "duration": 559719300,
  "status": "passed"
});
formatter.match({
  "location": "ToursimSteps.userClickOnStartNow()"
});
formatter.result({
  "duration": 233732000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 26
    }
  ],
  "location": "ToursimSteps.userSelectNationality(String)"
});
formatter.result({
  "duration": 156163000,
  "status": "passed"
});
formatter.match({
  "location": "ToursimSteps.userClickOnNextStepAfterSelectingNationality()"
});
formatter.result({
  "duration": 301695800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tourism",
      "offset": 31
    }
  ],
  "location": "ToursimSteps.userSelectReasonForVisit(String)"
});
formatter.result({
  "duration": 76760200,
  "status": "passed"
});
formatter.match({
  "location": "ToursimSteps.userClickOnNextStepAfterReasonForTravel()"
});
formatter.result({
  "duration": 398289000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You will not need a visa to come to the UK",
      "offset": 38
    }
  ],
  "location": "ToursimSteps.userShouldGetVisaResultMessage(String)"
});
formatter.result({
  "duration": 49652900,
  "status": "passed"
});
formatter.after({
  "duration": 862459800,
  "status": "passed"
});
formatter.before({
  "duration": 5088787400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify visa result for a Chilean coming to the UK for work and plans on staying for longer than six months",
  "description": "",
  "id": "verify-that-appropriate-visa-result-is-displayed-for-different-visa-application-scenarios;verify-visa-result-for-a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-six-months",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Smoke"
    },
    {
      "line": 14,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on reject cookies",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User click on start now",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User select nationality \u003c\"Chile\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on next step after selecting nationality",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User select reason for visit \u003c\"Work, academic visit or business\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on next step after reason for travel",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User select length of stay \u003c\"longer than 6 months\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click on next step after length of stay",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User select job type \u003c\"Health and care professional\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User click on next step after job type",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should get visa result \u003c\"You need a visa to work in health and care\"\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "ToursimSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 48900,
  "status": "passed"
});
formatter.match({
  "location": "ToursimSteps.userClicksOnRejectCookies()"
});
formatter.result({
  "duration": 112493100,
  "status": "passed"
});
formatter.match({
  "location": "ToursimSteps.userClickOnStartNow()"
});
formatter.result({
  "duration": 272183200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chile",
      "offset": 26
    }
  ],
  "location": "ToursimSteps.userSelectNationality(String)"
});
formatter.result({
  "duration": 96075800,
  "status": "passed"
});
formatter.match({
  "location": "ToursimSteps.userClickOnNextStepAfterSelectingNationality()"
});
formatter.result({
  "duration": 239750100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Work, academic visit or business",
      "offset": 31
    }
  ],
  "location": "ToursimSteps.userSelectReasonForVisit(String)"
});
formatter.result({
  "duration": 63180200,
  "status": "passed"
});
formatter.match({
  "location": "ToursimSteps.userClickOnNextStepAfterReasonForTravel()"
});
formatter.result({
  "duration": 248102900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "longer than 6 months",
      "offset": 29
    }
  ],
  "location": "JobVisaSteps.userSelectLengthOfStay(String)"
});
formatter.result({
  "duration": 81886700,
  "status": "passed"
});
formatter.match({
  "location": "JobVisaSteps.userClickOnNextStepAfterLengthOfStay()"
});
formatter.result({
  "duration": 408909700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Health and care professional",
      "offset": 23
    }
  ],
  "location": "JobVisaSteps.userSelectJobType(String)"
});
formatter.result({
  "duration": 58001400,
  "status": "passed"
});
formatter.match({
  "location": "JobVisaSteps.userClickOnNextStepAfterJobType()"
});
formatter.result({
  "duration": 310646000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You need a visa to work in health and care",
      "offset": 30
    }
  ],
  "location": "JobVisaSteps.userShouldGetVisaResult(String)"
});
formatter.result({
  "duration": 39710500,
  "status": "passed"
});
formatter.after({
  "duration": 755300900,
  "status": "passed"
});
formatter.before({
  "duration": 4646356400,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify visa result for a Columbian national coming to the UK to join a partner for a longer stay",
  "description": "",
  "id": "verify-that-appropriate-visa-result-is-displayed-for-different-visa-application-scenarios;verify-visa-result-for-a-columbian-national-coming-to-the-uk-to-join-a-partner-for-a-longer-stay",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@Sanity"
    },
    {
      "line": 29,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User clicks on reject cookies",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User click on start now",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User select nationality \u003c\"Colombia\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on next step after selecting nationality",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User select reason for visit \u003c\"Join partner or family for a long stay\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on next step after reason for travel",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User select immigration status \u003c\"yes\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on next step after immigration status",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User should get visa result for joining a partner \u003c\"You\u0027ll need a visa to join your family or partner in the UK\"\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "ToursimSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 33000,
  "status": "passed"
});
formatter.match({
  "location": "ToursimSteps.userClicksOnRejectCookies()"
});
formatter.result({
  "duration": 97876000,
  "status": "passed"
});
formatter.match({
  "location": "ToursimSteps.userClickOnStartNow()"
});
formatter.result({
  "duration": 253348900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Colombia",
      "offset": 26
    }
  ],
  "location": "ToursimSteps.userSelectNationality(String)"
});
formatter.result({
  "duration": 83115700,
  "status": "passed"
});
formatter.match({
  "location": "ToursimSteps.userClickOnNextStepAfterSelectingNationality()"
});
formatter.result({
  "duration": 227882400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Join partner or family for a long stay",
      "offset": 31
    }
  ],
  "location": "ToursimSteps.userSelectReasonForVisit(String)"
});
formatter.result({
  "duration": 216175100,
  "status": "passed"
});
formatter.match({
  "location": "ToursimSteps.userClickOnNextStepAfterReasonForTravel()"
});
formatter.result({
  "duration": 188008400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yes",
      "offset": 33
    }
  ],
  "location": "JoinPartnerSteps.userSelectImmigrationStatus(String)"
});
formatter.result({
  "duration": 95158800,
  "status": "passed"
});
formatter.match({
  "location": "JoinPartnerSteps.userClickOnNextStepAfterImmigrationStatus()"
});
formatter.result({
  "duration": 302310100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You\u0027ll need a visa to join your family or partner in the UK",
      "offset": 52
    }
  ],
  "location": "JoinPartnerSteps.userShouldGetVisaResultForJoiningAPartner(String)"
});
formatter.result({
  "duration": 49601400,
  "status": "passed"
});
formatter.after({
  "duration": 746802300,
  "status": "passed"
});
});