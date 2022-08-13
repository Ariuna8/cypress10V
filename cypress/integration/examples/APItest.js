describe('first API test', function () {
  it('test', function () {
    cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
      "name": "Learn Appium Automation with Java",
      "isbn": "bcggsss",
      "aisle": "22s7",
      "Author": "Joe foe"
    }).then(function (response) {
      expect(response.body).to.have.property("Msg", "successfully added")
  })
  })
})
// Authentication Server API Contract Details: -
//   url – http://localhost:7075/login?redirectTo=http://localhost:7074/set_token
//   Method: POST
// url encoded Body content
// username : jane.lane
// password : password123