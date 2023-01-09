

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

  // Multi-action btn 
  //enable all menu btn

  document.querySelectorAll(".mab").forEach(multiAction => {
    const menuButton = multiAction.querySelector(".mab-btn-menu");
    const list = multiAction.querySelector(".mab-list");

   menuButton.addEventListener("click", () => {
    list.classList.toggle("mab-list--visible");

   });
  });

  //Hide all lists when clicking elsewhere on the page

  document.addEventListener("click",(e) => {
    const keepOpen = (e)
      e.target.matches(".mab-list")
     || e.target.matches(".mab-btn-menu")
     || e.target.closest(".mab-btn-menu")
    ;


    if(keepOpnen) return;
    document.querySelectorAll(".mab-list").forEach(list => {
      list.classList.remove("mab-list--visible");
    });
  });

  document.querySelectorAll('[href^="#"]').forEach(menuButton => {
    menuButton.addEventListener('click', function (event) {
      event.preventDefault();
      // esto es un id
      const sectionId = this.getAttribute('href');
      const sectionTopPosition = document.querySelector(sectionId).offsetTop;
      window.scroll({
        top: sectionTopPosition,
        behavior: 'smooth'
      });
      
    });
  });

  document.querySelector('#contact-us-form').addEventListener('submit', function(event){
    event.preventDefault();
    const successMessage = document.querySelector('#contact-us-form .form-success');
    successMessage.classList.remove('hidden');
  })


























