class LoginPage {

    private getEmailField() {
        return cy.get('input[name="email"]');
    }

    private getPasswordField() {
        return cy.get('input[name="password"]');
    }

    private getSubmitButton() {
        return cy.get('button[type="submit"]');
    }

    public enterEmail(email:string) {
        this.getEmailField().type(email);
    }

    public enterPassword(password:string) {
        this.getPasswordField().type(password);
    }

    public clickSubmit() {
        this.getSubmitButton().click();
    }

}
export =  new LoginPage();