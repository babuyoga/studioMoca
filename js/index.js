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
function myFunction(x) {
  if (x.matches) { // If media query matches

window.addEventListener("deviceorientation", handleOrientation, true);


function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;

console.log(absolute);
console.log(alpha); //0to360
console.log(beta); //-180to180
console.log(gamma);//-90to90


if(gamma > 0){
 $("#bgvid").css('left', ((gamma/90)*100));
  // Do stuff with the new orientation data
}else {
  $("#bgvid").css('left', (-1*(gamma/90)*100));
}


  } else {

  }
}

var x = window.matchMedia("(max-width: 1000px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
