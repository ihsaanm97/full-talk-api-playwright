import LoginPage from '../pageobjects/login.page.js';
import ContactsPage from '../pageobjects/contacts.page.js';

describe('Fetch Contacts UI only Tests - ', () => {
    before("Login to the test app and create 3 contacts through UI - ", async function(){
        //Login to the test app
        await LoginPage.open();
        await LoginPage.login('ihsaan@addressbooktest.com', 'pass12345');

        $('//nz-page-header-title[contains(text(), "Ihsaan Muhiyadheen")]').waitForDisplayed({timeout: 30000, timeoutMsg: 'Timed-out waiting for contacts page to appear after login.'})

        //Create 3 contacts
        await ContactsPage.createContact("Lionel", "Messi", "832732459723", "messi@psg.com");
        await ContactsPage.createContact("Cristiano", "Ronaldo", "9829348534", "ronaldo@alnassrfc.com");
        await ContactsPage.createContact("Kylian", "Mbappe", "573045853049", "mbappe@psg.com");
    });

    it('Should fetch all 3 contacts -', async () => {
        await expect(ContactsPage.page1Button).toBeDisplayed();
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