class LoginPage {

    static username() {
        return cy.get('#login', { timeout: 5000 })
    }

    static password() {
        cy.wait(500)
        return cy.get('#password')
    }
    static loginButton() {
        return cy.get('.ng-scope[translate=signIn]')
    }


}

export default LoginPage