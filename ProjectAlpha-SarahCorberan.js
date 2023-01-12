
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

  document.addEventListener("click",e => {
    const keepOpen = (
        e.target.matches(".mab-list")
      || e.target.matches(".mab-btn-menu")
      || e.target.closest(".mab-btn-menu")
    );
    
    if (keepOpnen) return;
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

 


























