console.log("Richiesta Preventivo");

//recupeare il input del nome
const nomeElement = document.getElementById("nome");
//recupeare il input del cognome
const cognomeElement = document.getElementById("cognome");

//recupeare il input del email
const emailElement = document.getElementById("email");

//recupeare il input del tipo di lavoro
const selectJobElement = document.getElementById("select-job");

//recuperare il input del codice promozionale
const codicePromoElement = document.getElementById("codice-promo");

//recupeare il form
const formElement = document.getElementById("form");

//prezzo finale
const prezzoFinaleHTML = document.getElementById("prezzo-finale");

//quando il promo nn e valido
const valided = document.getElementById("notvalid");

//validare il dati
//nome = ""
//cognome = ''
//email = ""
//tipoloavoro ''
//textarea = ''

//add a addevent lister to the form
formElement.addEventListener("submit", function (e) {
  //disactivate the form auto refresh
  // e.preventDefault();

  if (formElement.checkVisibility()) {
    e.preventDefault();
  }
  formElement.classList.add("was-validated");

  console.log(
    nomeElement.value,
    cognomeElement.value,
    emailElement.value,
    selectJobElement.value,
    codicePromoElement.value
  );

  //prendere il value del selectjoblelement
  const job = selectJobElement.value;

  //validate il select del form

  //SE il job e === string di 1
  //-10*20.50
  //ALTRIMENTI SE job e === stringa di 2
  //-10*15.30
  //ALTRIMENTI
  //-10*33.60

  let prezzo = 0;
  let oreLavorate = 10;

  if (job === "1") {
    prezzo = oreLavorate * 20.5;
    console.log(prezzo + " hai selezionato 1");
  } else if (job === "2") {
    prezzo = oreLavorate * 15.3;
    console.log(prezzo + " hai selezionato 2");
  } else if (job === "3") {
    prezzo = oreLavorate * 33.6;
    console.log(prezzo + " hai seleizonato 3");
  } else {
    console.log("nn hai nessun sconto");
  }

  let promo = codicePromoElement.value;

  //validare il codice promozionale
  //SE il promo === YHDNU32
  //- true
  //ALTRIMENTI SE === JANJC63
  //- true
  //ALTRIMENTI SE === PWKCN25
  //- true
  //ALTRIMENTI SE === SJDPO96
  //- true
  //ALTRIMENTI SE === POCIE24
  //- true
  //ALTRIMENTI
  //-codice promozionale nn e valido

  //sconto e 25/100 = 25%
  let sconto = 0;
  let discount = 0;

  //prima il prezzo eg 100
  //100 * 25 che e il percentuale 2.500
  //2.500 / 100 = 25
  // prezzo finale e di 100 - 25 = 75

  // if (promo === "YHDNU32") {
  //   sconto = prezzo * 25;
  //   discount = sconto / 100;
  //   valided.innerHTML = `Il codice promo inserito e valido`;
  // } else if (promo === "JANJC63") {
  //   sconto = prezzo * 25;
  //   discount = sconto / 100;
  //   valided.innerHTML = `Il codice promo inserito e valido`;
  // } else if (promo === "PWKCN25") {
  //   sconto = prezzo * 25;
  //   discount = sconto / 100;
  //   valided.innerHTML = `Il codice promo inserito e valido`;
  // } else if (promo === "SJDPO96") {
  //   sconto = prezzo * 25;
  //   discount = sconto / 100;
  //   valided.innerHTML = `Il codice promo inserito e valido`;
  // } else if (promo === "POCIE24") {
  //   sconto = prezzo * 25;
  //   discount = sconto / 100;
  //   valided.innerHTML = `Il codice promo inserito e valido`;
  // } else {
  //   console.log("codice promozionale inserito nn e valido");
  //   //print del dom che il promo nn e valido
  //   valided.innerHTML = `Il codice promo inserito non e valido`;
  // }

  //promo check optimizaione

  let promoCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

  if (promoCodes.includes(promo)) {
    sconto = prezzo * 25;
    discount = sconto / 100;
    valided.innerHTML = `Il codice promo inserito e valido, sconto 25%`;
    codicePromoElement.classList.add("is-valid");
    codicePromoElement.classList.add("text-success");
    formElement.classList.add("was-validated");

    console.log("its valid");
  } else if (promo != "") {
    valided.innerHTML = `Il codice promo inserito non e valido`;
    codicePromoElement.classList.remove("is-valid");
    codicePromoElement.classList.add("is-invalid");
    codicePromoElement.classList.add("text-danger");
    codicePromoElement.classList.remove("text-success");
    formElement.classList.remove("was-validated");

    console.log("its not valid");
  } else {
    console.log("no sconto applied");
    valided.innerHTML = `no sconto`;
  }

  let prezzoFinale = prezzo - discount;
  console.log(prezzoFinale, typeof prezzoFinale);

  // prezzoFinaleHTML.innerHTML = prezzoFinale.toFixed(2).bold() + " &euro; ";

  // convertitre numbero in una stringa
  let numberString = prezzoFinale.toString();
  console.log(numberString, typeof numberString);

  let parts = numberString.split(".");
  let intPart = parts[0];
  let decimalPart = parts[1] || "00";

  //print nel html
  let newPrice = "<b>" + intPart + "</b>." + decimalPart;

  prezzoFinaleHTML.innerHTML = newPrice + " &euro; ";
});
