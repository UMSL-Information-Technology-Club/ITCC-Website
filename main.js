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

    /* cash money */
    $.each(data, function(i, status) {
        statusHTML += '<tr>';
        statusHTML += '<td>' + status.id + '</td>';
        statusHTML += '<td>' + status.name + '</td>';
        statusHTML += '<td>' + status.description + '</td>';
        statusHTML += '<td id="statusHtml">' + '<a href= '+ status.html_url + '>' + status.html_url + '</td>';

        /* so for reference this mess is
        statusHTML += '<td>' + status.html_url + '</td>';
        but there's no decent way to wrench a link in there...
        */

        statusHTML += '<td>' + status.language + '</td>';
        statusHTML += '</tr>';
    });


    //Display data on page
    $('tbody').html(statusHTML);

}

//Send API request
request.send();