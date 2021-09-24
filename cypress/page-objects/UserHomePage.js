class UserHomePage {

    static welcomeMessage() {

        return cy.get('h2[translate=welcomeWithName]', { timeout: 25000 })
    }

    static makePaymentButton() {
        return cy.get('#paybydebitbutton')

    }

    static buttonViewPayActivity(){
        return cy.get('#viewPaymentHistoryButton',{ timeout: 5000 })
    }


    
    static linkLogout(){
        return cy.get('span[translate=logout]')
    }   

}
export default UserHomePage