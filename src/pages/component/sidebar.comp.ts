class Sidebar {
    private getSetElement() {
        return cy.get('app-layout>nav a[href="/studysets"]');
    }

    public openSetModule() {
        this.getSetElement().click();
    }
}

export = new Sidebar();