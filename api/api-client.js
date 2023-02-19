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
        console.log("Create Contact Successful: ")
        return response;
    })
    .catch( async function (error) {
        console.log("Error in creating contact: " + error);
    });    

    // if(contactResponse.status == 201)
        console.log(contactResponse.data.firstName + ' ' + contactResponse.data.lastName);
}