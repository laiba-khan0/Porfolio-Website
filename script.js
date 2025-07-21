// Word animation
let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);


// Read More toggle
const readMoreBtn = document.getElementById('read-more-btn');
const moreText = document.getElementById('more-text');

readMoreBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";
        readMoreBtn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        readMoreBtn.textContent = "Read More";
    }
});

// Skills Circles
const circles = document.querySelectorAll('.circle');

circles.forEach(elem => {
    let dots = elem.getAttribute("data-dots");
    let marked = elem.getAttribute("data-percent");
    let percent = Math.floor(dots * marked / 100);
    let points = "";
    let rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        if (i < percent) {
            points += `<div class="points marked" style="--i:${i}; --rot:${rotate}deg"></div>`;
        } else {
            points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }
    }
    elem.innerHTML = points;
});

// MixItUp filtering
var mixer = mixitup('.gallery');

// Toggle active class on filter buttons
const filterBtns = document.querySelectorAll(".filter-buttons .btn");
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

// Active menu link on scroll
let menuLi = document.querySelectorAll('header ul li a');
let sections = document.querySelectorAll('section');

function activeMenu() {
    let len = sections.length;
    while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
    menuLi.forEach(sec => sec.classList.remove("active"));
    if (menuLi[len]) menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// Sticky navbar
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50);
});

// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

window.addEventListener("scroll", () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
});

// parallax //
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});  

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

 const toggle = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");
    const body = document.body;

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      body.className = savedTheme;
      icon.className = savedTheme === "light-theme" ? "bx bx-moon" : "bx bx-sun";
    }

    toggle.onclick = () => {
      body.classList.toggle("light-theme");
      body.classList.toggle("dark-theme");

      if (body.classList.contains("light-theme")) {
        icon.className = "bx bx-moon";
        localStorage.setItem("theme", "light-theme");
      } else {
        icon.className = "bx bx-sun";
        localStorage.setItem("theme", "dark-theme");
      }
    };
    
    const toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});
