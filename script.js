
//switch reproductions
function activeElem(cityName) {
    let i, cardsRep, countries, reset;
    reset = document.getElementsByClassName("cards-reproduction");
    for (let i = 0; i < reset.length; i++) {
        reset[i].className = reset[i].className.replace(" visible", "");
    }
    
    cardsRep = document.getElementsByClassName('cards-reproduction');
    console.log(cardsRep);
    for (i = 0; i < cardsRep.length; i++) {
        cardsRep[i].className += " visible";
    }
    countries = document.getElementById(cityName);
    countries.className = countries.className.replace(" visible", "");

}