
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbw0OaRhQqypTTM0z8Z1DyTWZ1IbVBwJG-VHBenHKcod3dAPEghgXmkfvXjCjy8iKyVHhw/exec'
           const form = document.forms['moca-sheet']

           form.addEventListener('submit', e => {
             e.preventDefault()
             fetch(scriptURL, { method: 'POST', body: new FormData(form)})
               .then(response => alert("We gotchu fam. Sit tight!"))
               .catch(error => console.error('Error!', error.message))
           });
