Feature('Search Bus');

Before(({ I }) => {
    I.amOnPage('/');
    I.see('Search Buses');
    I.seeElement('[data-cy=fromInput]');
});

Scenario('Verify valid route', ({ I }) => {
    // Fill the field and verify the value
    I.fillField('[data-cy=fromInput]', 'Phoenix');
    I.seeInField('[data-cy=fromInput]', 'Phoenix');

    // Another way to fill the fields
    I.click('[data-cy=toInput]');
    I.type('Tuc');
    I.click('[id="Tucson"]');
    I.seeInField('[data-cy=toInput]', 'Tucson');

    // Date 
    I.fillField('[data-cy=dateInput]', '05-10-2024');
    I.click('Search Buses');

    I.see('Fire Travels');
    I.see('Earth Travels');
});

Scenario('Verify invalid route', ({ I }) => {

    I.fillField('[data-cy=fromInput]', 'Phoenix');
    I.fillField('[data-cy=toInput]', 'Los Angeles');
    I.click('Search Buses');
    I.see("We don't have an available bus for the route you're lookin for");
});
