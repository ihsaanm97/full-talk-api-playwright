/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        browser.maximizeWindow();
        return browser.url(`https://mmustra-address-book.herokuapp.com/${path}`)
    }

    async waitAndClick(element) {
        await element.waitForClickable({timeout: 25000});
        await element.click();
        return true;
    }

    async waitAndSetValue(element, text){
        await element.scrollIntoView();
        await element.waitForEnabled();
        await element.setValue(text);
        return true;
    }
    
    async waitForCreateContactFlashMessageToAppear(){
        const contactCreatedMessageBox = $('//div[@id="cdk-overlay-1"]/nz-message-container/div/nz-message/div/div/div/span');
        await contactCreatedMessageBox.waitForDisplayed({timeout:5000, interval: 100, timeoutMsg: 'Timed out waiting for Create Contact Flash Message to appear.'});
    }

    async waitForCreateContactFlashMessageToDisappear(){
        const contactCreatedMessageBox = $('//div[@id="cdk-overlay-1"]/nz-message-container/div/nz-message/div/div/div/span');
        await contactCreatedMessageBox.waitForDisplayed({timeout:5000, interval: 100, reverse: true, timeoutMsg: 'Timed out waiting for Create Contact Flash Message to disappear.'});
    }
}