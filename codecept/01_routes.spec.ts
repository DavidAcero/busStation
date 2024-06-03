import po from './selectors.json';

Feature('Search Bus');

Before(({ I }) => {
    I.amOnPage('/');
    I.see('Search Buses');
    I.seeElement(po.landingPage.from);
});

Scenario('Verify valid route', ({ I }) => {
    // Fill the field and verify the value
    I.fillField(po.landingPage.from, 'Phoenix');
    I.seeInField(po.landingPage.from, 'Phoenix');

    // Another way to fill the fields
    I.click(po.landingPage.to);
    I.type('Tuc');
    I.click('[id="Tucson"]');
    I.seeInField(po.landingPage.to, 'Tucson');

    // Date 
    I.fillField(po.landingPage.date, '05-10-2024');
    I.click('Search Buses');

    I.see('Fire Travels');
    I.see('Earth Travels');
});

Scenario('Verify invalid route', ({ I }) => {

    I.fillField(po.landingPage.from, 'Phoenix');
    I.fillField(po.landingPage.to, 'Los Angeles');
    I.click('Search Buses');
    I.see("We don't have an available bus for the route you're lookin for");
});
