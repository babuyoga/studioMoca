// var y = "2";
//
// $(".myVideo1").hide();
// $(".myVideo"+y).show();
//
//
// $(".menu a").hover(function(){
//   $(".myVideo1").toggle();
//   $(".myVideo"+y).toggle();
// })

function loadnew(video_num) {
document.getElementById("home_player").src = "resources/videos/"+video_num+".webm";
}

// $("#work").hover(loadnew());

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


$( ".fullcover" ).click(function(e) {
    if (e.target == this) {
        reverse();
    }
});

function client() {
  var clientbar = $(".clientbar");
    var fullcover = $(".fullcover");
      var binder = $(".binder");

clientbar.addClass("clientbar_vis");
fullcover.addClass("fullcover_vis");
binder.addClass("binder_vis");
}

function reverse() {
  var clientbar = $(".clientbar");
    var fullcover = $(".fullcover");
      var binder = $(".binder");
  clientbar.removeClass("clientbar_vis");
  fullcover.removeClass("fullcover_vis");
  binder.removeClass("binder_vis");
}
