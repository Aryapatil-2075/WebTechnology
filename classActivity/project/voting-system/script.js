console.log("JS LOADED");

let users = JSON.parse(localStorage.getItem("users")) || {};

function register() {
  let u = username.value.trim().toLowerCase();
  let p = password.value.trim();

  let usersData = JSON.parse(localStorage.getItem("users")) || {};

  if (usersData[u]) {
    msg.innerText = "User already exists!";
    return;
  }

  usersData[u] = { password: p, voted: false };

  localStorage.setItem("users", JSON.stringify(usersData));
  msg.innerText = "Registered successfully!";
}

function login() {
  let u = username.value.trim().toLowerCase();
  let p = password.value.trim();

  let usersData = JSON.parse(localStorage.getItem("users")) || {};

  if (usersData[u] && usersData[u].password === p) {
    localStorage.setItem("currentUser", u);
    window.location = "dashboard.html";
  } else {
    msg.innerText = "Invalid login!";
  }
}

if (location.pathname.includes("dashboard")) {
  let user = localStorage.getItem("currentUser");
  if (!user) window.location = "index.html";
}

let votes = JSON.parse(localStorage.getItem("votes")) || {
  A: 0,
  B: 0,
  C: 0,
};

function showLoader() {
  if (document.getElementById("premiumLoader")) return;

  let loader = document.createElement("div");
  loader.id = "premiumLoader";

  loader.innerHTML = `
    <div class="loader-box"> 
      <div class="spinner"></div>
      <p>Processing your vote...</p>
    </div>
  `;

  document.body.appendChild(loader);
  document.body.classList.add("blur");
}

function hideLoader() {
  let loader = document.getElementById("premiumLoader");
  if (loader) loader.remove();
  document.body.classList.remove("blur");
}

function showPopup(message) {
  let div = document.createElement("div");
  div.innerText = message;

  div.style.position = "fixed";
  div.style.top = "20px";
  div.style.right = "20px";
  div.style.background = "#111";
  div.style.color = "white";
  div.style.padding = "12px 20px";
  div.style.borderRadius = "8px";
  div.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
  div.style.zIndex = "9999";

  document.body.appendChild(div);

  setTimeout(() => div.remove(), 2000);
}

function fakeVoteAPI(party) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = localStorage.getItem("currentUser");
      let usersData = JSON.parse(localStorage.getItem("users")) || {};

      if (!user || !(user in usersData)) {
        reject("User not found!");
        return;
      }

      if (usersData[user].voted) {
        reject("You already voted!");
        return;
      }

      votes[party]++;
      usersData[user].voted = true;

      localStorage.setItem("votes", JSON.stringify(votes));
      localStorage.setItem("users", JSON.stringify(usersData));

      resolve("Vote recorded successfully!");
    }, 1000);
  });
}

async function vote(party) {
  try {
    showLoader();

    let message = await fakeVoteAPI(party);

    showPopup(message);
    loadChart();
  } catch (error) {
    showPopup(error);
  } finally {
    hideLoader();
  }
}

function getResultsAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(votes);
    }, 500);
  });
}

let chartInstance = null;

function loadChart() {
  let ctx = document.getElementById("chart");
  if (!ctx) return;

  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["A", "B", "C"],
      datasets: [
        {
          label: "Votes",
          data: [votes.A, votes.B, votes.C],
        },
      ],
    },
  });

  showWinner();
}

function showWinner() {
  let max = Math.max(votes.A, votes.B, votes.C);
  let winners = Object.keys(votes).filter((k) => votes[k] === max);

  let winnerText = document.getElementById("winner");

  if (winners.length > 1) {
    winnerText.innerText = "It's a Tie between: " + winners.join(", ");
  } else {
    winnerText.innerText = "Winner: Party " + winners[0];
  }
}

async function openModal() {
  let data = await getResultsAPI();

  document.getElementById("resultText").innerHTML = `
    Party A: ${data.A} votes <br>
    Party B: ${data.B} votes <br>
    Party C: ${data.C} votes
  `;

  let max = Math.max(data.A, data.B, data.C);
  let winner = Object.keys(data).find((k) => data[k] === max);

  document.getElementById("winnerText").innerText = "Winner: Party " + winner;

  document.getElementById("resultModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("resultModal").style.display = "none";
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location = "index.html";
}

if (document.getElementById("chart")) {
  loadChart();
}
