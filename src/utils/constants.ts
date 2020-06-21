import Sound from 'react-native-sound';

interface Button {
  hslColor: string;
  letter: string;
  sound: any;
}

export const buttonsArray: Array<Button> = [
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

export const GAME_SPEED: number = 15;

export const backgroundColor: string = 'rgb(225, 225, 225)';

export const MAX_SCORE_ARRAY_LENGTH: number = 10;
