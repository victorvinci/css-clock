const talk = document.querySelector('.talk');
const containerBR = document.querySelector('.container-brasil');
const containerIT = document.querySelector('.container-italia');
const infosBR = document.querySelectorAll('.info-br');
const infosIT = document.querySelectorAll('.info-it');
// talk.style.position = 'absolute';
// containerBR.style.position = 'absolute';
// containerIT.style.position = 'absolute';

talk.onclick = function expandTalk() {
  if (!talk.classList.contains('talk-shrink')) {
    talk.style.transition = 'ease-in 0.5s';
    talk.classList.add('talk-shrink');
  } else {
    talk.classList.remove('talk-shrink');
  }
};

containerBR.onclick = function expandBR() {
  if (containerBR.classList.contains('shrink')) {
    containerBR.classList.remove('shrink');
    containerBR.classList.add('expand');
    setTimeout(function() {
      containerIT.classList.add('hide');
      infosBR[0].classList.add('expand-infos');
      infosBR[1].classList.add('expand-infos');
      talk.classList.add('talk-zero-height');
    }, 500);
  } else {
    containerBR.classList.remove('expand');
    containerBR.classList.add('shrink');
    containerIT.classList.remove('hide');
    infosBR[0].classList.remove('expand-infos');
    infosBR[1].classList.remove('expand-infos');
    containerIT.style['z-index'] = '-1';
    talk.classList.remove('talk-zero-height');
    setTimeout(function() {
      containerIT.style['z-index'] = '0';
    }, 480);
  }
};

containerIT.onclick = function expandIT() {
  if (containerIT.classList.contains('shrink')) {
    containerIT.classList.remove('shrink');
    containerIT.classList.add('expand');
    setTimeout(function() {
      containerBR.classList.add('hide');
      infosIT[0].classList.add('expand-infos');
      infosIT[1].classList.add('expand-infos');
      talk.classList.add('talk-zero-height');
    }, 500);
  } else {
    containerIT.classList.add('shrink');
    containerBR.classList.remove('hide');
    containerIT.classList.remove('expand');
    infosIT[0].classList.remove('expand-infos');
    infosIT[1].classList.remove('expand-infos');
    talk.classList.remove('talk-zero-height');
  }
};
