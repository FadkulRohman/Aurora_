const texts = [
    "Aku ga tau sejak kapan semua ini mulai...",
    "Tapi pelan-pelan, semuanya berubah jadi berarti...",
    "Hal kecil tentang kamu jadi hal yang aku ingat...",
    "Tanpa sadar, kamu jadi bagian dari hariku...",
    "Dan jujur saja...",
    "Aku sayang kamu 💜"
];

let index = 0;

function gombal() {
    if (index < texts.length) {
        const msg = document.getElementById("message");
        msg.style.opacity = 1;
        msg.innerText = texts[index];
        index++;
    }
}

// Dark mode
function toggleMode() {
    document.body.classList.toggle("dark");
}

// Countdown (opsional, bisa ganti tanggal kenal)
const targetDate = new Date("2024-01-01").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const gap = now - targetDate;

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText =
        "Sudah " + days + " hari sejak semuanya terasa berbeda 💜";
}, 1000);

// Love jatuh
const hearts = document.querySelector(".hearts");

for (let i = 0; i < 30; i++) {
    let span = document.createElement("span");
    span.innerHTML = "💖";
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = (Math.random() * 3 + 2) + "s";
    hearts.appendChild(span);
          }
