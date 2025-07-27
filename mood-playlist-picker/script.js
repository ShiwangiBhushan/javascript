document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".mood-card");
  const surpriseBtn = document.getElementById("surprise-btn");

  // Create the Show All button
  const showAllBtn = document.createElement("button");
  showAllBtn.textContent = "Show All 🔁";
  showAllBtn.className = "mood-button";
  showAllBtn.style.display = "none";
  showAllBtn.style.marginTop = "1rem";

  // Append Show All button after the mood container
  const moodContainer = document.querySelector(".mood-container");
  moodContainer.appendChild(showAllBtn);

  // When Surprise Me is clicked
  surpriseBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    cards.forEach((card, index) => {
      if (index !== randomIndex) {
        card.style.display = "none";
      }
    });

    surpriseBtn.style.display = "none";
    showAllBtn.style.display = "inline-block";
  });

  // When Show All is clicked
  showAllBtn.addEventListener("click", () => {
    cards.forEach((card) => {
      card.style.display = "block";
    });

    surpriseBtn.style.display = "inline-block";
    showAllBtn.style.display = "none";
  });
});

// python3 -m http.server 3000