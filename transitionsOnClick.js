const talk = document.querySelector('.talk');
const containerBR = document.querySelector('.container-brasil');
const containerIT = document.querySelector('.container-italia');
const infosBR = document.querySelectorAll('.info-br');
const infosIT = document.querySelectorAll('.info-it');

talk.addEventListener('click', function expandTalk() {
  if (!this.classList.contains('talk-shrink') && document.querySelectorAll('.expand').length > 0) {
    this.classList.add('talk-zero-height');
    this.classList.add('talk-shrink');
  } else if (!this.classList.contains('talk-shrink')) {
    this.style.transition = 'ease-in 0.5s';
    this.classList.add('talk-shrink');
  } else if (this.classList.contains('talk-zero-height')){
    this.classList.remove('talk-zero-height');
    this.classList.remove('talk-shrink');
  } else {
    this.classList.remove('talk-shrink');
  }
});

containerBR.addEventListener('click', function expandBR() {
  if (this.classList.contains('shrink')) {
    this.classList.remove('shrink');
    this.classList.add('expand');
    setTimeout(function() {
      containerIT.classList.add('hide');
      infosBR[0].classList.add('expand-infos');
      infosBR[1].classList.add('expand-infos');
      talk.classList.add('talk-zero-height');
    }, 500);
  } else {
    this.classList.remove('expand');
    this.classList.add('shrink');
    containerIT.classList.remove('hide');
    infosBR[0].classList.remove('expand-infos');
    infosBR[1].classList.remove('expand-infos');
    containerIT.style['z-index'] = '-1';
    talk.classList.remove('talk-zero-height');
    setTimeout(function() {
      containerIT.style['z-index'] = '0';
    }, 480);
  }
});

containerIT.addEventListener('click', function expandIT() {
  if (this.classList.contains('shrink')) {
    this.classList.remove('shrink');
    this.classList.add('expand');
    setTimeout(function() {
      containerBR.classList.add('hide');
      infosIT[0].classList.add('expand-infos');
      infosIT[1].classList.add('expand-infos');
      talk.classList.add('talk-zero-height');
    }, 500);
  } else {
    this.classList.add('shrink');
    containerBR.classList.remove('hide');
    this.classList.remove('expand');
    infosIT[0].classList.remove('expand-infos');
    infosIT[1].classList.remove('expand-infos');
    talk.classList.remove('talk-zero-height');
  }
});
