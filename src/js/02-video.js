//modules import
import Player from '@vimeo/player';
import { throttle } from 'lodash';
const iframe = document.querySelector('iframe');
//New player example creation
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
//Current time getting
let currentPlayerTime = localStorage.getItem(STORAGE_KEY);
//Current time setting
player.setCurrentTime(+currentPlayerTime);

player.on('timeupdate', throttle(setPlayerCurrentTime, 1000));
//Setting data to local storage {seconds}
function setPlayerCurrentTime({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
  console.log(seconds);
}
