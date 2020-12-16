let voiture = {
    Nom : "Eggo",
    imgUrl : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    nombresRoues : 4,
    Couleur : "Marron",
    Constructeur : "Citroen",
    Carburant : "Solaire",
    nombrePortes : 3,
    Autonomie : "450km",
    vitesseMaxi : "120km/h"
};
let img = document.getElementById("img");
let caract = document.getElementById("caract");
let info = document.getElementById("info");

img.style.width = "100px";
img.style.height = "100px";
img.style.background = voiture.imgUrl;

caract.innerHTML += "Constructeur :"+" "+ voiture.Constructeur +"<br>";
caract.innerHTML += "nombre de roues :"+" "+ voiture.nombresRoues+"<br>";
caract.innerHTML += "nombre de portes :"+" "+ voiture.nombrePortes+"<br>";
caract.innerHTML += "Autonomie :"+" "+ voiture.Autonomie+"<br>";
caract.innerHTML += "Carburant :"+" "+ voiture.Carburant+"<br>";
caract.innerHTML += "vitesse maxi :"+" "+ voiture.vitesseMaxi+"<br>";
caract.innerHTML += "Couleur :"+" "+ voiture.Couleur+"<br>";




