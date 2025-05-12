function addNote() {
    const input = document.getElementById("note-input");
    const note = input.value.trim();
  
    if (note) {
      const list = document.getElementById("note-list");
      const li = document.createElement("li");
      li.textContent = note;
      list.appendChild(li);
  
      saveNote(note);
      input.value = "";
    }
  }
  
  function saveNote(note) {
    let notes = JSON.parse(localStorage.getItem("notes") || "[]");
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  
  function loadNotes() {
    let notes = JSON.parse(localStorage.getItem("notes") || "[]");
    const list = document.getElementById("note-list");
    notes.forEach(note => {
      const li = document.createElement("li");
      li.textContent = note;
      list.appendChild(li);
    });
  }
  
  function revealSecret() {
    document.getElementById("secret-message").style.display = "block";
  }
  
  function calculateDaysTogether() {
    const firstDate = new Date("2025-02-01"); // 📝 تاریخ آشنایی رو اینجا وارد کن
    const today = new Date();
    const diffTime = today - firstDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const counterElement = document.getElementById("days-counter");
    counterElement.innerHTML = `ما ${diffDays} روزه کنار همیم 💖`;
  }
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createFloatingHeart, 800);
  
  window.onload = function () {
    loadNotes();
    calculateDaysTogether();
  };
window.addEventListener('click', () => {
  document.getElementById("bg-music").play().catch(() => {});
}, { once: true });

  
