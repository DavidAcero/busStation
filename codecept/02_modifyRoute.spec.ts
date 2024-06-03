Feature('Modify Route');

Before(({ I }) => {
    I.amOnPage('/');
    I.fillField('[data-cy=fromInput]', 'Los Angeles');
    I.fillField('[data-cy=toInput]', 'Tucson');
    I.click('Search Buses');
    I.see('Fire Travels');
});

Scenario('Change route after searching', ({ I }) => {
    // Modify to valid route
    I.click('Modify');
    I.fillField('[data-cy=modifyFrom]', 'Phoenix');
    I.fillField('[data-cy=modifyTo]', 'Las Vegas');
    I.click('[data-cy=modifySearch]');
    I.see('Water Travels');
    I.dontSee('Fire Travels');

    // Modify to invalid route
    I.click('Modify');
    I.fillField('[data-cy=modifyTo]', 'Phoenix');
    I.click('[data-cy=modifySearch]');
    I.see("We don't have an available bus for the route you're lookin for");
    I.dontSee('Fire Travels');
});