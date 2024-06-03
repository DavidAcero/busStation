import po from './selectors.json';

Feature('Modify Route');

Before(({ I }) => {
    I.amOnPage('/');
    I.fillField(po.landingPage.from, 'Los Angeles');
    I.fillField(po.landingPage.to, 'Tucson');
    I.click('Search Buses');
    I.see('Fire Travels');
});

Scenario('Change route after searching', ({ I }) => {
    // Modify to valid route
    I.click('Modify');
    I.fillField(po.selectRide.modifyFrom, 'Phoenix');
    I.fillField(po.selectRide.modifyTo, 'Las Vegas');
    I.click('[data-cy=modifySearch]');
    I.see('Water Travels');
    I.dontSee('Fire Travels');

    // Modify to invalid route
    I.click('Modify');
    I.fillField(po.selectRide.modifyTo, 'Phoenix');
    I.click('[data-cy=modifySearch]');
    I.see("We don't have an available bus for the route you're lookin for");
    I.dontSee('Fire Travels');
});