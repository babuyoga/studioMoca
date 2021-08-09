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
