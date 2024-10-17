const quotes = [
  {
    quote: "deko jeta balo mone koro",
    author: "Anonymous",
  }, {
    quote: "You think you're straight, but so is spaghetti, until it is wet.",
    author: "Anonymous",
  }, {
    quote: "হ্যাঁ, আটকায় গেলেই তো শিখতে হবে।",
    author: "Anonymous",
  },
];

const typedText = document.getElementById("typed-text");
let rando = quotes[Math.floor(Math.random() * quotes.length)];
let text = `❝ ${rando.quote} - ${rando.author}`;
console.log(text);
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;
const subsectors = document.querySelectorAll(".subsector");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  subsectors.forEach((subsector) => {
    const revealTop = subsector.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      subsector.classList.add("reveal");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

const toggleDropdown = document.querySelector(".toggler");
const toggleDropdownIcon = document.querySelector(".toggler i");
const toggleDropdownMenu = document.querySelector(".dropdown");

toggleDropdown.onclick = () => {
  toggleDropdownMenu.classList.toggle("close");
  toggleDropdownIcon.classList = toggleDropdownMenu.classList.contains("close") ? "fa-solid fa-bars" : "fa-solid fa-xmark";
}
