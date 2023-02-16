console.clear();

const profilButton = document.querySelector('[data-js="profil-button"]');

profilButton.addEventListener("click", () => {
  profilButton.classList.add("active-choice");
  console.log("Selected Profil");
});
