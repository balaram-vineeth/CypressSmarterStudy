class FlashCard {


    private getQuestionInputField() {
        return cy.get('aside div.question p');
    }

    private getAnswerInputField() {
        return cy.get('aside app-froala-wrapper[feature="flashcard-answer"] div.fr-element p');
    }

    private getCreateButton() {
        return cy.get('aside #flashcard-create');
    }

    private getBackButton() {
        return cy.get('button.go-back-button');
    }

    public enterQuestion(question:string) {
        this.getQuestionInputField().type(question);
    }

    public enterAnswer(answer:string) {
        this.getAnswerInputField().type(answer);
    }

    public clickCreateButton() {
        this.getCreateButton().click();
    }

    public clickBackButton() {
        this.getBackButton().click();
    }
}

export = new FlashCard();