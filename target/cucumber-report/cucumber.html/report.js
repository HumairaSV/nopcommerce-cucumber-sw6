$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ComputerPage.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Page Test",
  "description": "As a user I want to use the different features on the Computer Page",
  "id": "computer-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5788363800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to Computer Page successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Computers menu tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am navigated to the Computers page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 74613800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnComputersMenuTab()"
});
formatter.result({
  "duration": 2278707800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iAmNavigatedToTheComputersPageSuccessfully()"
});
formatter.result({
  "duration": 27567501,
  "status": "passed"
});
formatter.after({
  "duration": 636867999,
  "status": "passed"
});
formatter.before({
  "duration": 2718686500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify user should navigate to Desktops Page successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Computers menu tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Desktops sub menu",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I am navigated to the Desktops page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 19901,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnComputersMenuTab()"
});
formatter.result({
  "duration": 638752000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktopsSubMenu()"
});
formatter.result({
  "duration": 1731900700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iAmNavigatedToTheDesktopsPageSuccessfully()"
});
formatter.result({
  "duration": 27532499,
  "status": "passed"
});
formatter.after({
  "duration": 622557699,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Verify user should be able to Build Your Own Computer and add product to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-be-able-to-build-your-own-computer-and-add-product-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computers menu tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops sub menu",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Product Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select Processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select Ram \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "The product is added to cart successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "computer-page-test;verify-user-should-be-able-to-build-your-own-computer-and-add-product-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 32,
      "id": "computer-page-test;verify-user-should-be-able-to-build-your-own-computer-and-add-product-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 33,
      "id": "computer-page-test;verify-user-should-be-able-to-build-your-own-computer-and-add-product-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 34,
      "id": "computer-page-test;verify-user-should-be-able-to-build-your-own-computer-and-add-product-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 35,
      "id": "computer-page-test;verify-user-should-be-able-to-build-your-own-computer-and-add-product-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2091490700,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify user should be able to Build Your Own Computer and add product to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-be-able-to-build-your-own-computer-and-add-product-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computers menu tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops sub menu",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Product Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select Processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select Ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "The product is added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 19600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnComputersMenuTab()"
});
formatter.result({
  "duration": 3834988999,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktopsSubMenu()"
});
formatter.result({
  "duration": 2205488500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iSelectProductBuildYourOwnComputer()"
});
formatter.result({
  "duration": 3365972400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerPageSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 114731700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 79670700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 53582900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 59017200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 60035500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 47530699,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.theProductIsAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 398920000,
  "status": "passed"
});
formatter.after({
  "duration": 614688899,
  "status": "passed"
});
formatter.before({
  "duration": 2907269099,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify user should be able to Build Your Own Computer and add product to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-be-able-to-build-your-own-computer-and-add-product-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computers menu tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops sub menu",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Product Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select Processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select Ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "The product is added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnComputersMenuTab()"
});
formatter.result({
  "duration": 667053799,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktopsSubMenu()"
});
formatter.result({
  "duration": 483844500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iSelectProductBuildYourOwnComputer()"
});
formatter.result({
  "duration": 2975516400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerPageSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 51312600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 67657699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 65460699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 57963300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 61357399,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 45314600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.theProductIsAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 1151879200,
  "status": "passed"
});
formatter.after({
  "duration": 609961001,
  "status": "passed"
});
formatter.before({
  "duration": 1942975400,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify user should be able to Build Your Own Computer and add product to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-be-able-to-build-your-own-computer-and-add-product-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computers menu tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops sub menu",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Product Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select Processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select Ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "The product is added to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 14100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnComputersMenuTab()"
});
formatter.result({
  "duration": 717867499,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktopsSubMenu()"
});
formatter.result({
  "duration": 498311700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iSelectProductBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1371684400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerPageSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 48269799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 60121300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 55437500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 49280301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 71084100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 44406400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.theProductIsAddedToCartSuccessfully()"
});
formatter.result({
  "duration": 1145063100,
  "status": "passed"
});
formatter.after({
  "duration": 607203300,
  "status": "passed"
});
formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page Test",
  "description": "As a user i want to Log in to the nop commerce website",
  "id": "login-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2186609300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should be able to navigate to Login page successfully",
  "description": "",
  "id": "login-page-test;verify-user-should-be-able-to-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the login link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to the Login page and see message \"Welcome, Please Sign In!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnTheLoginLink()"
});
formatter.result({
  "duration": 871141801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 46
    }
  ],
  "location": "LoginPageSteps.iNavigateToTheLoginPageAndSeeMessage(String)"
});
formatter.result({
  "duration": 26008401,
  "status": "passed"
});
formatter.after({
  "duration": 612421400,
  "status": "passed"
});
formatter.before({
  "duration": 2884109899,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify user should get error message on logging in with invalid credentials",
  "description": "",
  "id": "login-page-test;verify-user-should-get-error-message-on-logging-in-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on the login link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid email address \"testerhv123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid password \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I get error message \"Login was unsuccessful. Please correct the errors and try again.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 16200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnTheLoginLink()"
});
formatter.result({
  "duration": 531729199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testerhv123@gmail.com",
      "offset": 31
    }
  ],
  "location": "LoginPageSteps.iEnterInvalidEmailAddress(String)"
});
formatter.result({
  "duration": 58615199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 26
    }
  ],
  "location": "LoginPageSteps.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 53490499,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 409415500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.iGetErrorMessage(String)"
});
formatter.result({
  "duration": 32227300,
  "status": "passed"
});
formatter.after({
  "duration": 640719500,
  "status": "passed"
});
formatter.before({
  "duration": 2331116700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify user should login successfully with valid credentials",
  "description": "",
  "id": "login-page-test;verify-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I select Gender \"Female\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter Firsname \"Testinghv2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Lastname \"Automater1\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter date of birth day \"22\" month \"February\" year \"1980\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter email \"Testinghv2@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter confirm password \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the login link",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter valid email address \"Testinghv2@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter valid password \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I am logged in and I can see the logout link in the menu",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 14399,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1027616399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 17
    }
  ],
  "location": "RegisterPageSteps.iSelectGender(String)"
});
formatter.result({
  "duration": 64191200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testinghv2",
      "offset": 18
    }
  ],
  "location": "RegisterPageSteps.iEnterFirsname(String)"
});
formatter.result({
  "duration": 55868499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automater1",
      "offset": 18
    }
  ],
  "location": "RegisterPageSteps.iEnterLastname(String)"
});
formatter.result({
  "duration": 56850900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 27
    },
    {
      "val": "February",
      "offset": 38
    },
    {
      "val": "1980",
      "offset": 54
    }
  ],
  "location": "RegisterPageSteps.iEnterDateOfBirthDayMonthYear(String,String,String)"
});
formatter.result({
  "duration": 180616300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testinghv2@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterPageSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 56411200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 18
    }
  ],
  "location": "RegisterPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 53775900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 26
    }
  ],
  "location": "RegisterPageSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 55633000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 915384101,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnTheLoginLink()"
});
formatter.result({
  "duration": 429206900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testinghv2@gmail.com",
      "offset": 29
    }
  ],
  "location": "LoginPageSteps.iEnterValidEmailAddress(String)"
});
formatter.result({
  "duration": 56000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 24
    }
  ],
  "location": "LoginPageSteps.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 41900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 49677400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iAmLoggedInAndICanSeeTheLogoutLinkInTheMenu()"
});
formatter.result({
  "duration": 28100,
  "status": "passed"
});
formatter.after({
  "duration": 618860300,
  "status": "passed"
});
formatter.before({
  "duration": 3166230500,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verify user should logout successfully",
  "description": "",
  "id": "login-page-test;verify-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I click on the login link",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter valid email address \"Testinghv2@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter valid password \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on the log out link",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I am logged out of the account succesfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 19000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnTheLoginLink()"
});
formatter.result({
  "duration": 547214001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testinghv2@gmail.com",
      "offset": 29
    }
  ],
  "location": "LoginPageSteps.iEnterValidEmailAddress(String)"
});
formatter.result({
  "duration": 53100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 24
    }
  ],
  "location": "LoginPageSteps.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 51600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 45074900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnTheLogOutLink()"
});
formatter.result({
  "duration": 20701,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iAmLoggedOutOfTheAccountSuccesfully()"
});
formatter.result({
  "duration": 14500,
  "status": "passed"
});
formatter.after({
  "duration": 611731500,
  "status": "passed"
});
formatter.uri("RegisterPage.feature");
formatter.feature({
  "line": 1,
  "name": "Register Page Test",
  "description": "\r\nAs a user I am able to register on the nop commerce website",
  "id": "register-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1936365400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify user should navigate to Register page successfully",
  "description": "",
  "id": "register-page-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I am navigated to the Register page",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 19600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1297244001,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iAmNavigatedToTheRegisterPage()"
});
formatter.result({
  "duration": 22987100,
  "status": "passed"
});
formatter.after({
  "duration": 608032400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify that Firstname Lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sanity"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message \"\u003cerror message\u003e\" for field \"\u003cfield name\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;",
  "rows": [
    {
      "cells": [
        "error message",
        "field name"
      ],
      "line": 19,
      "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;1"
    },
    {
      "cells": [
        "First name is required.",
        "FirstName"
      ],
      "line": 20,
      "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;2"
    },
    {
      "cells": [
        "Last name is required.",
        "LastName"
      ],
      "line": 21,
      "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;3"
    },
    {
      "cells": [
        "Email is required.",
        "Email"
      ],
      "line": 22,
      "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;4"
    },
    {
      "cells": [
        "Password is required.",
        "Password"
      ],
      "line": 23,
      "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;5"
    },
    {
      "cells": [
        "Password is required.",
        "ConfirmPassword"
      ],
      "line": 24,
      "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1963692301,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify that Firstname Lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sanity"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message \"First name is required.\" for field \"FirstName\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 13100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 551197401,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 50485600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 28
    },
    {
      "val": "FirstName",
      "offset": 64
    }
  ],
  "location": "RegisterPageSteps.iShouldSeeErrorMessageForField(String,String)"
});
formatter.result({
  "duration": 38801800,
  "status": "passed"
});
formatter.after({
  "duration": 607300701,
  "status": "passed"
});
formatter.before({
  "duration": 1960370001,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify that Firstname Lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sanity"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message \"Last name is required.\" for field \"LastName\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 19600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 555765300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 54175400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 28
    },
    {
      "val": "LastName",
      "offset": 63
    }
  ],
  "location": "RegisterPageSteps.iShouldSeeErrorMessageForField(String,String)"
});
formatter.result({
  "duration": 52672700,
  "status": "passed"
});
formatter.after({
  "duration": 606850100,
  "status": "passed"
});
formatter.before({
  "duration": 1941254700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify that Firstname Lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sanity"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message \"Email is required.\" for field \"Email\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 542096499,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 49577700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 28
    },
    {
      "val": "Email",
      "offset": 59
    }
  ],
  "location": "RegisterPageSteps.iShouldSeeErrorMessageForField(String,String)"
});
formatter.result({
  "duration": 54777501,
  "status": "passed"
});
formatter.after({
  "duration": 625232800,
  "status": "passed"
});
formatter.before({
  "duration": 1939886300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify that Firstname Lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sanity"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message \"Password is required.\" for field \"Password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 12999,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 557939901,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 50010901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 28
    },
    {
      "val": "Password",
      "offset": 62
    }
  ],
  "location": "RegisterPageSteps.iShouldSeeErrorMessageForField(String,String)"
});
formatter.result({
  "duration": 64416200,
  "status": "passed"
});
formatter.after({
  "duration": 613866200,
  "status": "passed"
});
formatter.before({
  "duration": 3513238199,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify that Firstname Lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sanity"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message \"Password is required.\" for field \"ConfirmPassword\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 14700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 565516599,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 59113900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 28
    },
    {
      "val": "ConfirmPassword",
      "offset": 62
    }
  ],
  "location": "RegisterPageSteps.iShouldSeeErrorMessageForField(String,String)"
});
formatter.result({
  "duration": 83286000,
  "status": "passed"
});
formatter.after({
  "duration": 619802801,
  "status": "passed"
});
formatter.before({
  "duration": 4300044400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify user should create account successfully",
  "description": "",
  "id": "register-page-test;verify-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I select Gender \"Female\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Firsname \"Testinghv0\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Lastname \"Automater\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter date of birth day \"22\" month \"February\" year \"1980\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter email \"Testinghv0@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter password \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter confirm password \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I am registered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 235999,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 526463400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 17
    }
  ],
  "location": "RegisterPageSteps.iSelectGender(String)"
});
formatter.result({
  "duration": 62079300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testinghv0",
      "offset": 18
    }
  ],
  "location": "RegisterPageSteps.iEnterFirsname(String)"
});
formatter.result({
  "duration": 57534000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automater",
      "offset": 18
    }
  ],
  "location": "RegisterPageSteps.iEnterLastname(String)"
});
formatter.result({
  "duration": 52639100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 27
    },
    {
      "val": "February",
      "offset": 38
    },
    {
      "val": "1980",
      "offset": 54
    }
  ],
  "location": "RegisterPageSteps.iEnterDateOfBirthDayMonthYear(String,String,String)"
});
formatter.result({
  "duration": 187930899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testinghv0@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterPageSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 58193600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 18
    }
  ],
  "location": "RegisterPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 51625799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 26
    }
  ],
  "location": "RegisterPageSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 56861800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 769629399,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iAmRegisteredSuccessfully()"
});
formatter.result({
  "duration": 24509600,
  "status": "passed"
});
formatter.after({
  "duration": 621314600,
  "status": "passed"
});
});