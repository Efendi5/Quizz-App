console.clear();

const revealButton = document.querySelector('[data-js="reveal-button"]');
const cardAnswer = document.querySelector('[data-js="card-answer"]');

revealButton.addEventListener("click", () => {
  cardAnswer.classList.toggle(["visible"]);

  if (cardAnswer.classList.contains("visible")) {
    revealButton.textContent = "Hide answer";
  } else {
    revealButton.textContent = "Show answer";
  }
});

// Mit dem addEventListener wird dem Button durch das Klick event die Fähigkeit gegeben
// der card answer die hidden Klasse zu entfernen und die display flex Klasse zu geben.
// Anschließend wird mit der if/else funktion der card answer Klasse: Bei visible (true) -> Hide Answer
// und bei else in dem Fall (false) die Antwort zu zeigen.
