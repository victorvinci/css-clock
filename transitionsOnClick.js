const talk = document.querySelector('.talk');
talk.onclick = function shrink() {
  if (talk.style.position == 'absolute') {
    talk.style.position = 'unset';
  } else {
    talk.style.position = 'absolute';
  }
}