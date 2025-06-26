function playMusic() {
  const music = document.getElementById("romanticMusic");
  music.play();
  alert("🎶 Musik romantis diputar! Ciee luu senyum-senyum ya...");
}

function showPopup() {
  document.getElementById("popup").style.display = "block";
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function sendChat() {
  const input = document.getElementById("chatInput");
  const chatBox = document.getElementById("chatBox");
  const message = input.value.trim();
  if (message === "") return;

  const userMsg = document.createElement("p");
  userMsg.textContent = "Kamu: " + message;
  chatBox.appendChild(userMsg);

  // Simulasi balasan lucu dari "AI pacar"
  const reply = document.createElement("p");
  reply.style.color = "#ff3399";

  const responses = [
    "Aww kamu so sange wkwk 😘",
    "Aku juga kangen kamu banget!",
    "Jangan lupa makan yaa~",
    "Ciee ngaku lu dep~ ❤️",
    "Kalau kamu lucu, aku lebih lucu 😝",
  ];
  const randomResponse =
    responses[Math.floor(Math.random() * responses.length)];
  reply.textContent = "gatau: " + randomResponse;

  setTimeout(() => {
    chatBox.appendChild(reply);
  }, 1000);

  input.value = "";
}
