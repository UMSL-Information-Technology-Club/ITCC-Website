// Create a request variable and assign a new XMLHttpRequest obbject to it
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.github.com/orgs/UMSL-Information-Technology-Club/repos', true)

request.onload = function () {
    //Begin assigning JSON data here
    var data = JSON.parse(this.response);
    console.log(data);
}

//Send request
request.send();