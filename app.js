let score = parseInt(localStorage.getItem("cookieScore")) || 0;
let clickRate = parseInt(localStorage.getItem("clickRate")) || 1;
let upgradeCosts = [10, 20];
let upgradeLevels = JSON.parse(localStorage.getItem("upgradeLevels")) || [0, 0];

updateScore();
updateClickRate();

function clickCookie() {
  score += clickRate;
  localStorage.setItem("cookieScore", score);
  updateScore();
}

function updateScore() {
  document.getElementById("score").textContent = "Cookies: " + score;
}

function updateClickRate() {
  document.getElementById("clickRate").textContent =
    "Click Rate: " + clickRate + " per second";
}

function applyTemporaryUpgrade(upgradeIndex) {
  switch (upgradeIndex) {
    case 1:
      // Double Click Rate for 10 seconds
      const originalClickRate = clickRate;
      clickRate *= 2;
      updateClickRate();
      setTimeout(() => {
        clickRate = originalClickRate;
        updateClickRate();
      }, 10000); // Reset to original Click Rate after 10 seconds
      break;
  }
}

setInterval(clickCookie, 1000);

function buyUpgrade(upgradeIndex) {
  const cost = upgradeCosts[upgradeIndex - 1];
  if (score >= cost) {
    score -= cost;
    upgradeLevels[upgradeIndex - 1]++;
    upgradeCosts[upgradeIndex - 1] *= 2;
    localStorage.setItem("cookieScore", score);
    localStorage.setItem("upgradeLevels", JSON.stringify(upgradeLevels));
    updateScore();
    alert("Upgrade purchased!");

    // Apply upgrade effects
    switch (upgradeIndex) {
      case 1:
        applyTemporaryUpgrade(1);
        break;
      case 2:
        clickRate += 1;
        updateClickRate();
        break;
    }
  } else {
    alert("Not enough cookies to buy this upgrade.");
  }
}

function resetGame() {
  score = 0;
  clickRate = 1;
  upgradeLevels = [0, 0];
  localStorage.setItem("cookieScore", score);
  localStorage.setItem("clickRate", clickRate);
  localStorage.setItem("upgradeLevels", JSON.stringify(upgradeLevels));
  updateScore();
  updateClickRate();
  alert("Game reset!");
}
