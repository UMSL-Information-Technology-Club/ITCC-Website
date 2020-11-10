/* 
Project: JSON to Table Converter
Authors: Keith Huels, Alex Helton
Latest revision: 11/9/2020
*/

/* Total hours wasted here: 10 */

// Create a request variable and assign a new XMLHttpRequest obbject to it.
var request = new XMLHttpRequest()
// Open a new connection, using the GET request on the URL endpoint.
request.open('GET', 'https://api.github.com/orgs/UMSL-Information-Technology-Club/repos', true)

console.log("Grabbed the request!")

//This is where the fun begins.
request.onload = function () {
    //Begin assigning JSON data here
    var data = JSON.parse(this.response);

    console.log("Parsing...")
    
    var statusHTML ='';

    /* This mess here loops through the specified JSON properties, retrieves data, and formats it into the bootstrap table. */
    /* It's not pretty, but it works. */

    $.each(data, function(i, status) {
        statusHTML += '<tr>';
        /* statusHTML += '<td>' + status.id + '</td>'; */
        statusHTML += '<td>' + status.name + '</td>';
        statusHTML += '<td>' + status.description + '</td>';
        statusHTML += '<td id="statusHtml">' + '<a href= '+ status.html_url + '>' + status.html_url + '</td>'; //this could be done better, but whatever
        statusHTML += '<td>' + status.language + '</td>';
        statusHTML += '</tr>';
    });

    console.log("Table created.")

    //Display data on page
    $('tbody').html(statusHTML);

    console.log("Table deployed. Have a nice day :)")

}

//Send API request
request.send();