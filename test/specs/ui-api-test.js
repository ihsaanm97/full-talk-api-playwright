import { expect as chaiExpect } from 'chai';
import LoginPage from '../pageobjects/login.page.js';
import ContactsPage from '../pageobjects/contacts.page.js';
import Page from '../pageobjects/page.js';

describe('Fetch Contacts Tests - ', () => {
    before("Login to the test app - ", async function(){
        //Login to the test app
        browser.maximizeWindow();
        await LoginPage.open();
        await LoginPage.login('ihsaan@addressbooktest.com', 'pass12345');

        $('//nz-page-header-title[contains(text(), "Ihsaan Muhiyadheen")]').waitForDisplayed({timeout: 30000, timeoutMsg: 'Timed-out waiting for contacts page to appear after login.'})
    });

    describe('Fetch all the contacts - ', async function(){
        before("Create 3 contacts -.", async function(){
            //Create 3 contacts
            await ContactsPage.createContact("Lionel", "Messi", "832732459723", "messi@psg.com");
            await ContactsPage.createContact("Cristiano", "Ronaldo", "9829348534", "ronaldo@alnassrfc.com");
            await ContactsPage.createContact("Kylian", "Mbappe", "573045853049", "mbappe@psg.com");
        });

        it('Should validate that there are 3 contacts -', async () => {
            await expect(ContactsPage.page1Button).toBeDisplayed();
            await expect(ContactsPage.page2Button).not.toBeDisplayed();

            await expect(ContactsPage.contact1Card).toBeDisplayed();
            await expect(ContactsPage.contact2Card).toBeDisplayed();
            await expect(ContactsPage.contact3Card).toBeDisplayed();
            await expect(ContactsPage.contact4Card).not.toBeDisplayed();

        });
    });

    after('Logout of the test app -', async function(){
        await ContactsPage.logOutOfTestApp();
    });
});