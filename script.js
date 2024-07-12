let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
      });
      document.querySelector(`header nav a[href="#${id}"]`).classList.add("active");
    }
  });
};


menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

menuIcon.addEventListener("mouseenter", () => {
  menuIcon.classList.add("bx-x");
  navbar.classList.add("active");
});

document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target) && event.target !== menuIcon) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.star');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const value = parseInt(star.getAttribute('data-value'));
      const parent = star.parentNode;

      const siblings = parent.querySelectorAll('.star');
      siblings.forEach(sibling => {
        sibling.classList.remove('active');
      });

      for (let i = 0; i < value; i++) {
        siblings[i].classList.add('active');
      }
    });
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('language-toggle');
  if (checkbox) {
      // Verifica se está na página index-pt.html e marca o checkbox
      if (window.location.pathname === '/index-pt.html') {
          checkbox.checked = true;
      } else {
          checkbox.checked = false;
      }
  }
});

const checkbox = document.getElementById('language-toggle');

checkbox.addEventListener('change', function() {
    const isChecked = this.checked;
    const currentPath = window.location.pathname;
    let targetPath = isChecked ? '/index-pt.html' : '/index.html';

    // Verifica se o redirecionamento é necessário apenas se não estiver na página de destino
    if ((isChecked && !currentPath.includes('/index-pt.html')) || (!isChecked && !currentPath.includes('/index.html'))) {
        window.location.href = targetPath;
    }
});

const themeToggle = document.getElementById('theme-toggle');

// Adiciona um ouvinte de evento para detectar mudanças no estado do switch
themeToggle.addEventListener('change', function() {
  // Seleciona o elemento root do documento
  const root = document.documentElement;
  
  // Se o switch estiver marcado, adiciona a classe .light-theme ao root
  if (this.checked) {
    root.classList.add('light-theme');
  } else {
    // Se o switch não estiver marcado, remove a classe .light-theme do root
    root.classList.remove('light-theme');
  }
});