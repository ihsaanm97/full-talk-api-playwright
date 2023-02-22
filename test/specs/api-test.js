import * as APIClient from '../../api/api-client.js'
import { expect as chaiExpect} from 'chai';

let authToken = {};

describe('Fetch Contacts API Tests - ', () => {
    
    before("Login to the test app and create 3 contacts through API - ", async function(){
        //Login to the test app
        authToken = await APIClient.loginThroughAPI({email: 'ihsaan@addressbooktest.com', password: 'pass12345'});

        //Fetch all the present contacts and delete them
        await APIClient.deleteAllContactsThroughAPI({token: authToken.token});

        //Create 3 new contacts
        await APIClient.createContactThroughAPI({firstName: 'Lionel', lastName: 'Messi', email: ['messi@psg.com'], phone: ['832732459723'], token: authToken.token});
        await APIClient.createContactThroughAPI({firstName: 'Cristiano', lastName: 'Ronaldo', email: ['ronaldo@alnassrfc.com'], phone: ['9829348534'], token: authToken.token});
        await APIClient.createContactThroughAPI({firstName: 'Kylian', lastName: 'Mbappe', email: ['mbappe@psg.com'], phone: ['573045853049'], token: authToken.token});
    });


    it('Should fetch all 3 contacts -', async () => {

        const getAllContactsResponse = await APIClient.getAllContactsThroughAPI({token: authToken.token});

        const fetchedContacts = getAllContactsResponse.data.docs;

        chaiExpect(getAllContactsResponse.status).to.equal(200);
        chaiExpect(fetchedContacts.length).to.equal(3);
        chaiExpect(fetchedContacts[0].fullName).to.equal('Lionel Messi');
        chaiExpect(fetchedContacts[1].fullName).to.equal('Cristiano Ronaldo');
        chaiExpect(fetchedContacts[2].fullName).to.equal('Kylian Mbappe');
    });
});