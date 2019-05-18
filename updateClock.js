const BR = document.querySelector('.BR');
const IT = document.querySelector('.IT');
let sunTimeBR = Boolean;
let sunTimeIT = Boolean;

function getDateBR() {
  const horarioBR = moment().tz("America/Sao_Paulo").format('HH:mm:ss');
  const horaBR = moment().tz("America/Sao_Paulo").format('HH');

  if (horaBR < 24 && horaBR > 06 && horaBR <= 18) {
    sunTimeBR = true;
  } else {
    sunTimeBR = false;
  }
  
  BR.innerHTML = "BR SP " + horarioBR;

  return sunTimeBR;
}

function getDateIT() {
  const horarioIT = moment().tz("Europe/Rome").format('HH:mm:ss');
  const horaIT = moment().tz("Europe/Rome").format('HH');

  if (horaIT < 24 && horaIT > 06 && horaIT <= 18) {
    sunTimeIT = true;
  } else {
    sunTimeIT = false;
  }

  IT.innerHTML = "IT ROME " + horarioIT;

  return sunTimeIT;
}

setInterval(getDateBR, 1000);
setInterval(getDateIT, 1000);

// console.log(getDateBR())
// console.log(getDateIT())

if (getDateBR() === true && getDateIT() === true){
  console.log("mozi")
} else {
  console.log("dorme");
}