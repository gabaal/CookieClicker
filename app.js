const cookie = document.getElementById("cookie");
const cookieCountDisplay = document.getElementById("cookieCount");
const cpsDisplay = document.getElementById("cpsDisplay");
const resetButton = document.getElementById("resetButton");
const upgrade1Button = document.getElementById("upgrade1");
const upgrade2Button = document.getElementById("upgrade2");
const upgrade3Button = document.getElementById("upgrade3");

let cookieCount = parseInt(localStorage.getItem("cookieCount")) || 0;
let cookiesPerSecond = parseInt(localStorage.getItem("cookiesPerSecond")) || 1;

let upgrade1Cost = 10;
let upgrade2Cost = 25;
let upgrade3Cost = 50;

cookieCountDisplay.textContent = `Cookies: ${cookieCount}`;
cpsDisplay.textContent = `CPS: ${cookiesPerSecond}`;

cookie.addEventListener("click", () => {
  cookie.classList.add("cookie-clicked");
  setTimeout(() => {
    cookie.classList.remove("cookie-clicked");
  }, 300);
  cookieCount++;
  updateCookieCount();
});

resetButton.addEventListener("click", () => {
  cookieCount = 0;
  cookiesPerSecond = 1;
  updateCookieCount();
});

function showMessage(message) {
  messageContainer.textContent = message;
  messageContainer.style.display = "block";
  setTimeout(() => {
    messageContainer.style.display = "none";
  }, 3000);
}

upgrade1Button.addEventListener("click", () => {
  if (cookieCount >= upgrade1Cost) {
    cookieCount -= upgrade1Cost;
    cookiesPerSecond += 10;
    upgrade1Cost *= 2;
    updateCookieCount();
  } else {
    showMessage("Not enough cookies to purchase Grandma!");
  }
});

upgrade2Button.addEventListener("click", () => {
  if (cookieCount >= upgrade2Cost) {
    cookieCount -= upgrade2Cost;
    cookiesPerSecond += 100;
    upgrade2Cost *= 2;
    updateCookieCount();
  } else {
    showMessage("Not enough cookies to purchase a oven!");
  }
});

upgrade3Button.addEventListener("click", () => {
  if (cookieCount >= upgrade3Cost) {
    cookieCount -= upgrade3Cost;
    cookiesPerSecond += 1000;
    upgrade3Cost *= 2;
    updateCookieCount();
  } else {
    showMessage("Not enough cookies to a factory!");
  }
});

setInterval(() => {
  cookieCount += cookiesPerSecond;
  updateCookieCount();
}, 1000);

function updateCookieCount() {
  cookieCountDisplay.textContent = `Cookies: ${cookieCount}`;
  localStorage.setItem("cookieCount", cookieCount);
  localStorage.setItem("cookiesPerSecond", cookiesPerSecond);
  cpsDisplay.textContent = `CPS: ${cookiesPerSecond}`;
  upgrade1Button.textContent = `Grandma + 10 CPS Cost: ${upgrade1Cost} cookies`;
  upgrade2Button.textContent = `Oven + 100 CPS Cost: ${upgrade2Cost} cookies`;
  upgrade3Button.textContent = `Factory + 1000 CPS Cost: ${upgrade3Cost} cookies`;
}
