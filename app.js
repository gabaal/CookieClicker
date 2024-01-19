// Create constant variables for the DOM elements
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
let state = getStateFromLocalStorage(); //the game variables stored in local storage, used to save and retrieve game data

//Set inital button content. Used this method so i can update how many times the upgrade has been purchased
cookieCountDisplay.textContent = `Cookies: ${state.cookieCount}`;
cpsDisplay.textContent = `CPS: ${state.cookiesPerSecond}`;

upgrade1Button.textContent = `Grandma + 1 CPS. Costs 1 cookie (${state.upgrade1Count} used)`;
upgrade2Button.textContent = `Oven + 10 CPS Costs 10 cookies (${state.upgrade2Count} used)`;
upgrade3Button.textContent = `Factory + 100 CPS Costs 100 cookies (${state.upgrade3Count} used)`;
upgrade4Button.textContent = `Mine + 1000 CPS Costs 1000 cookies (${state.upgrade4Count} used)`;
upgrade5Button.textContent = `Bank + 10000 CPS Costs 10000 cookies (${state.upgrade5Count} used)`;

cookie.addEventListener("click", () => {
  cookie.classList.add("cookie-clicked");
  setTimeout(() => {
    cookie.classList.remove("cookie-clicked");
  }, 300);

  state.cookieCount++;
  updateCookieCount();
});

resetButton.addEventListener("click", () => {
  const isConfirm = confirm("Are you sure you want to reset the game?");
  if (isConfirm) {
    state = {
      cookieCount: 0,
      cookiesPerSecond: 1,
      upgrade1Count: 0,
      upgrade2Count: 0,
      upgrade3Count: 0,
      upgrade4Count: 0,
      upgrade5Count: 0,
    };

    updateCookieCount();
  }
});

//Upgrade buttons functionality
upgrade1Button.addEventListener("click", () => {
  if (state.cookieCount >= 1) {
    state.cookieCount -= 1;
    state.cookiesPerSecond += 1;
    state.upgrade1Count++;
    updateCookieCount();
  } else {
    showMessage("Not enough cookies to purchase Upgrade 1!");
  }
});

upgrade2Button.addEventListener("click", () => {
  if (state.cookieCount >= 10) {
    state.cookieCount -= 10;
    state.cookiesPerSecond += 10;
    state.upgrade2Count++;
    updateCookieCount();
  } else {
    showMessage("Not enough cookies to purchase Upgrade 2!");
  }
});

upgrade3Button.addEventListener("click", () => {
  if (state.cookieCount >= 100) {
    state.cookieCount -= 100;
    state.cookiesPerSecond += 100;
    state.upgrade3Count++;
    updateCookieCount();
  } else {
    showMessage("Not enough cookies to purchase Upgrade 3!");
  }
});

upgrade4Button.addEventListener("click", () => {
  if (state.cookieCount >= 1000) {
    state.cookieCount -= 1000;
    state.cookiesPerSecond += 1000;
    state.upgrade4Count++;
    updateCookieCount();
  } else {
    showMessage("Not enough cookies to purchase Upgrade 4!");
  }
});

upgrade5Button.addEventListener("click", () => {
  if (state.cookieCount >= 10000) {
    state.cookieCount -= 10000;
    state.cookiesPerSecond += 10000;
    state.upgrade5Count++;
    updateCookieCount();
  } else {
    showMessage("Not enough cookies to purchase Upgrade 5!");
  }
});

setInterval(() => {
  state.cookieCount += state.cookiesPerSecond;
  updateCookieCount();
}, 1000);

function updateCookieCount() {
  cookieCountDisplay.textContent = `Cookies: ${state.cookieCount}`;
  cpsDisplay.textContent = `Clicks Per Second: ${state.cookiesPerSecond}`;
  saveStateToLocalStorage();
  upgrade1Button.textContent = `Grandma + 1 CPS. Costs 1 cookie (${state.upgrade1Count} used)`;
  upgrade2Button.textContent = `Oven + 10 CPS Costs 10 cookies (${state.upgrade2Count} used)`;
  upgrade3Button.textContent = `Factory + 100 CPS Costs 100 cookies (${state.upgrade3Count} used)`;
  upgrade4Button.textContent = `Mine + 1000 CPS Costs 1000 cookies (${state.upgrade4Count} used)`;
  upgrade5Button.textContent = `Bank + 10000 CPS Costs 10000 cookies (${state.upgrade5Count} used)`;
}
//Show the hiiden DIV where messages are displayed
function showMessage(message) {
  messageContainer.textContent = message;
  messageContainer.style.display = "block";
  setTimeout(() => {
    messageContainer.style.display = "none";
  }, 3000);
}

function getStateFromLocalStorage() {
  const savedState = localStorage.getItem("cookieClickerState");
  return savedState ? JSON.parse(savedState) : getDefaultState();
}

function saveStateToLocalStorage() {
  localStorage.setItem("cookieClickerState", JSON.stringify(state));
}

function getDefaultState() {
  return {
    cookieCount: 0,
    cookiesPerSecond: 1,
    upgrade1Count: 0,
    upgrade2Count: 0,
    upgrade3Count: 0,
    upgrade4Count: 0,
    upgrade5Count: 0,
  };
}
