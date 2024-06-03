Feature('E2E Flow for Booking a Bus Ticket');

Before(({ I }) => {
    // Visit landing page
    I.amOnPage('/');
});

Scenario('Full flow', ({ I }) => {
    // Select route and search
    I.fillField('[data-cy=fromInput]', 'Tucson');
    I.fillField('[data-cy=toInput]', 'Las Vegas');
    I.click('Search Buses');
    I.see('Wind Travels');

    // Select only bus and seats
    I.click('[data-cy="viewHideSeats"]');
    I.click("141");
    // Verify single seats are enable but not shared seats
    I.dontSeeElement('button[name=A]:disabled');
    I.dontSeeElement('button[name=B]:disabled');
    // Shared seats are disabled
    I.seeElement('button[name="1A"]:disabled');
    I.seeElement('button[name="1B"]:disabled');
    I.seeElement('button[name="2A"]:disabled');
    I.seeElement('button[name="2B"]:disabled');

    // Select seat, boarding and dropping points
    I.click('button[name=G]');
    I.click('li[name="1"]  button');
    I.click('DROPING POINT');
    I.click('li[name="6"] button');
    I.click('Continue');

    // Verify Boarding and Droping points
    within('.bill-data', () => {
        I.see('Oak Avenue, near Art Museum');
        I.see('Fake Blvd, Johnson Av.');
    });
    // Verify Seats
    within('.bill-data-seats', () => {
        I.see('Seat No.');
        I.see('G', '.bill-data-seat');
    });
    // Verify Price
    within('.booking-bus-option', () => {
        I.see('141');
    });

    // Fill passenger details
    I.click('.booking-confirm-button');
    I.fillField('input[name=name]', 'Romeo');
    I.click('input[name=gender]');
    I.fillField('input[name=age]', '25');

    // Proceed to pay
    I.click('.passenger-book-ticket-button');
    I.see('Payment Successful');
    I.see('Generating your PDF ticket');

    // Verify PDF ticket
    I.waitForElement('.bookedTickets', 30);
    I.seeInCurrentUrl('/bookedtickets')
});
