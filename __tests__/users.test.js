const axios = require('axios');
const Users = require('../users');

// Mock the axios module
jest.mock('axios');

// response the mock module should return
test('should fetch users', () => {

    const users = [{
        "id": 1,
        "first_name": "Robert",
        "last_name": "Schwartz",
        "email": "rob23@gmail.com"
    }, {
        "id": 2,
        "first_name": "Lucy",
        "last_name": "Ballmer",
        "email": "lucyb56@gmail.com"
    }];

    const resp = { data : users };
    // the mock implementation returns a promise with a respsonse
    axios.get.mockImplementation(() => Promise.resolve(resp));

    // testing mocked Users.all 
    Users.all().then(resp => expect(resp.data).toEqual(users));
});