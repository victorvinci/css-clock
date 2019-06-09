// const arrow = document.querySelector('.arrow-icon');
const transitionOnClick = () => {
  const talk = document.querySelector('.talk');
  const containerBR = document.querySelector('.container-brasil');
  const containerIT = document.querySelector('.container-italia');
  const infosBR = document.querySelectorAll('.info-br');
  const infosIT = document.querySelectorAll('.info-it');
  const picBR = document.querySelector('.day-time-pic-br');
  const picIT = document.querySelector('.day-time-pic-it');

  talk.addEventListener('click', function expandTalk() {
    if (
      !this.classList.contains('talk-shrink') &&
      document.querySelectorAll('.expand').length > 0
    ) {
      this.classList.add('talk-zero-height');
      this.classList.add('talk-shrink');
      // arrow.classList.add('hide');
    } else if (!this.classList.contains('talk-shrink')) {
      this.style.transition = 'all 0.5s';
      this.classList.add('talk-shrink');
      // arrow.classList.add('hide');
    } else if (this.classList.contains('talk-zero-height')) {
      this.classList.remove('talk-zero-height');
      this.classList.remove('talk-shrink');
      // setTimeout(function() {
      //   arrow.classList.remove('hide');
      // }, 500);
    } else {
      this.classList.remove('talk-shrink');
      // setTimeout(function() {
      //   arrow.classList.remove('hide');
      // }, 500);
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
        picBR.classList.add('expand-infos');
        talk.classList.add('talk-zero-height');
        containerIT.style['z-index'] = '-1';
      }, 500);
    } else {
      this.classList.remove('expand');
      this.classList.add('shrink');
      containerIT.classList.remove('hide');
      infosBR[0].classList.remove('expand-infos');
      infosBR[1].classList.remove('expand-infos');
      picBR.classList.remove('expand-infos');
      talk.classList.remove('talk-zero-height');
      setTimeout(function() {
        containerIT.style['z-index'] = '0';
      }, 500);
    }
  });

  containerIT.addEventListener('click', function expandIT() {
    if (this.classList.contains('shrink')) {
      this.classList.remove('shrink');
      this.classList.add('expand');
      if (window.matchMedia('(max-width:767px)').matches == true) {
        this.style.bottom = '0';
      }
      setTimeout(function() {
        containerBR.classList.add('hide');
        infosIT[0].classList.add('expand-infos');
        infosIT[1].classList.add('expand-infos');
        picIT.classList.add('expand-infos');
        talk.classList.add('talk-zero-height');
      }, 500);
    } else {
      this.classList.add('shrink');
      containerBR.classList.remove('hide');
      this.classList.remove('expand');
      if (window.matchMedia('(max-width:767px)').matches == true) {
        this.style.bottom = '20%';
      }
      infosIT[0].classList.remove('expand-infos');
      infosIT[1].classList.remove('expand-infos');
      picIT.classList.remove('expand-infos');
      talk.classList.remove('talk-zero-height');
    }
  });
};

export { transitionOnClick };
