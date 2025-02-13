document
  .getElementById("main-menu-button")
  .addEventListener("click", function () {
    document.querySelector("header").classList.toggle("menu-active");
    document.querySelector("header").classList.add("active");
    if (document.querySelector("header").classList.contains("menu-active")) {
      document.querySelector("body").classList.add("menu-active");
    } else {
      document.querySelector("body").classList.remove("menu-active");
    }
  });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("main-menu-button").click();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Função para observar as seções e adicionar/remover a classe "active"
function observeSections() {
  const sections = document.querySelectorAll("section"); // Seleciona todas as seções
  const navLinks = document.querySelectorAll('a[href^="#"]'); // Seleciona todos os links de navegação

  const options = {
    root: null, // Observa a viewport
    rootMargin: "0px",
    threshold: 0.5, // Define que a seção deve estar pelo menos 50% visível para ser considerada ativa
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove a classe "active" de todos os links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Adiciona a classe "active" ao link correspondente à seção visível
        const id = entry.target.getAttribute("id");
        const correspondingLink = document.querySelector(`a[href="#${id}"]`);
        if (correspondingLink) {
          correspondingLink.classList.add("active");
        }
      }
    });
  }, options);

  // Observa cada seção
  sections.forEach((section) => observer.observe(section));
}

// Chama a função para começar a observar as seções
observeSections();

window.addEventListener("scroll", function () {
  const scrollDownElement = document.getElementById("scroll-down-home");
  if (window.scrollY === 0) {
    scrollDownElement.classList.remove("hidden"); // Mostra o elemento
  } else {
    scrollDownElement.classList.add("hidden"); // Esconde o elemento
  }
});
