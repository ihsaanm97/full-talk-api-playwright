

import Page from './page.js';

class ContactsPage extends Page {
   
    get addressBookTitle() {
        return $('(//h1[@class="ant-typography"])[1]');
    }
    get newContactButton() {
        return $('//a[@href="/contacts/new"]');
    }
    get firstNameField() {
        return $('#firstName');
    }
    get lastNameField() {
        return $('#lastName');
    }
    get emailsTab() {
        return $('//div[contains(text(), "Emails")]');
    }
    get phonesTab() {
        return $('//div[contains(text(), "Phones")]');
    }
    get email1Field() {
        return $('#email0');
    }
    get phone1Field() {
        return $('#phone0');
    }
    get saveContactsButtonDesktop() {
        return $('(//span[contains(text(), "Save")]//parent::button)[1]')
    }

    get contact1Card() {
        return $('(//nz-card)[3]');
    }

    get contact2Card() {
        return $('(//nz-card)[4]');
    }
    
    get contact3Card() {
        return $('(//nz-card)[5]');
    }

    get contact4Card() {
        return $('(//nz-card)[6]');
    }

    get page1Button() {
        return $('//a[contains(text(), "1")]');
    }
    
    get page2Button() {
        return $('//a[contains(text(), "2")]');
    }
    
    get logOutButton() {
        return $('//button[@nztooltiptitle="Log out"]');
    }

    get contact1CardSettingsButton() {
        return $('(//*[name()="svg" and @data-icon="setting"])[1]');
    }
    
    get contactCardSettingsDeleteDropdown() {
        return $('//div[contains(@id, "cdk-overlay-")]/div/div/ul/li[contains(text(), "Delete")]');
    }

    get contact1CardDeleteLoadingIcon() {
        return $('.anticon-loading');
    }

    async createContact(firstName, lastName, phone, email) {

        await this.waitAndClick(this.newContactButton);

        await this.waitAndSetValue(this.firstNameField, firstName);
        await this.waitAndSetValue(this.lastNameField, lastName);

        await this.waitAndSetValue(this.phone1Field, phone);

        await this.waitAndClick(this.emailsTab);
        await this.waitAndSetValue(this.email1Field, email);
        
        await this.waitAndClick(this.saveContactsButtonDesktop);

        await this.waitForCreateContactFlashMessageToAppear();
    }

    async deleteFirstContact() {
        await this.waitAndClick(this.contact1CardSettingsButton);
        await this.waitAndClick(this.contactCardSettingsDeleteDropdown);

        // console.log("Contact deletion successful")
    }

    async deleteAllContacts() {
        let isExisting = true;
        
        while (isExisting) {
            isExisting = await this.contact1CardSettingsButton.isExisting();
            if(isExisting)
                await this.deleteFirstContact();
        }
        console.log("All contacts deleted.");
    }

    async logOutOfTestApp() {
        await this.waitAndClick(this.logOutButton);
    }
}

export default new ContactsPage();
