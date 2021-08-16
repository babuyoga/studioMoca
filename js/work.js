var prevScrollpos = window.pageYOffset;



document.getElementById("myTopnav").style.top = "0";
document.getElementById("brand_Text").classList.remove("invisible");
var j;
const allDivs = document.querySelectorAll(".vid");
allDivs.item(0).classList.add("vid_scroll");
console.log(allDivs.item(0).querySelector('video').play());
var i;
for (i = 0; i < allDivs.length; i++) {
  console.log(i, allDivs.item(i));
}

$("video").hover(function() {
  $(".desc_text_large").addClass("desc_visible");
}, function() {
  $(".desc_text_large").removeClass("desc_visible");
});

function bodyload() {
  for (i = 1; i < allDivs.length; i++) {
    loadvid(i);
  }
}


function loadvid(y) {
  x = y + 1;
  allDivs.item(y).querySelector('video').src = "resources/videos/" + x + ".webm";
}



function scrollEffect(x) {
console.log(x);

  if (x > 0) {
    allDivs.item(x - 1).classList.remove("vid_scroll");
    allDivs.item(x - 1).querySelector('video').pause();
  }


  allDivs.item(x).classList.add("vid_scroll");
  // allDivs.item(x).querySelector('video').src = "resources/videos/"+(x+1)+".webm";
  allDivs.item(x).querySelector('video').play();

  if (x < allDivs.length) {
    allDivs.item(x + 1).classList.remove("vid_scroll");
    allDivs.item(x + 1).querySelector('video').pause();
  }

}





