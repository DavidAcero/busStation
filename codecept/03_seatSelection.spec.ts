Feature('Seat Selection');

Before(({ I }) => {
    // Search Bus
    I.amOnPage('/');
    I.fillField('[data-cy=fromInput]', 'San Francisco');
    I.fillField('[data-cy=toInput]', 'Los Angeles');
    I.click('Search Buses');
    I.see('Water Travels');
    I.click('[data-cy="viewHideSeats"]');
});

Scenario('Filter seats per price', ({ I }) => {
    I.click("70");
    // Disable single seats
    I.seeElement('button[name=A]:disabled');
    I.seeElement('button[name=B]:disabled');
    // Shared seats are still enable
    I.dontSeeElement('button[name="1A"]:disabled');
    I.dontSeeElement('button[name="1B"]:disabled');
    I.dontSeeElement('button[name="2A"]:disabled');
    I.dontSeeElement('button[name="2B"]:disabled');

    I.click('120');
    // Enable single seats
    I.dontSeeElement('button[name=A]:disabled');
    I.dontSeeElement('button[name=B]:disabled');
    // Shared seats are disabled
    I.seeElement('button[name="1A"]:disabled');
    I.seeElement('button[name="1B"]:disabled');
    I.seeElement('button[name="2A"]:disabled');
    I.seeElement('button[name="2B"]:disabled');
});

Scenario('Select 1 seat', ({ I }) => {
    // Select seat
    I.click('button[name=C]');
    I.click('li[name="2"]  button');
    I.seeElement('.booking-option-each-checkbox-logo-select');
    I.click('Continue');
    // Asser missing field
    I.see('Select Dropping Point');

    // Add dropping point
    I.click('DROPING POINT');
    I.click('li[name="6"] button');
    I.click('Continue');
    I.see('(Taxes will be calculated during payment)');
});

