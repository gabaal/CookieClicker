// Create constant vairibles for the DOM elements
const cookie = document.getElementById("cookie");
const cookieCountDisplay = document.getElementById("cookieCount");
const cpsDisplay = document.getElementById("cpsDisplay");
const resetButton = document.getElementById("resetButton");
const upgrade1Button = document.getElementById("upgrade1");
const upgrade2Button = document.getElementById("upgrade2");
const upgrade3Button = document.getElementById("upgrade3");
const upgrade4Button = document.getElementById("upgrade4");
const upgrade5Button = document.getElementById("upgrade5");
const messageContainer = document.getElementById("messageContainer");

// Create variables
let cookieCount = parseInt(localStorage.getItem("cookieCount")) || 0;
let cookiesPerSecond = parseInt(localStorage.getItem("cookiesPerSecond")) || 0;
let upgrade1Count = parseInt(localStorage.getItem("upgrade1Count")) || 0;
let upgrade2Count = parseInt(localStorage.getItem("upgrade2Count")) || 0;
let upgrade3Count = parseInt(localStorage.getItem("upgrade3Count")) || 0;
let upgrade4Count = parseInt(localStorage.getItem("upgrade4Count")) || 0;
let upgrade5Count = parseInt(localStorage.getItem("upgrade5Count")) || 0;

let upgrade1Cost = 1;
let upgrade2Cost = 10;
let upgrade3Cost = 100;
let upgrade4Cost = 1000;
let upgrade5Cost = 10000;

cookieCountDisplay.textContent = `Cookies: ${cookieCount}`;
cpsDisplay.textContent = `CPS: ${cookiesPerSecond}`;

upgrade1Button.textContent = `Grandma + 1 CPS. Costs 1 cookie (${upgrade1Count} used)`;
upgrade2Button.textContent = `Oven + 10 CPS Cost: ${upgrade2Cost} cookies (${upgrade2Count} used)`;
upgrade3Button.textContent = `Factory + 100 CPS Costs 10 cookies (${upgrade3Count} used)`;
upgrade4Button.textContent = `Mine + 1000 CPS Costs 100 cookies (${upgrade4Count} used)`;
upgrade5Button.textContent = `Mine + 10000 CPS Costs 1000 cookies (${upgrade5Count} used)`;

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
  upgrade1Count = 0;
  upgrade2Count = 0;
  upgrade3Count = 0;
  upgrade4Count = 0;
  upgrade5Count = 0;

  updateCookieCount();
});

upgrade1Button.addEventListener("click", () => {
  if (cookieCount >= upgrade1Cost) {
    cookieCount -= upgrade1Cost;
    cookiesPerSecond += 1;
    upgrade1Count++;
    //upgrade1Cost++;
    updateCookieCount();
  } else {
    showMessage("Not enough cookies to purchase Upgrade 1!");
  }
});

upgrade2Button.addEventListener("click", () => {
  if (cookieCount >= upgrade2Cost) {
    cookieCount -= upgrade2Cost;
    cookiesPerSecond += 10;
    upgrade2Count++;
    //upgrade2Cost++;
    updateCookieCount();
  } else {
    showMessage("Not enough cookies to purchase Upgrade 2!");
  }
});

upgrade3Button.addEventListener("click", () => {
  if (cookieCount >= upgrade3Cost) {
    cookieCount -= upgrade3Cost;
    cookiesPerSecond += 100;
    upgrade3Count++;
    //upgrade3Cost++;
    updateCookieCount();
  } else {
    showMessage("Not enough cookies to purchase Upgrade 3!");
  }
});

upgrade4Button.addEventListener("click", () => {
  if (cookieCount >= upgrade4Cost) {
    cookieCount -= upgrade4Cost;
    cookiesPerSecond += 1000;
    upgrade4Count++;
    //upgrade4Cost++;
    updateCookieCount();
  } else {
    showMessage("Not enough cookies to purchase Upgrade 4!");
  }
});

upgrade5Button.addEventListener("click", () => {
  if (cookieCount >= upgrade5Cost) {
    cookieCount -= upgrade5Cost;
    cookiesPerSecond += 10000;
    upgrade5Count++;
    //upgrade5Cost++;
    updateCookieCount();
  } else {
    showMessage("Not enough cookies to purchase Upgrade 5!");
  }
});

setInterval(() => {
  cookieCount += cookiesPerSecond;
  updateCookieCount();
}, 1000);

function updateCookieCount() {
  cookieCountDisplay.textContent = `Cookies: ${cookieCount}`;
  cpsDisplay.textContent = `Clicks Per Second: ${cookiesPerSecond}`;
  localStorage.setItem("cookieCount", cookieCount);
  localStorage.setItem("cookiesPerSecond", cookiesPerSecond);

  upgrade1Button.textContent = `Grandma + 1 CPS. Costs 1 cookie (${upgrade1Count} used)`;
  upgrade2Button.textContent = `Oven + 10 CPS Costs 10 cookies (${upgrade2Count} used)`;
  upgrade3Button.textContent = `Factory + 100 CPS Costs 100 cookies (${upgrade3Count} used)`;
  upgrade4Button.textContent = `Mine + 1000 CPS Costs 1000 cookies (${upgrade4Count} used)`;
  upgrade5Button.textContent = `Bank + 10000 CPS Costs 10000 cookies (${upgrade5Count} used)`;

  localStorage.setItem("upgrade1Count", upgrade1Count);
  localStorage.setItem("upgrade2Count", upgrade2Count);
  localStorage.setItem("upgrade3Count", upgrade3Count);
  localStorage.setItem("upgrade4Count", upgrade4Count);
  localStorage.setItem("upgrade5Count", upgrade5Count);
}

function showMessage(message) {
  messageContainer.textContent = message;
  messageContainer.style.display = "block";

  setTimeout(() => {
    messageContainer.style.display = "none";
  }, 3000);
}
