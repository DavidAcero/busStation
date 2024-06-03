Feature("===Self Heal Feature===");

Scenario("Test Self Heal Feature - POC", ({ I }) => {
    I.amOnPage('/');
    I.fillField('.from', 'Los Angeles');
    I.fillField('.to', 'Tucson');
    I.click('.search');
    I.see('Fire Travels');
});