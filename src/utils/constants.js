import Sound from 'react-native-sound';

export const buttonsArray = [
    {
        color: 'green',
        pressSound: 'x',
        letter: 'A',
        sound: new Sound('do_sound.mp3', Sound.MAIN_BUNDLE),
    },
    {
        color: 'red',
        pressSound: 'x',
        letter: 'B',
        sound: new Sound('re_sound.mp3', Sound.MAIN_BUNDLE),
    },
    {
        color: 'yellow',
        pressSound: 'x',
        letter: 'C',
        sound: new Sound('mi_sound.mp3', Sound.MAIN_BUNDLE),
    },
    {
        color: 'blue',
        pressSound: 'x',
        letter: 'D',
        sound: new Sound('fa_sound.mp3', Sound.MAIN_BUNDLE),
    },
]
 // more buttons can be added dynamically