function myFunction(x) {
  if (x.matches) { // If media query matches
    console.log("small screen");

    window.onscroll = function() {
      myFunctionmob()
    };



    function myFunctionmob() {
      // navbar hide code
      var currentScrollPos = window.pageYOffset;
 console.log(currentScrollPos);
 console.log("onmob");

      //navbar code end

      var flag1 = 0;
      var flag2 = 0;

      if ((currentScrollPos > 0) && (currentScrollPos < 300)) {
        scrollEffect(0);
      } else if ((currentScrollPos > 224) && (currentScrollPos < 895)) {
        scrollEffect(1);
      } else if ((currentScrollPos > 895) && (currentScrollPos < 1566)) {
        scrollEffect(2);
      } else if ((currentScrollPos > 1566) && (currentScrollPos < 2237)) {
        scrollEffect(3);
      } else if ((currentScrollPos > 2237) && (currentScrollPos < 2850)) {
        scrollEffect(4);
      } else if ((currentScrollPos > 2850) && (currentScrollPos < 3580)) {
        scrollEffect(5);
      } else if ((currentScrollPos > 3580) && (currentScrollPos < 4251)) {
        scrollEffect(6);
      } else if ((currentScrollPos > 4251) && (currentScrollPos < 4699)) {
        scrollEffect(7);
      } else if ((currentScrollPos > 4699) && (currentScrollPos < 5370)) {
        scrollEffect(8);
      } else if ((currentScrollPos > 5370) && (currentScrollPos < 6041)) {
        scrollEffect(9);
      } else if ((currentScrollPos > 6041) && (currentScrollPos < 6712)) {
        scrollEffect(10);
      } else if ((currentScrollPos > 6712) && (currentScrollPos < 7384)) {
        scrollEffect(11);
      } else if ((currentScrollPos >7384) && (currentScrollPos < 8055)) {
        scrollEffect(12);
      } else if ((currentScrollPos > 8055) && (currentScrollPos < 8726)) {
        scrollEffect(13);
      } else if ((currentScrollPos > 8726) && (currentScrollPos < 9397)) {
        scrollEffect(14);
      } else if ((currentScrollPos > 9397) && (currentScrollPos < 10068)) {
        scrollEffect(15);
      } else if ((currentScrollPos > 10068) && (currentScrollPos < 10650)) {
        scrollEffect(16);
      } else if ((currentScrollPos > 10650) && (currentScrollPos < 11289)) {
        scrollEffect(17);
      } else if ((currentScrollPos > 11289) && (currentScrollPos < 11905)) {
        scrollEffect(18);
      } else if ((currentScrollPos > 11905) && (currentScrollPos < 12561)) {
        scrollEffect(19);
      } else if ((currentScrollPos > 12561) && (currentScrollPos < 13190)) {
        scrollEffect(20);
      } else if ((currentScrollPos > 13190) && (currentScrollPos < 13898)) {
        scrollEffect(21);
      } else if ((currentScrollPos > 13898) && (currentScrollPos < 14557)) {
        scrollEffect(22);
      } else if ((currentScrollPos > 14557) && (currentScrollPos < 14987)) {
        scrollEffect(23);
      } else if ((currentScrollPos > 14353) && (currentScrollPos < 14950)) {
        scrollEffect(24);
      } else if ((currentScrollPos > 14950)) {
        scrollEffect(25);
      } else if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        alert("bottom!");
      }

      // scroll bar progress code
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
      //scrollbar progress code end
      prevScrollpos = currentScrollPos;

    }







  } else {
    window.onscroll = function() {
      myFunctiondesk()
    };

    function myFunctiondesk() {
      // navbar hide code
      var currentScrollPos = window.pageYOffset;
      // console.log(currentScrollPos);
      if (prevScrollpos < currentScrollPos) {
        document.getElementById("myTopnav").style.top = "-13vh";
        document.getElementById("nav_cont").style.top = "13vh";
        document.getElementById("brand_Text").style.transform = "scale(0.4)";
        document.getElementById("brand_Text").style.opacity = "0%";

        setTimeout(function() {
          document.getElementById("brand_logo").classList.remove("invisible");
        }, 400);

        // console.log(currentScrollPos);
      } else {
        // document.getElementById("myTopnav_2").style.opacity = "0%";
        document.getElementById("myTopnav").style.top = "0";
        document.getElementById("nav_cont").style.top = "6.5vh";
        document.getElementById("brand_Text").style.transform = "scale(1)";
        document.getElementById("brand_logo").classList.add("invisible");
        document.getElementById("brand_Text").style.opacity = "100%";
        // console.log(currentScrollPos);
      }
      //navbar code end

      var flag1 = 0;
      var flag2 = 0;

      if ((currentScrollPos > 0) && (currentScrollPos < 200)) {
        scrollEffect(0);

      } else if ((currentScrollPos > 200) && (currentScrollPos < 800)) {
        scrollEffect(1);
      } else if ((currentScrollPos > 800) && (currentScrollPos < 1200)) {
        scrollEffect(2);
      } else if ((currentScrollPos > 800) && (currentScrollPos < 1600)) {
        scrollEffect(3);
      } else if ((currentScrollPos > 1600) && (currentScrollPos < 2200)) {
        scrollEffect(4);
      } else if ((currentScrollPos > 2200) && (currentScrollPos < 2800)) {
        scrollEffect(5);
      } else if ((currentScrollPos > 2800) && (currentScrollPos < 3400)) {
        scrollEffect(6);
      } else if ((currentScrollPos > 3400) && (currentScrollPos < 3900)) {
        scrollEffect(7);
      } else if ((currentScrollPos > 3900) && (currentScrollPos < 4430)) {
        scrollEffect(8);
      } else if ((currentScrollPos > 4430) && (currentScrollPos < 4830)) {
        scrollEffect(9);
      } else if ((currentScrollPos > 4830) && (currentScrollPos < 5330)) {
        scrollEffect(10);
      } else if ((currentScrollPos > 5330) && (currentScrollPos < 6000)) {
        scrollEffect(11);
      } else if ((currentScrollPos > 6000) && (currentScrollPos < 6830)) {
        scrollEffect(12);
      } else if ((currentScrollPos > 6830) && (currentScrollPos < 7330)) {
        scrollEffect(13);
      } else if ((currentScrollPos > 7330) && (currentScrollPos < 7830)) {
        scrollEffect(14);
      } else if ((currentScrollPos > 7830) && (currentScrollPos < 8400)) {
        scrollEffect(15);
      } else if ((currentScrollPos > 8400) && (currentScrollPos < 8830)) {
        scrollEffect(16);
      } else if ((currentScrollPos > 8830) && (currentScrollPos < 9300)) {
        scrollEffect(17);
      } else if ((currentScrollPos > 9300) && (currentScrollPos < 9930)) {
        scrollEffect(18);
      } else if ((currentScrollPos > 9930) && (currentScrollPos < 10500)) {
        scrollEffect(19);
      } else if ((currentScrollPos > 10500) && (currentScrollPos < 11000)) {
        scrollEffect(20);
      } else if ((currentScrollPos > 11000) && (currentScrollPos < 11600)) {
        scrollEffect(21);
      } else if ((currentScrollPos > 11600) && (currentScrollPos < 11800)) {
        scrollEffect(22);
      } else if ((currentScrollPos > 11800) && (currentScrollPos < 12300)) {
        scrollEffect(23);
      } else if ((currentScrollPos > 12300) && (currentScrollPos < 12900)) {
        scrollEffect(24);
      } else if ((currentScrollPos > 12900) && (currentScrollPos < 13500)) {
        scrollEffect(25);
      } else if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        alert("bottom!");
      }

      // scroll bar progress code
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
      //scrollbar progress code end
      prevScrollpos = currentScrollPos;

    }




  } //end of else
}

var x = window.matchMedia("(max-width: 1000px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
