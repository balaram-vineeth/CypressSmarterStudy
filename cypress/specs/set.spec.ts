import * as Chance from 'chance';
import { Colours } from '../data/colours';
import { envDetails } from '../data/env';
import homePage = require('../pages/home.page');
import loginPage = require('../pages/login.page');
import flashcardPage = require('../pages/set/flashcard.page');
import notesPage = require('../pages/set/notes.page');
import setPage = require('../pages/set/set.page');

const chance = new Chance();

describe('The Study Set Creation flow should be created correctly', () => {

  const studySetName = `Study Set-${chance.integer()}`;

    it('The user should be able to login', () => {
      cy.visit('/login');
      loginPage.enterEmail(envDetails.email);
      loginPage.enterPassword(envDetails.password);
      loginPage.clickSubmit();
    });

    it('The user should be to create a set', () => {
      homePage.clickCloseModal();
      homePage.getSidebar().openSetModule();
      setPage.clickCreateSet();
      setPage.enterSyudySetName(studySetName);
      setPage.clickCalendarField();
      setPage.clickCurrentDate();
      setPage.selectColourForSet(Colours.Orange);
      setPage.clickSaveButton();
    });

    it('The user should be able to upload a file', () => {
      setPage.uploadFile('/Users/admin/Documents/To Read/1901.01538.pdf');
      setPage.assertDocumentUploaded('1901.01538');
    });

    it('The user should be able to add a new note', ()=> {
      let animalName = chance.animal();

      setPage.openNotesTab();
      setPage.clickCreateNotesButton();
      notesPage.clickEditNotesButton();
      notesPage.enterNotesTitle(animalName);
      notesPage.enterNotesEditorText(`New note about X -- ${animalName}`);
      notesPage.clickBackButton();
      setPage.openNotesTab();
      setPage.assertNoteTitle(animalName);
      setPage.assertNoteSummary(`New note about X -- ${animalName}`);
    });

    it('The user should be able to add a flashcard', ()=> {
      setPage.openFlashCardTab();
      setPage.clickCreateFlashCardButton();

      flashcardPage.enterQuestion(`Question about ${chance.animal()}`);
      flashcardPage.enterAnswer(`Answer about ${chance.animal()}`);
      flashcardPage.clickCreateButton();
      flashcardPage.clickBackButton();
    });

    it('The user should be able to delete the Study set', ()=> {
      setPage.assertStudySetCreatedCorrectly(studySetName, 1, 1, 1);
      setPage.clickOverFlowButton(studySetName);
      setPage.clickDeleteButton();
      setPage.clickDeleteApprovalButton();
      setPage.assertStudyCardNotPresent(studySetName);
    })


  })