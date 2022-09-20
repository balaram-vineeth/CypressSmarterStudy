class NotesPage {
    private getEditNoteTitleButton() {
        return cy.get('button.edit-button');
    }

    private getNoteNameField() {
        return cy.get('div.portal-outlet input');
    }

    private getNotesEditorInputField() {
        return cy.get('app-summary-editor div.fr-element p');
    }

    private getBackButton() {
        return cy.get('button.go-back-button');
    }

    public clickEditNotesButton() {
        this.getEditNoteTitleButton().click();
    }

    public enterNotesTitle(title:string) {
        this.getNoteNameField().clear();
        this.getNoteNameField().type(title);
    }

    public enterNotesEditorText(note:string) {
        this.getNotesEditorInputField().type(note);
    }

    public clickBackButton() {
        this.getBackButton().click();
    }
}

export = new NotesPage();