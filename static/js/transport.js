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

var Type =  getQueryVariable('t');
var Specify =  getQueryVariable('term');

if (Type == "Story"){
    document.getElementById("intro").innerHTML = "These are the story results for: " + Specify;
    $.getJSON( "/fetch/nodes", { 't': Type , 'n': Specify } )
    .done(function( data ) {
        var workspace_results = document.getElementById("display");
        console.log(Type);
        if (data.response.rows == 0) {
            var output = document.createElement('p');
            var text = document.createTextNode("No results found");
            output.append(text);
            var workspace_empty = document.getElementById("display-empty");
            workspace_empty.append(output);
        }
        if (Type == "Story"){
            for (i = 0; i < data.response.rows; i++){
                var output_display = document.createElement('tr');
                var output = document.createElement('td');
                var temp = data.response.data[i].node_properties.name;
                output.append(temp);
                output_display.append(output);


                var modal = document.createElement('div');
                modal.setAttribute("id", "myModal" + i);
                modal.setAttribute("class", "modal");
                // modal.style.display = "none";
                // modal.style.position = "fixed"; /* Stay in place */
                // modal.style.zIndex = 1; /* Sit on top */
                // modal.style.left = 0;
                // modal.style.top = 0;
                // modal.style.width = "100%"; /* Full width */
                // modal.style.height = "100%"; /* Full height */
                // modal.style.overflow = "auto"; /* Enable scroll if needed */
                // modal.style.backgroundColor = "rgb(0,0,0)"; /* Fallback color */
                // modal.style.backgroundColor = "rgba(0,0,0,0.4)"; /* Black w/ opacity */

                //Modal Content Div
                var modal_dialog = document.createElement('div');
                modal_dialog.setAttribute("class", "modal-dialog");
                // modal_content.setAttribute("class", "modal-content");
                // modal_content.style.margin = "15% auto";
                // modal_content.style.padding = "20px";
                // modal_content.style.border = "1px";
                // modal_content.style.width = "80%";


                //Modal Span
                // var modal_span = document.createElement('span');
                // modal_span.setAttribute("class", "close")
                // modal_span.innerHTML = "&times";
                // modal_span.setAttribute("id", i);
                // modal_content.append(modal_span);

                var modal_content = document.createElement('div');
                modal_content.setAttribute("class", "modal-content");

                var modal_header = document.createElement('div');
                modal_header.setAttribute("class", "modal-header");


                //Button to display more information about the entity
                let display_button = document.createElement('button');
                display_button.setAttribute("class", "out_button");
                display_button.setAttribute("id", i);
                display_button.setAttribute("type", "submit");
                display_button.innerHTML = "More Info";

                let display_data = document.createElement('td');
                display_data.append(display_button);

                output_display.append(display_data);


                // var modal_text = document.createElement('p');
                // var text = document.createTextNode("Title - " + data.response.data[i].node_properties.name);
                // modal_text.appendChild(text);
                // var br = document.createElement('br');
                // modal_text.appendChild(br);
                // var br = document.createElement('br');
                // modal_text.appendChild(br);

                var modal_title = document.createElement('h5');
                var text = document.createTextNode("Title - " + data.response.data[i].node_properties.name);
                modal_title.appendChild(text);

                var modal_button = document.createElement('button');
                modal_button.setAttribute("type", "button");
                modal_button.setAttribute("class", "btn-close");
                modal_button.setAttribute("data-bs-dismiss", "modal");
                modal_button.setAttribute("aria-label", "Close");

                var modal_body = document.createElement('div');
                modal_body.setAttribute("class", "modal-body");

                var modal_text = document.createElement('p');
                text = document.createTextNode("Notes - " + data.response.data[i].node_properties.notes);
                modal_text.appendChild(text);
                // var br = document.createElement('br');
                // modal_text.appendChild(br);
                // var br = document.createElement('br');
                // modal_text.appendChild(br);


                text = document.createTextNode("Other Recommended Stories:");
                temp_div = document.createElement('div');
                temp_div.append(text);
                modal_text.appendChild(temp_div);

                var recommend_display = document.createElement('div');
                recommend_display.setAttribute("id", "show_recommended" + i);
                modal_text.appendChild(recommend_display);
                getComparisons(data.response.data[i].node_properties.name, i);


                display_button.addEventListener('click', function(){
                   document.getElementById("myModal" + parseInt(display_button.getAttribute("id"))).style.display = "block";
                });

                //When the user clicks on <span> (x), close the modal
                modal_button.addEventListener('click', function(){
                    document.getElementById("myModal" + parseInt(display_button.getAttribute("id"))).style.display = "none";
                });

                modal_body.append(modal_text);        
                modal_header.append(modal_title);
                modal_header.append(modal_button);
                modal_content.append(modal_header);
                modal_content.append(modal_body);
                modal_dialog.append(modal_content);
                modal.append(modal_dialog);

                output_display.append(modal);
                workspace_results.append(output_display);
            }
        }
    })

    .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    });
}

