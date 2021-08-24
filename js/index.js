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


function onbodyload(){
    document.getElementById("bg_player").src = "resources/videos/"+7+".webm";
    document.getElementById("home_player").src = "resources/videos/"+1+".webm";
}
