// Create a request variable and assign a new XMLHttpRequest obbject to it
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.github.com/orgs/UMSL-Information-Technology-Club/repos', true)

request.onload = function () {
    //Begin assigning JSON data here
    var data = JSON.parse(this.response);
    
    var statusHTML ='';

    /*loop through the specified JSON properties, retrieve data, 
    and format it into the bootstrap table */
    $.each(data, function(i, status) {
        statusHTML += '<tr>';
        statusHTML += '<td>' + status.id + '</td>';
        statusHTML += '<td>' + status.name + '</td>';
        statusHTML += '<td>' + status.html_url + '</td>';
        statusHTML += '<td>' + status.language + '</td>';
        statusHTML += '</tr>';
    });

    //Display data on page
    $('tbody').html(statusHTML);

}

//Send API request
request.send();