if (Type == "KeyPhrase"){
    document.getElementById("intro").innerHTML = "These are the keyphrase results for: " + Specify;
    $.getJSON( "/fetch/nodes", { 't': Type , 'txt': Specify } )
      .done(function( data ) {
        var workspace_results = document.getElementById("display");
        if (data.response.rows == 0) {
            var output = document.createElement('p');
            var text = document.createTextNode("No results found");
            output.append(text);
            var workspace_empty = document.getElementById("display-empty");
            workspace_empty.append(output);
        }
        if (Type == "KeyPhrase"){
            for (i = 0; i < data.response.rows; i++){
                var output_display = document.createElement('tr');
                var output = document.createElement('td');
                var temp = "-" + data.response.data[i].node_properties.text;
                output.append(temp);
                output_display.append(output);


                var modal = document.createElement('div');
                modal.setAttribute("id", "myModal" + i);
                modal.setAttribute("class", "modal");
                // modal.style.display = "none";
                // modal.style.position = "fixed"; /* Stay in place */
                // modal.style.zIndex = 1; /* Sit on top */
                // modal.style.left = 0;
                // modal.style.top = 0;
                // modal.style.width = "100%"; /* Full width */
                // modal.style.height = "100%"; /* Full height */
                // modal.style.overflow = "auto"; /* Enable scroll if needed */
                // modal.style.backgroundColor = "rgb(0,0,0)"; /* Fallback color */
                // modal.style.backgroundColor = "rgba(0,0,0,0.4)"; /* Black w/ opacity */

                //Modal Content Div
                var modal_dialog = document.createElement('div');
                modal_dialog.setAttribute("class", "modal-dialog");
                // modal_content.setAttribute("class", "modal-content");
                // modal_content.style.margin = "15% auto";
                // modal_content.style.padding = "20px";
                // modal_content.style.border = "1px";
                // modal_content.style.width = "80%";


                //Modal Span
                // var modal_span = document.createElement('span');
                // modal_span.setAttribute("class", "close")
                // modal_span.innerHTML = "&times";
                // modal_span.setAttribute("id", i);
                // modal_content.append(modal_span);

                var modal_content = document.createElement('div');
                modal_content.setAttribute("class", "modal-content");

                var modal_header = document.createElement('div');
                modal_header.setAttribute("class", "modal-header");


                //Button to display more information about the entity
                let display_button = document.createElement('button');
                display_button.setAttribute("class", "out_button");
                display_button.setAttribute("id", i);
                display_button.setAttribute("type", "submit");
                display_button.innerHTML = "More Info";

                let display_data = document.createElement('td');
                display_data.append(display_button);

                output_display.append(display_data);


                // var modal_text = document.createElement('p');
                // var text = document.createTextNode("Title - " + data.response.data[i].node_properties.name);
                // modal_text.appendChild(text);
                // var br = document.createElement('br');
                // modal_text.appendChild(br);
                // var br = document.createElement('br');
                // modal_text.appendChild(br);

                var modal_title = document.createElement('h5');
                var text = document.createTextNode("Text - " + data.response.data[i].node_properties.text);
                modal_title.appendChild(text);

                var modal_button = document.createElement('button');
                modal_button.setAttribute("type", "button");
                modal_button.setAttribute("class", "btn-close");
                modal_button.setAttribute("data-bs-dismiss", "modal");
                modal_button.setAttribute("aria-label", "Close");

                var modal_body = document.createElement('div');
                modal_body.setAttribute("class", "modal-body");

                var modal_text = document.createElement('p');
                // var br = document.createElement('br');
                // modal_text.appendChild(br);
                // var br = document.createElement('br');
                // modal_text.appendChild(br);


                text = document.createTextNode("Stories with this KeyPhrase:");
                temp_div = document.createElement('div');
                temp_div.append(text);
                modal_text.appendChild(temp_div);

                var recommend_display = document.createElement('div');
                recommend_display.setAttribute("id", "show_recommended" + i);
                modal_text.appendChild(recommend_display);
                getStories(data.response.data[i].node_properties.text, i);


                display_button.addEventListener('click', function(){
                   document.getElementById("myModal" + parseInt(display_button.getAttribute("id"))).style.display = "block";
                });

                //When the user clicks on <span> (x), close the modal
                modal_button.addEventListener('click', function(){
                    document.getElementById("myModal" + parseInt(display_button.getAttribute("id"))).style.display = "none";
                });

                modal_body.append(modal_text);        
                modal_header.append(modal_title);
                modal_header.append(modal_button);
                modal_content.append(modal_header);
                modal_content.append(modal_body);
                modal_dialog.append(modal_content);
                modal.append(modal_dialog);

                output_display.append(modal);
                workspace_results.append(output_display);
            }
        }
      })

    .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    });
}

function getComparisons(name, count){
    $.getJSON( "/fetch/compare", { 'n': name } )
            .done(function( data ) {
                var workspace_results = document.getElementById("show_recommended" + count);
                for (i = 0; i < data.response.data[0][0].length; i++){
                    var recommend_display = document.createElement('div');
                    var recommend = document.createElement('p');
                    var temp = data.response.data[0][0][i];
                    recommend.append("-" + temp);
                    recommend_display.append(recommend);
                    workspace_results.append(recommend_display);    
                }
            })
            .fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
            });
}

function getStories(name, count){
     $.getJSON( "/fetch/keystories", { 'n': name } )
            .done(function( data ) {
                var workspace_results = document.getElementById("show_recommended" + count);
                for (i = 0; i < data.response.data[0][0].length; i++){
                    var recommend_display = document.createElement('div');
                    var recommend = document.createElement('p');
                    var temp = data.response.data[0][0][i];
                    recommend.append("-" + temp);
                    recommend_display.append(recommend);
                    workspace_results.append(recommend_display);    
                }
            })
            .fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
            });
}