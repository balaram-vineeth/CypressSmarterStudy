import sidebarComp = require("./component/sidebar.comp");

class HomePage {

    public getSidebar() {
        return sidebarComp;
    }

    private getCloseModalButton() {
        return cy.get('mat-dialog-container.mat-dialog-container i.app-icon-close',{ timeout: 10000 });
    }

    public clickCloseModal() {
        this.getCloseModalButton().click();
    }

}

export = new HomePage();