
var prevScrollpos = window.pageYOffset;
document.getElementById("myTopnav").style.top = "0";
// var flag=0;
    //
    // setTimeout(function () {
    //
    //   document.querySelector('.work_3').scrollIntoView({
    //     behavior: 'smooth'
    //   })
    //
    // }, 1000);


//
// window.onscroll = function() {
//
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("myTopnav").style.top = "0";
//     document.getElementById("myTopnav").style.opacity ="100%";
//   } else {
//     document.getElementById("myTopnav").style.top = "-23vh";
//     document.getElementById("myTopnav").style.opacity ="0%";
//   }
//   prevScrollpos = currentScrollPos;
// }

window.onscroll = function() {myFunction()};

function myFunction() {
  // navbar hide code
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myTopnav").style.top = "0";
    document.getElementById("myTopnav").style.opacity ="100%";

  } else {


    document.getElementById("myTopnav").style.top = "-13vh";
    document.getElementById("myTopnav").style.opacity ="99%";
    $(".topnav a").css({"padding":"7.5vh 2vw 0vh 2vw"});

      }
  prevScrollpos = currentScrollPos;




   // scroll bar progress code

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
