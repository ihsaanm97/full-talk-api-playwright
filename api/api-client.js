import axios from "axios";

const baseUrl = "https://mmustra-address-book.herokuapp.com/";

export async function loginThroughAPI({email, password}){

    let authResponse = await axios.post(baseUrl + 'api/auth/login', {
        email: email,
        password: password
    })
    .then( function(response) {
        return response;
    })
    .catch( async function (error) {
        console.log("Error encountered while logging in: " + error);
    });    
    return {
        token: authResponse.data.token
    };
}

export async function createContactThroughAPI({firstName, lastName, email, phone, token, avatarUrl ="", notes = "" }) {
    
    const config ={
        headers: { 
            Authorization: `Bearer ${token}`
        }
    }  

    const data = {
        firstName: firstName,
        lastName: lastName,
        phones: phone,
        emails: email
    };

    let contactResponse = await axios.post(baseUrl + 'api/contacts', data, config)
    .then( function(response) {
        return response;
    })
    .catch( async function (error) {
        console.log("Error in creating contact: " + error);
    });    

    if(contactResponse.status == 201)
        console.log('Contact Created: ' + contactResponse.data.firstName + ' ' + contactResponse.data.lastName);
}

export async function getAllCustomersThroughAPI({token}) {
    
    const config ={
        headers: { 
            Authorization: `Bearer ${token}`
        }
    }

    let contactResponse = await axios.get(baseUrl + 'api/contacts', config)
    .then( function(response) {
        return response;
    })
    .catch( async function (error) {
        console.log("Error in fetch all contacts: " + error);
    });    

    if(contactResponse.status == 200)
        console.log("Get All Contacts successful");
    return contactResponse;
}
 
function extractContactIdsFromResponse(responseArray) {
    let contactIdList = [];
    
    for (let i = 0; i < responseArray.length; i++) 
        contactIdList[i] = responseArray[i].id;

    return contactIdList;
}






export async function deleteContactThroughAPI({userId, token}) {
    const config = {
        headers: { 
            Authorization: `Bearer ${token}`
        }
    }  

    let deleteResponse = await axios.delete(baseUrl + 'api/contacts/' + userId, config) 
    .then( function(response) {
        return response;
    })
    .catch( async function (error) {
        console.log("Error encountered while logging in: " + error);
    });

    if(deleteResponse.status == 200 )
        return true;
};






export async function deleteAllContactsThroughAPI({token}) {
    const config ={
        headers: { 
            Authorization: `Bearer ${token}`
        }
    }  
    
    const allContactsList = await getAllCustomersThroughAPI({token});
    const contactIdList = extractContactIdsFromResponse(allContactsList.data.docs);

    let deletedContacts = [];
    for (let i = 0; i < contactIdList.length; i++)
        deletedContacts[i] = await deleteContactThroughAPI({userId: contactIdList[i], token: token});

    if(deletedContacts.length == contactIdList.length) 
        console.log("All contacts deleted.");
}