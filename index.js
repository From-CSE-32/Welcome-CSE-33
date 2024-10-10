const quotes = [
  "deko jeta balo mone koro",
  "don banaiso vai seiii hoise",
  "You think you're straight, but so is spaghetti, until it is wet.",
];

const typedText = document.getElementById("typed-text");
let text = `❝ ${quotes[Math.floor(Math.random() * quotes.length)]}`;
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
