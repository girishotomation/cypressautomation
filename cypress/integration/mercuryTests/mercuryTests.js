/// <reference types="cypress" />

import LoginPage from "../../page-objects/LoginPage"
import PaymentPage from "../../page-objects/PaymentPage"
import UserHomePage from "../../page-objects/UserHomePage"

describe('Mercury Test', () => {
    let masterData
    beforeEach('Verify User Login', function () {
        cy.viewport(1280, 720)
        cy.fixture('testData').then(data => {
            masterData = data
            cy.visit(masterData.url)
            LoginPage.username().click()
            LoginPage.username().clear()
            cy.wait(500)
            LoginPage.username().type(masterData.username)
            cy.wait(500)
            LoginPage.password().type(masterData.password)
        })
        cy.wait(500)
        LoginPage.loginButton().click()
        UserHomePage.welcomeMessage().should('exist')
    })




    it('Verify Make Payment', () => {

        UserHomePage.makePaymentButton().click()
        PaymentPage.radioOther().click()
        cy.contains(masterData.verificationText1)
        PaymentPage.tboxCustomAmount().type(masterData.paymentAmount)
        PaymentPage.tabBankAccount().click()
        PaymentPage.radiobankAccount().click()
        PaymentPage.buttonMakePayment().click()
        cy.contains(masterData.verificationText2)
        PaymentPage.buttonAuthPayment().click()
        cy.wait(3000)
        PaymentPage.redAlertForExistingPayment().should('not.exist')
        PaymentPage.buttonCommConfirmation().click()
        cy.contains(masterData.verificationText3)
        UserHomePage.linkLogout().click()
        cy.wait(3000)
        LoginPage.username().should('exist')

    })


    it.only('Verify Cancel Payment', () => {

        UserHomePage.buttonViewPayActivity().click()
        PaymentPage.burgerPendingPaymentOption().click()
        cy.contains(masterData.verificationText4)
        PaymentPage.buttonCancelPayment().click()
        PaymentPage.buttonCancelPayment2().click()
        PaymentPage.labelCancelConfirmation().should('exist')
        UserHomePage.linkLogout().click()
        cy.wait(3000)
        LoginPage.username().should('exist')
        
    })



})