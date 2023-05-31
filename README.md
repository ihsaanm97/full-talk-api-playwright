# Leveraging APIs in Testing   
### (FULL Talk by Ihsaan Muhiyadheen - 24th February 2023)

This project was built to show how APIs can help in making our UI test cases faster, more reliable and less flaky. The application under test is [Address Book](https://mmustra-address-book.herokuapp.com/) built by [Marin Muštra](https://github.com/mmustra). Here are the links to understand the functioning of the test app:
1) [Address Book Server Repo](https://github.com/mmustra/address-book-server)
2) [Address Book Client Repo](https://github.com/mmustra/address-book-client)

### <ins>Getting Started</ins>

To get started, clone the repository to your local machine. Create an empty directory, navigate to the new directory and run the following command:
```console
git clone https://github.com/ihsaanm97/full-talk-api-testing.git
```
To install dependencies, run the following command in your terminal:
```console
npm install
```

### <ins>Running the test cases</ins>
#### 1. UI Test Cases
You can run the *UI* test cases using the following command:
```console
npm run wdio:ui-tests
```
This will start a *parallel* test run of all the spec files (which contain the test cases) in the `test/specs/ui` directory.
- To run a single spec file, mention the path to that spec file here:
https://github.com/ihsaanm97/full-talk-api-testing/blob/45bcf0d3e34eeaf5a9f1e968e99a83540c0e5cda/wdio.conf.js#L25-L29
- To run both spec files one after the other in a single test run, update `maxInstances` value to `1`:
https://github.com/ihsaanm97/full-talk-api-testing/blob/de69af103be9660f605c88f1fd4bb6ebea46d880/wdio.conf.js#L50

UI test cases are run using WebDriver IO.

#### 2. API Test Cases
You can run the *API* test cases using the following command:
```console
npm run mocha:api-tests
```
API test cases are run using Mocha.

### <ins>Test Cases</ins>
The scenario that we are trying to test here is fetching all the contacts in a test account.
- To view the test case in Qase, click [here](https://app.qase.io/project/DP?case=9&previewMode=modal&suite=3).
- If you do not have access to Qase, you can view the screenshot of the test case [here](https://share.anysnap.app/fNltGP7wNMf4).

The precondition to this test case consists of the following steps:
1) Logging in to the test application.
2) Deleting all the contacts present (so that we can start with a fresh account in every test run).
3) Creating 3 new contacts.

The following spec files are included in this repository:
1) `ui/ui-test.js` - All the precondition steps as well as test steps are preformed using the UI.
2) `ui/ui-api-test.js` - All the precondition steps are performed using API calls and test steps are performed using the UI.
3) `api/api-test.js` - All the precondition steps as well as test steps are performed using API calls. 

**NOTE** - Accounts created in the test application have a lifetime of 1 day. So if you are unable to login to the application using your registered email and password, try re-registering. One way that I manage this problem is by registering myself every morning before I start running the tests. I use Postman to send the registration request seamlessly, the details of which you will find below. You can also use the UI to register yourself.

### <ins>Test Run Videos</ins>
To view the tests in action, click [here](https://photos.app.goo.gl/VZrW89pJiyPNfSqv8).

### <ins>Postman Collection</ins>
If you would like to run these requests using Postman, you can access the Collection from [here](https://www.postman.com/flight-meteorologist-26086939/workspace/full-talk-feb-2023-mmustra-heroku-address-book/collection/21133180-932784f4-0b0c-4315-af80-dd810dee690d?action=share&creator=21133180).

### <ins>Contributing</ins>
Contributions to this repository are welcome. To contribute, clone the repository and create a new branch for your changes. Then, submit a pull request with your changes.

### <ins>For Queries</ins>
Reach out to me @Ihsaan Muhiyadheen in AnywhereApp and I'd be happy to help!
