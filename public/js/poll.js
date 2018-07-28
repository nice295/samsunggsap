(function($) {
  "use strict"; // Start of use strict

  var containerElement = document.getElementById("js-firebase");

  // Get a reference to the database service
  var mentorsRef = firebase.database().ref('/polls/');
  mentorsRef.on('child_added', function (data) {
    // console.log("name: " + data.val().name);
    // console.log("name: " + data.val().enabled);
    // console.log("name: " + data.val().url);

    var out = "";
    out += '<div class="col-sm-4">'
    out += '<div class="team-member">';
    out += '  <h4>' + data.val().name + '</h4>';
    if (data.val().enabled == true) {
      out += '  <a id="startup-btn-' + data.val().name + '" class="visible btn btn-danger text-uppercase js-scroll-trigger" href="' + data.val().url + '" target="_blank">POLL</a>';
    }
    else {
      out += '  <a id="startup-btn-' + data.val().name + '" class="invisible btn btn-danger text-uppercase js-scroll-trigger" href="' + data.val().url + '" target="_blank">POLL</a>'; 
    }
    out += '</div>';
    out += '</div>';

    containerElement.innerHTML += out;
  });

  mentorsRef.on('child_changed', function (data) {
    // console.log("name: " + data.val().name);
    // console.log("name: " + data.val().enabled);
    // console.log("name: " + data.val().url);

    var startupID = "#startup-btn-" +data.val().name;

    if ( data.val().enabled == true ) {
      $(startupID).removeClass("invisible");
      $(startupID).addClass("visible");
    }
    else {
      $(startupID).removeClass("visible");
      $(startupID).addClass("invisible");
    }
  });
 
})(jQuery); // End of use strict