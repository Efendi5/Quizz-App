console.clear();

const profilButton = document.querySelector('[data-js="profil-button"]');

profilButton.addEventListener("click", () => {
  profilButton.classList.add("active-choice");
  console.log("Selected Profil");
});

// Durch den profilButton mit der Klasse active-choise wird in der Nav Leiste angeziegt welche Seite aktuell angezeigt wird
