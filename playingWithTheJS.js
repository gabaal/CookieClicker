upgrade1Button.addEventListener("click", () =>
  handleUpgrade(gameData, "upgrade1")
);
upgrade2Button.addEventListener("click", () =>
  handleUpgrade(gameData, "upgrade2")
);
upgrade3Button.addEventListener("click", () =>
  handleUpgrade(gameData, "upgrade3")
);
upgrade4Button.addEventListener("click", () =>
  handleUpgrade(gameData, "upgrade4")
);
upgrade5Button.addEventListener("click", () =>
  handleUpgrade(gameData, "upgrade5")
);

setInterval(() => {
  gameData.cookieCount += gameData.cookiesPerSecond;
  updateCookieCount();
}, 1000);

function handleUpgrade(gameData, upgradeKey) {
  const upgrade = gameData.upgrades[upgradeKey];
  if (gameData.cookieCount >= upgrade.cost) {
    gameData.cookieCount -= upgrade.cost;
    gameData.cookiesPerSecond += getUpgradeCPS(upgradeKey);
    upgrade.count++;
    upgrade.cost *= 2;
    updateCookieCount();
  } else {
    showMessage(
      `Not enough cookies to purchase Upgrade ${upgradeKey.charAt(
        upgradeKey.length - 1
      )}!`
    );
  }
}

function getUpgradeCPS(upgradeKey) {
  const regex = /\+(\d+)/;
  const match = upgradeKey.match(regex);
  return match ? parseInt(match[1]) : 0;
}

function resetUpgrades(upgrades) {
  for (const key in upgrades) {
    upgrades[key].count = 0;
    upgrades[key].cost = key.endsWith("1") ? 1 : upgrades[key].cost; // Reset the cost of upgrade1
  }
}

function updateCookieCount() {
  cookieCountDisplay.textContent = `Cookies: ${gameData.cookieCount}`;
  cpsDisplay.textContent = `Clicks per second: ${gameData.cookiesPerSecond}`;
  localStorage.setItem("gameData", JSON.stringify(gameData));
  updateDisplay();
}

function updateDisplay() {
  upgrade1Button.textContent = `Grandma + 1 CPS. Cost: ${gameData.upgrades.upgrade1.cost} cookies (${gameData.upgrades.upgrade1.count} used)`;
  upgrade2Button.textContent = `Oven + 10 CPS Cost: ${gameData.upgrades.upgrade2.cost} cookies (${gameData.upgrades.upgrade2.count} used)`;
  upgrade3Button.textContent = `Factory + 100 CPS Cost: ${gameData.upgrades.upgrade3.cost} cookies (${gameData.upgrades.upgrade3.count} used)`;
  upgrade4Button.textContent = `Mine + 1000 CPS Cost: ${gameData.upgrades.upgrade4.cost} cookies (${gameData.upgrades.upgrade4.count} used)`;
  upgrade5Button.textContent = `Bank + 10000 CPS Cost: ${gameData.upgrades.upgrade5.cost} cookies (${gameData.upgrades.upgrade5.count} used)`;
}

function showMessage(message) {
  messageContainer.textContent = message;
  messageContainer.style.display = "block";

  setTimeout(() => {
    messageContainer.style.display = "none";
  }, 3000);
}
