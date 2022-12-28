//https://www.w3schools.com/howto/howto_js_collapsible.asp

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  const inputs = document.querySelectorAll(".input");

  function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add ("focus");
  }

  function blurFunc(){
    let parent = this.parentNode;
    if(this.value ==""){

      parent.classList.remove ("focus");
    }
  }

  inputs.forEach(input=> {
    input.addEventListener("focus",focusFunc)
    input.addEventListener("blur",blurFunc)
  });


























