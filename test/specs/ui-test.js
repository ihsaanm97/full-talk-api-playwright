import LoginPage from '../pageobjects/login.page.js';
import ContactsPage from '../pageobjects/contacts.page.js';

describe('Fetch Contacts UI only Tests - ', () => {
    before("Login to the test app and create 3 contacts through UI - ", async function(){
        //Login to the test app
        await LoginPage.open();
        await LoginPage.login('ihsaan@addressbooktest.com', 'pass12345');

        $('//nz-page-header-title[contains(text(), "Ihsaan Muhiyadheen")]').waitForDisplayed({timeout: 30000, timeoutMsg: 'Timed-out waiting for contacts page to appear after login.'})

        //Delete the existing 3 contacts
       await ContactsPage.deleteFirstContact();
       await ContactsPage.deleteFirstContact();
       await ContactsPage.deleteFirstContact();

        //Create 3 contacts
        await ContactsPage.createContact("Lionel", "Messi", "8327324597", "messi@psg.com");
        await ContactsPage.createContact("Cristiano", "Ronaldo", "9829348534", "ronaldo@alnassrfc.com");
        await ContactsPage.createContact("Kylian", "Mbappe", "5730458530", "mbappe@psg.com");
    });

    it('Should fetch all 3 contacts -', async () => {
        await ContactsPage.page1Button.waitForDisplayed({timeout: 20000})
        await expect(ContactsPage.page2Button).not.toBeDisplayed();

        await expect(ContactsPage.contact1Card).toBeDisplayed();
        await expect(ContactsPage.contact2Card).toBeDisplayed();
        await expect(ContactsPage.contact3Card).toBeDisplayed();
        await expect(ContactsPage.contact4Card).not.toBeDisplayed();

    });

    after('Logout of the test app -', async function(){
        await ContactsPage.logOutOfTestApp();
    });
});