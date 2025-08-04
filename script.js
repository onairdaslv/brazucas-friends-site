
function checkPassword() {
  const pw = document.getElementById("password").value;
  if (pw === "Winners") {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    alert("Senha incorreta!");
  }
}
function showTab(tab) {
  document.querySelectorAll(".tab").forEach(t => t.classList.add("hidden"));
  document.getElementById(tab).classList.remove("hidden");
}
function showPlayerInfo() {
  const select = document.getElementById("player-select");
  const info = document.getElementById("player-info");
  const name = select.value;
  if (name === "joao") {
    info.innerHTML = "<img src='https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png' width='50'><p>Gols: 5<br>Partidas: 10</p>";
  } else if (name === "pedro") {
    info.innerHTML = "<img src='https://www.countryflags.com/wp-content/uploads/portugal-flag-png-large.png' width='50'><p>Gols: 2<br>Partidas: 8</p>";
  } else {
    info.innerHTML = "";
  }
}
function confirmPresence(nome, tipo) {
  fetch(CONFIG.SCRIPT_URL, {
    method: 'POST',
    body: new URLSearchParams({ nome: nome, tipo: tipo })
  });
  alert(nome + " confirmado para " + tipo + "!");
}
