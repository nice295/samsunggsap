(function($) {
  "use strict"; // Start of use strict

    var pollStaticRef = firebase.database().ref('/poll-static/');

    pollStaticRef.on('child_added', function (data) {
      console.log("id: " + data.val().id);
      console.log("enable: " + data.val().enable);
      console.log("url: " + data.val().url);

      $('#'+data.val().id).attr("href", data.val().url)

      if (data.val().enable) {
        $('#'+data.val().id).removeClass("invisible");
        $('#'+data.val().id).addClass("visible");
      }
      else {
        $('#'+data.val().id).removeClass("visible");
        $('#'+data.val().id).addClass("invisible");
      }
    });

    pollStaticRef.on('child_changed', function (data) {
      console.log("id: " + data.val().id);
      console.log("enable: " + data.val().enable);
      console.log("url: " + data.val().url);

      $('#'+data.val().id).attr("href", data.val().url)
 
      if (data.val().enable) {
        $('#'+data.val().id).removeClass("invisible");
        $('#'+data.val().id).addClass("visible");
      }
      else {
        $('#'+data.val().id).removeClass("visible");
        $('#'+data.val().id).addClass("invisible");
      }
    });

})(jQuery); // End of use strict