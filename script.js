
// FIND ELEMENTERNE I HAMBURGERMENUEN
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");

// ÅBN OG LUK HAMBURGERMENUEN
menuButton.addEventListener("click", function () {

    // Undersøger om menuen allerede er åben
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    // Opdaterer knappens tilgængelighedsoplysninger
    menuButton.setAttribute("aria-expanded", !isOpen);

    // Skifter knappens tekst til enten Åbn menu eller Luk menu
    menuButton.setAttribute("aria-label", isOpen ? "Åbn menu" : "Luk menu");

    // Viser eller skjuler navigationen
    navigation.classList.toggle("active");
});

// LUK MENUEN, NÅR MAN KLIKKER PÅ ET LINK
navigation.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Åbn menu");

    });

});
