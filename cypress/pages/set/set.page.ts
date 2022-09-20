class SetPage {

    /*
    Elements
     */

    private getCreateSetButton() {
        return cy.get('button.create-button');
    }

    private getSetNameField() {
        return cy.get('input.title-input');
    }

    private getDateField() {
        return cy.get('input.mat-datepicker-input');
    }

    private getCurrentDateInCalendarButton() {
        return cy.get('div.mat-calendar-content div.mat-calendar-body-today');
    }

    private getColourButton(count:number) {
        return cy.get(`div.color-wrapper div[data-color="${count}"]`);
    }

    private getSaveSetButton() {
        return cy.get('button.create-subject-button');
    }

    private getFileUploadField() {
        return cy.get('input[type="file"]');
    }

    private getUploadedFiles() {
        return cy.get('app-documents-content app-slideset-card p.document-name');
    }

    private getNotesTabButton() {
        return cy.get('#summaryTab');
    }

    private getFlashTabTabButton() {
        return cy.get('#flashcardsTab');
    }

    private getCreateNoteButton() {
        return cy.get('button.empty-note');
    }

    private getNotesTitle() {
        return cy.get('app-summaries-content app-summary-card p.document-name');
    }

    private getNotesSummary() {
        return cy.get('app-summaries-content app-summary-card p.summary-item-snippet');
    }

    private getCreateFlashCardButton() {
        return cy.get('app-flashcard-grid button[tabindex="0"]');
    }

    private getSetCardTitle() {
        return cy.get('div.subject-card-presentation-container div.subject-title');
    }

    private cardDocumentCountLocator:string = 'app-studyset-counts-bar>div>div:nth-child(1)';
    private cardNoteCountLocator:string = 'app-studyset-counts-bar>div>div:nth-child(2)';
    private cardFlashcardCountLocator:string = 'app-studyset-counts-bar>div>div:nth-child(3)';

    private overflowButtonLocator = 'i.mat-menu-trigger';

    private getDeleteButton() {
        return cy.get('div.mat-menu-content button:nth-child(4)');
    }

    private getDeleteApprovalButton() {
        return cy.get('mat-dialog-actions button.ui-primary-button');
    }

    /*
    Page Actions
     */
    public clickCreateSet() {
        this.getCreateSetButton().click();
    }

    public enterSyudySetName(name:string) {
        this.getSetNameField().type(name);
    }

    public clickCalendarField() {
        this.getDateField().click()
    }

    public clickCurrentDate() {
        this.getCurrentDateInCalendarButton().click();
    }

    public selectColourForSet(count:number) {
         this.getColourButton(count).click();
    }

    public clickSaveButton() {
        this.getSaveSetButton().click();
    }

    public uploadFile(filePath:string) {
        this.getFileUploadField().selectFile(filePath, { force: true });
    }

    public assertDocumentUploaded(fileName:string) {
        this.getUploadedFiles().should('have.text', fileName);
    }

    public openNotesTab() {
        this.getNotesTabButton().click();
    }


    public clickCreateNotesButton() {
        this.getCreateNoteButton().click();
    }


    public assertNoteTitle(title:string) {
        this.getNotesTitle().should('have.text', title);
    }

    public assertNoteSummary(summary:string) {
        this.getNotesSummary().should('have.text', summary);
    }

    public openFlashCardTab() {
        this.getFlashTabTabButton().click();
    }

    public clickCreateFlashCardButton() {
        this.getCreateFlashCardButton().click();
    }

    public assertStudySetCreatedCorrectly(nameOfSet:string, docCount:number, flashcardCount:number, noteCount:number) {
        this.getSetCardTitle().contains(nameOfSet).parent().parent().within(() => {
            cy.get(this.cardDocumentCountLocator).should('have.text', ` ${docCount}  Document `);
            cy.get(this.cardNoteCountLocator).should('have.text', ` ${noteCount}  Note `);
            cy.get(this.cardFlashcardCountLocator).should('have.text', ` ${flashcardCount}  Flashcard `);
        });
    }

    public clickOverFlowButton(nameOfSet:string) {
        this.getSetCardTitle().contains(nameOfSet).parent().parent().within(() => {
            cy.get(this.overflowButtonLocator).click();
        });
    }

    public clickDeleteButton() {
        this.getDeleteButton().click();
    }

    public clickDeleteApprovalButton() {
        this.getDeleteApprovalButton().click();
    }

    public assertStudyCardNotPresent(nameOfSet:string) {
        cy.intercept({
            method: 'DELETE',
            url: '**/users/*/course-subjects/*/',
          }).as('deleteStudySetCall')       
        cy.wait('@deleteStudySetCall', {timeout:80000});
        cy.wait(2000);
        this.getSetCardTitle().contains(nameOfSet).should('not.exist');
    }
}

export = new SetPage();