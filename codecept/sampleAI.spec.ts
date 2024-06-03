Feature('== AI Feature===');

Scenario('Test AI Feature - POC', ({ I }) => {
    I.amOnPage('/');
    I.fillField('input[name="from"]', 'Tucson');
    I.fillField('input[name="to"]', 'Phoenix');
    I.click('.form-submit-button');

    // Second Button
    I.click('(//button[@class="result-each-seats-button"])[2]');
    pause(); // Pause is needed for the AI to take over

    I.click('.deck-seats-each[name="4A"]');
});