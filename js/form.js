console.clear();

// Findet das Formular und den Container für Karten
const cardForm = document.querySelector('[data-js="card-form"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

// Ein Event Listener zum Absenden des Formulars
cardForm.addEventListener("submit", (event) => {
  // Verhindert, dass das Formular die Seite neu lädt
  event.preventDefault();

  // Findet die Textareas und das Inputfeld
  const questionInput = document.querySelector(
    '[data-js="text-input"][name="question"]'
  );
  const answerInput = document.querySelector(
    '[data-js="text-input"][name="answer"]'
  );
  const tagInput = document.querySelector('[data-js="text-input"][name="tag"]');

  // Erstellt ein neues Listenelement und fügt es dem Container hinzu
  const newCard = document.createElement("li");
  newCard.classList.add("card");
  newCard.innerHTML = `
    <p class="form-question">${questionInput.value}</p>
    <p class="form-answer">${answerInput.value}</p>
    <div class="form-tag">${tagInput.value}</div>
  `;
  cardContainer.append(newCard);

  // Setzt die Textareas und das Inputfeld zurück
  questionInput.value = "";
  answerInput.value = "";
  tagInput.value = "";
});
