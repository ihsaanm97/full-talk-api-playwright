import ContactsPage from '../pageobjects/contacts.page.js';
import * as APIClient from '../../api/api-client.js'
import LoginPage from '../pageobjects/login.page.js'
import { expect as chaiExpect} from 'chai';

let authToken = {};

describe('Fetch Contacts UI Tests with APIs - ', () => {
    
    before("Login to the test app and create 3 contacts through API - ", async function(){
        await LoginPage.open();

        //Login to the test app
        authToken = await APIClient.loginThroughAPI({email: 'ihsaan@addressbooktest.com', password: 'pass12345'});

        //Fetch all the present contacts and delete them
        await APIClient.deleteAllContactsThroughAPI({token: authToken.token});

        //Create 3 new contacts
        await APIClient.createContactThroughAPI({firstName: 'Lionel', lastName: 'Messi', email: ['messi@psg.com'], phone: ['832732459723'], token: authToken.token});
        await APIClient.createContactThroughAPI({firstName: 'Cristiano', lastName: 'Ronaldo', email: ['ronaldo@alnassrfc.com'], phone: ['9829348534'], token: authToken.token});
        await APIClient.createContactThroughAPI({firstName: 'Kylian', lastName: 'Mbappe', email: ['mbappe@psg.com'], phone: ['573045853049'], token: authToken.token});
        
        await LoginPage.login('ihsaan@addressbooktest.com', 'pass12345');
        await $('//nz-page-header-title[contains(text(), "Ihsaan Muhiyadheen")]').waitForDisplayed({timeout: 30000, timeoutMsg: 'Timed-out waiting for contacts page to appear after login.'})
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