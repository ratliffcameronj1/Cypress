/// <reference types="Cypress"/>

describe('CURA Make appointment', function(){

it('Visits The URL', function() {
    //Visits the landing page for the Booking site
    cy.visit('https://katalon-demo-cura.herokuapp.com');

});

it('Navigates to the Appointment Screen', function(){

    //Navigates to the Make Appointmnet screen
    cy.get('#btn-make-appointment').click();
});

it('Logs into Make Appointment',function(){


    //Enters Credentials Username & Password
    cy.get('#txt-username').type("John Doe");
    cy.get('#txt-password').type("ThisIsNotAPassword");
    // Logs into the site
    cy.get('#btn-login').click();
});
   
it('Makes Appointment', function(){

    // Dropdown selection to select helthcare center
    //(Tokyo CURA Healthcare Center, Hongkong CURA Healthcare Center, Seoul CURA Healthcare Center)
    cy.get('#combo_facility').select("Hongkong CURA Healthcare Center");
    // Radio Button to select insurance (1=Medicare, 2=Medicade, 3=None)
    cy.get(':nth-child(3) > .col-sm-4 > :nth-child(2)').click();
    // Date popup to enter visit date
    cy.get('#txt_visit_date').type("01/01/2024");
    // Enters Comments associated with the appointment
    cy.get('#txt_comment').click({force: true});
    cy.get('#txt_comment').type("01/01/2024 Appointment Test");
    // Finalizes the booking appointmnet 
    cy.get('#btn-book-appointment').click();
});

it('Verify Appointment', function (){

    cy.get('h2').contains('Appointment Confirmation')

});

});



