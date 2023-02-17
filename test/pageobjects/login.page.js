import { assert } from 'chai';
import ContactsPage from './contacts.page.js';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('[placeholder="Email"]');
    }

    get inputPassword () {
        return $('[placeholder="Password"]');
    }

    get btnSubmit () {
        return $('//span[contains(text(), "Submit")]/parent::button');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.waitAndSetValue(this.inputUsername, username);
        await this.waitAndSetValue(this.inputPassword, password);

        await this.waitAndClick(this.btnSubmit);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('auth/login');
    }
}

export default new LoginPage();
