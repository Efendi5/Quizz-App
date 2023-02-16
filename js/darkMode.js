console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkmodeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightmodeButton = document.querySelector('[data-js="light-mode-button"]');

darkmodeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

lightmodeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

// Zuerst wird mit dem queryselector das erste Element im Dokument zurück gegeben.
// Mit dem addeventlistener wird das Klick event der body Klasse dark hinzugefügt
// Mit dem LightmodeButton wird das event wieder removed
