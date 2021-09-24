class PaymentPage {

    static radioOther() {
        return cy.get('#other', { timeout: 10000 })
    }


    static tboxCustomAmount() {
        return cy.get('#customPaymentAmount', { timeout: 1000 })
    }

    static radiobankAccount() {
        return cy.get('#existingBankAccount-C1', { timeout: 3000 })
    }

    static tabBankAccount() {
        return cy.get('img[alt="bank account"]')
    }

    static buttonMakePayment() {
        return cy.get('button[name=makePayment]')
    }

    static buttonAuthPayment() {
        return cy.get('span[translate=authorizeSinglePayment]')
    }


    static buttonCommConfirmation() {
        return cy.get('button[name=sendPaymentConfirmation]', { timeout: 20000 })
    }


    static redAlertForExistingPayment() {
        return cy.get('#alerts', { timeout: 5000 })
    }

    static burgerPendingPaymentOption() {
        return cy.get('#pendingPaymentOptions_0', { timeout: 10000 })
    }

    static buttonCancelPayment() {

        return cy.get('button[translate=cancel]').first()
    }


    static buttonCancelPayment2() {

        return cy.get('span[translate=cancelPayment]',{ timeout: 10000 })
    }


    static labelCancelConfirmation() {

        return cy.get('.alert.alert-success',{ timeout: 10000 })
    }

    ////div[@class='alert alert-success']
    

}

export default PaymentPage