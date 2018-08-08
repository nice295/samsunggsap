(function($) {
  "use strict"; // Start of use strict

    var pollStaticRef = firebase.database().ref('/poll-static/');

    pollStaticRef.on('child_added', function (data) {
      // console.log("id: " + data.val().id);
      // console.log("enable: " + data.val().enable);
      // console.log("url: " + data.val().url);

      var htmlString = "";
      if (data.val().enable) {
        htmlString += `<div id="${data.val().id}" class="col-sm-4" style="display:block;">`;
      }
      else {
        htmlString += `<div id="${data.val().id}" class="col-sm-4" style="display:none;">`;
      }
      htmlString += '<div class="team-member">';
      htmlString += `<h5>${data.val().name}</h5>`;
      htmlString += `<div><iframe src="${data.val().url}" width="100%" height="900px" frameborder="0" marginheight="0" marginwidth="0">로드 중...</iframe></div>`;
      htmlString += '<div>';
      htmlString += '</div>';

      $("#js-poll").append(htmlString);
    });

    pollStaticRef.on('child_changed', function (data) {
      // console.log("id: " + data.val().id);
      // console.log("enable: " + data.val().enable);
      // console.log("url: " + data.val().url);

      // $('#'+data.val().id).attr("href", data.val().url)
 
      if (data.val().enable) {
        $('#'+data.val().id).css("display", "block");
        // $('#'+data.val().id).removeClass("hidden");
        // $('#'+data.val().id).addClass("show");
      }
      else {
        $('#'+data.val().id).css("display", "none");
        // $('#'+data.val().id).removeClass("show");
        // $('#'+data.val().id).addClass("hidden");
      }
    });

})(jQuery); // End of use strict