function init() {
    let index = 0;
    const images = ["https://www.auto-data.net/images/f93/Mercedes-Benz-EQS.jpg",
        "https://www.auto-data.net/images/f130/Mercedes-Benz-EQS.jpg",
        "https://www.auto-data.net/images/f41/Mercedes-Benz-EQS.jpg",
        "https://www.auto-data.net/images/f94/Mercedes-Benz-EQS.jpg",
        "https://www.auto-data.net/images/f67/Mercedes-Benz-EQS.jpg",
        "https://www.auto-data.net/images/f91/Mercedes-Benz-EQS.jpg",
        "https://www.auto-data.net/images/f74/Mercedes-Benz-EQS.jpg",
        "https://www.auto-data.net/images/f32/Mercedes-Benz-EQS_4.jpg"
    ];
    let buttonNext = document.querySelector("#next");
    let buttonPrevious = document.querySelector("#previous");
    buttonNext.addEventListener("click", () => {
        index++;
        if (index > images.length - 1) {
            index = 0;
        }
        document.querySelector(".imagineEQS").src = images[index];
    })
    buttonPrevious.addEventListener("click", () => {
        index--;
        if (index == -1) {
            index = images.length - 1;
        }
        document.querySelector(".imagineEQS").src = images[index];
    })
    let autonomie = document.querySelector("#autonomie");
    let vitezaMaxima = document.querySelector("#vitezaMaxima");
    let viteza0_100 = document.querySelector("#viteza0_100");
    let butonTractiuneSpate = document.querySelector("#butonTractiuneSpate");
    let butonLongRange = document.querySelector("#longRange");
    let butonPerformance = document.querySelector("#performance");
    butonTractiuneSpate.addEventListener("click", () => {
        autonomie.innerHTML = "491 <sub>km</sub>";
        vitezaMaxima.innerHTML = "225 <sub>km/h</sub>";
        viteza0_100.innerHTML = "6,1 <sub>0-100 km/h</sub>";
    })

    butonLongRange.addEventListener("click", () => {
        autonomie.innerHTML = "602 <sub>km</sub>";
        vitezaMaxima.innerHTML = "233 <sub>km/h</sub>";
        viteza0_100.innerHTML = "4,1 <sub>0-100 km/h</sub>";
    })
    butonPerformance.addEventListener("click", () => {
        autonomie.innerHTML = "547 <sub>km</sub>";
        vitezaMaxima.innerHTML = "261 <sub>km/h</sub>";
        viteza0_100.innerHTML = "3,3 <sub>0-100 km/h</sub>";
    })
    let plaseazaComandaButon = document.querySelector(".plaseazaComanda");
    function changeColor() {
        let plaseazaComandaButon = document.querySelector(".plaseazaComanda");
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        plaseazaComandaButon.style.background = "#" + randomColor;
    }
    let intervalID = setInterval(changeColor, 5000);

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    document.querySelector("#dateMasina p span").innerHTML = date;

    plaseazaComandaButon.addEventListener("click", () => {
        document.querySelector('#second').append("Comanda noua !");
    })
    let stergeTitlu=document.querySelector(".stergeTitlu");
    stergeTitlu.addEventListener("click",()=>{
        document.querySelector("#titlu").innerHTML="";

    })
    stergeTitlu.innerText=stergeTitlu.innerText.toUpperCase();



}
window.onload = init;