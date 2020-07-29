// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest ()

// Open a new connection, using the Get request on the url endpoint
request.open('GET', 'http://steamcommunity.com/id/HealthyStuff/inventory/json/440/2', true)

request.onload = function () {
// Begin accessing JSON data here
 }

// Send request
	request.send()

// Begin accessing JSON data here
var data = JSON.parse(this.response)

})
