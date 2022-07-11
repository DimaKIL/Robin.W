(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileMenufRef = document.querySelector("[data-menuf]");
    const mobileMenurRef = document.querySelector("[data-menur]");
    const mobileMenueRef = document.querySelector("[data-menue]");
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
  
      mobileMenuRef.classList.toggle("is-open");
      mobileMenufRef.classList.toggle("is-open");
      mobileMenurRef.classList.toggle("is-open");
      mobileMenueRef.classList.toggle("is-open");
    });
  })();