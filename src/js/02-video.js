import player from '@vimeo/player';
import { camelCase } from 'lodash';
import throttle from 'lodash.throttle';

const VimeoPlayer = new Vimeo.Player(`vimeo-player`);
const KEY = 'videoplayer - current - time';

VimeoPlayer.on(
  'timeupdate',
  throttle(event => {
    console.log(event.seconds);
    localStorage.setItem(KEY, event.seconds);
  }, 1000),
);
VimeoPlayer.setCurrentTime(localStorage.getItem(KEY))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
