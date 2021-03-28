function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

var Story =  getQueryVariable('t');
var Specify =  getQueryVariable('n');



$.getJSON( "/fetch/nodes", { 't': Story , 'n': Specify } )
  .done(function( data ) {
    console.log('success');
    console.log( data.response.data[0].node_properties );
    $("p#display").html(data.response.data[0].node_properties.name);
  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
});