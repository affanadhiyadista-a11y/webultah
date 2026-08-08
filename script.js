/* =========================================
   TYPING ANIMATION
========================================= */

const typingElement = document.getElementById("typing");

const words = [
  "Modern Websites",
  "Interactive Websites",
  "Creative Projects",
  "Beautiful Interfaces",
  "Web Experiences"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingAnimation() {

  const currentWord = words[wordIndex];

  if (!deleting) {

    typingElement.textContent =
      currentWord.substring(
        0,
        charIndex + 1
      );

    charIndex++;

    if (charIndex === currentWord.length) {

      deleting = true;

      setTimeout(
        typingAnimation,
        1800
      );

      return;
    }

  } else {

    typingElement.textContent =
      currentWord.substring(
        0,
        charIndex - 1
      );

    charIndex--;

    if (charIndex === 0) {

      deleting = false;

      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(
    typingAnimation,
    deleting ? 50 : 100
  );
}

typingAnimation();


/* =========================================
   MOBILE NAVBAR
========================================= */

const menuBtn =
  document.getElementById("menuBtn");

const nav =
  document.getElementById("nav");

menuBtn.addEventListener(
  "click",
  () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {

      menuBtn.textContent = "✕";

    } else {

      menuBtn.textContent = "☰";

    }

  }
);


/* =========================================
   CLOSE MOBILE MENU
   WHEN LINK IS CLICKED
========================================= */

const navLinks =
  document.querySelectorAll(
    "#nav a"
  );

navLinks.forEach(
  (link) => {

    link.addEventListener(
      "click",
      () => {

        nav.classList.remove(
          "active"
        );

        menuBtn.textContent = "☰";

      }
    );

  }
);


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================================
   PROJECT BUTTONS
========================================= */

const projectButtons =
  document.querySelectorAll(
    ".project-btn"
  );

projectButtons.forEach(
  (button, index) => {

    button.addEventListener(
      "click",
      () => {

        const projectNames = [
          "Space Universe",
          "Ocean Animation",
          "Personal Portfolio"
        ];

        alert(
          `Project: ${projectNames[index]}\n\nProject ini bisa kamu hubungkan dengan halaman atau website project kamu.`
        );

      }
    );

  }
);


/* =========================================
   CREATE EXTRA STARS
========================================= */

const starsContainer =
  document.querySelector(".stars");

function createStars() {

  if (!starsContainer) return;

  const numberOfStars = 80;

  for (
    let i = 0;
    i < numberOfStars;
    i++
  ) {

    const star =
      document.createElement("span");

    star.classList.add(
      "dynamic-star"
    );

    star.style.left =
      Math.random() * 100 + "%";

    star.style.top =
      Math.random() * 100 + "%";

    star.style.animationDelay =
      Math.random() * 5 + "s";

    star.style.animationDuration =
      2 + Math.random() * 4 + "s";

    const size =
      Math.random() * 3 + 1;

    star.style.width =
      size + "px";

    star.style.height =
      size + "px";

    starsContainer.appendChild(
      star
    );
  }
}

createStars();


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
  document.querySelectorAll(
    ".section, .project-card, .skill-card, .about-card, .info-card, .music-card, .contact-card"
  );

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "show"
            );

          }

        }
      );

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(
  (element) => {

    element.classList.add(
      "reveal"
    );

    observer.observe(
      element
    );

  }
);


/* =========================================
   BUTTON RIPPLE EFFECT
========================================= */

const buttons =
  document.querySelectorAll(
    ".btn"
  );

buttons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      function (event) {

        const ripple =
          document.createElement(
            "span"
          );

        ripple.classList.add(
          "ripple"
        );

        const rect =
          button.getBoundingClientRect();

        const x =
          event.clientX -
          rect.left;

        const y =
          event.clientY -
          rect.top;

        ripple.style.left =
          x + "px";

        ripple.style.top =
          y + "px";

        button.appendChild(
          ripple
        );

        setTimeout(
          () => {
            ripple.remove();
          },
          600
        );

      }
    );

  }
);


/* =========================================
   MOUSE PARALLAX PLANET
========================================= */

const heroVisual =
  document.querySelector(
    ".hero-visual"
  );

if (heroVisual) {

  document.addEventListener(
    "mousemove",
    (event) => {

      const x =
        (window.innerWidth / 2 -
          event.clientX) / 40;

      const y =
        (window.innerHeight / 2 -
          event.clientY) / 40;

      heroVisual.style.transform =
        `translate(${x}px, ${y}px)`;

    }
  );

}


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
  "%c🚀 Welcome to Affan's Portfolio!",
  "color:#38bdf8;font-size:18px;font-weight:bold;"
);

console.log(
  "%cBuilt with HTML, CSS & JavaScript",
  "color:#a78bfa;font-size:14px;"
);