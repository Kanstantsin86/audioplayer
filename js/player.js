'use strict';

var tracks = [
{file: "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Chill Tour.mp3", name: 'LA Chill Tour'},
{file: "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This is it band.mp3", name: 'This is it band'},
{file: "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Fusion Jam.mp3", name: 'LA Fusion Jam'},
];

let player = document.getElementsByClassName('mediaplayer')[0];
let i = 0;

function controls(event) {
  let audio = this.querySelector('audio');
  let target = event.target;
  let title = this.getElementsByClassName('title');
  while (target != this) {
    if (target.classList.contains('playstate')) {
      if (this.classList.contains('play')) {
        this.classList.remove('play');
        audio.pause();
      } else {
        this.classList.add('play');
        audio.play();
      }
      return;
    }

    if (target.classList.contains('stop')) {
      this.classList.remove('play');
      audio.pause();
      audio.currentTime = 0;
      return;
    }

    if (target.classList.contains('next')) {
      if (i < tracks.length - 1) {
        i++
      } else {
        i = 0
      }
      audio.src = tracks[i].file;
      audio.currentTime = 0;
      audio.play();
      this.classList.add('play');
      for (let item of title) {
        changeTitle(item, tracks[i].name);
      }
      return;
    }

    if ( target.classList.contains( 'back' ) ) {
      if ( i > 0) {
        i--
      } else {
        i = tracks.length - 1;
      }
      audio.src = tracks[i].file;
      audio.currentTime = 0;
      audio.play();
      this.classList.add( 'play' );
      for ( let item of title ) {
        changeTitle( item, tracks[i].name);
      }
      return;
    }
    target = target.parentNode;
  }
}

function changeTitle(elem, string) {
  elem.setAttribute('title', string);
}

player.addEventListener('click', controls);
