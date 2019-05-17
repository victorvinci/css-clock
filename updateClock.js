const BR = document.querySelector('.BR');
const IT = document.querySelector('.IT');

function setDate() {
  const horarioBR = moment().tz("America/Sao_Paulo").format('HH:mm:ss');
  const horarioIT = moment().tz("Europe/Rome").format('HH:mm:ss');

  BR.innerHTML = "BR SP " + horarioBR;
  IT.innerHTML = "IT ROME " + horarioIT;
}

setInterval(setDate, 1000);