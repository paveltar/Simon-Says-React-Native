import Sound from 'react-native-sound';

export const buttonsArray = [
  {
    hslColor: '120', // green
    letter: 'A',
    sound: new Sound('do_sound.mp3', Sound.MAIN_BUNDLE),
  },
  {
    hslColor: '0', // red
    letter: 'B',
    sound: new Sound('re_sound.mp3', Sound.MAIN_BUNDLE),
  },
  {
    hslColor: '55', // yellow
    letter: 'C',
    sound: new Sound('mi_sound.mp3', Sound.MAIN_BUNDLE),
  },
  {
    hslColor: '240', // blue
    letter: 'D',
    sound: new Sound('fa_sound.mp3', Sound.MAIN_BUNDLE),
  },
]; // more buttons can be added dynamically

export const GAME_SPEED = 15;

export const backgroundColor = 'rgb(225, 225, 225)';

export const MAX_SCORE_ARRAY_LENGTH = 10;
