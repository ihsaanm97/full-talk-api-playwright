# Leveraging APIs in Testing
### (Full Talk by Ihsaan Muhiyadheen - 24th February 2023)

This project was built to show how APIs can help in making our UI test cases faster, more reliable and less flaky. The application under test is [Address Book](https://mmustra-address-book.herokuapp.com/) built by [Marin Muštra](https://github.com/mmustra). Here are the links to understand the functioning of the test app:
1) [Address Book Server Repo](https://github.com/mmustra/address-book-server)
2) [Address Book Client Repo](https://github.com/mmustra/address-book-client)

## Getting Started

To get started, clone the repository to your local machine. Create an empty directory, navigate to the new directory and run the following command:
```console
git clone https://github.com/ihsaanm97/full-talk-api-testing.git
```
To install dependencies, run the following command in your terminal:
```console
npm install
```

### Running the test cases
You can run the test cases using the following command:
```console
npm run wdio
```
This will start a **parallel** test run of all the spec files (which contain the test cases) in the `test/specs` directory.
- To run a single spec file, mention the path to that spec file here:
https://github.com/ihsaanm97/full-talk-api-testing/blob/b37483c9e3e49dd676eef841d2624be042542915/wdio.conf.js#L25-L29
- To run both spech files one after the other in a single test run, update `maxInstances` value to `1`:
https://github.com/ihsaanm97/full-talk-api-testing/blob/de69af103be9660f605c88f1fd4bb6ebea46d880/wdio.conf.js#L50

### Test Cases
The scenario that we are trying to test here is fetching all the contacts in a test account.
- To view the test case in Qase, click [here](https://app.qase.io/project/DP?case=9&previewMode=modal&suite=3).
- If you do not have access to Qase, you can view the screenshot of the test case [here](https://share.anysnap.app/fNltGP7wNMf4).

The precondition to this test case involves the following steps:
1) Logging in to the test application.
2) Deleting all the contacts present (so that we can start with a fresh account in every test run).
3) Creating 3 new contacts.

The following spec files are included in this repository:
1) `ui-test.js` - All the precondition steps as well as test steps are preformed using the UI.
2) `ui-api-test.js` - All the precondition steps performed using API calls and test steps are performed using the UI.
3) `api-test.js` - All the precondition steps as well as test steps are performed using API calls. 

**NOTE** - Accounts created in the test application have a lifetime of 1 day. So if you are unable to login to the application using your registered email and password, try re-registering. One way that I manage this problem is by registering myself every morning before I start running the tests. I use Postman to send the registration request seamlessly, the details of which you will find below. You can also use the UI to register yourself.

### Postman Collection
If you would like to run these requests using Postman, you can access the Collection from here:
```url
https://www.postman.com/flight-meteorologist-26086939/workspace/full-talk-feb-2023-mmustra-heroku-address-book/collection/21133180-932784f4-0b0c-4315-af80-dd810dee690d?action=share&creator=21133180
```

### Contributing
Contributions to this repository are welcome. To contribute, clone the repository and create a new branch for your changes. Then, submit a pull request with your changes.

### For Queries
Reach out to me @Ihsaan Muhiyadheen in AnywhereApp and I'd be happy to help!
