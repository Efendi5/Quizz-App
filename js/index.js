console.clear();

const revealButton = document.querySelector('[data-js="reveal-button"]');
const cardAnswer = document.querySelector('[data-js="card-answer"]');

revealButton.addEventListener("click", () => {
  //card answer soll display flex machen
  // entferne die klasse hidden von card answer
  cardAnswer.classList.toggle(["visible"]);
  // wenn klasse von cardAnswer hidden ist,
  //soll im button der text hide answer stehen

  if (cardAnswer.classList.contains("visible")) {
    revealButton.textContent = "Hide answer";
  } else {
    revealButton.textContent = "Show answer";
  }
});
