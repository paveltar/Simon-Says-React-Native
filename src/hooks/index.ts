import {useState, useEffect} from 'react';
import {sleep, getRandomInt} from '../utils';
import {buttonsArray, GAME_SPEED} from '../utils/constants';

export const useGame = () => {
  const startTheGame = async () => {
    setGameLevel(0);
    setPlayerLost(false);
    setGameStarted(true);
    await sleep(500);
    nextLevel();
  };

  const nextLevel = async () => {
    await sleep(2000 / GAME_SPEED);
    const nextNoteIndex = getRandomInt(0, buttonsArray.length - 1);
    setGameSequence((sequence) => [...sequence, nextNoteIndex]);
  };

  const playNote = async (noteIndex) => {
    setActiveButtonIndex(noteIndex);
    buttonsArray[noteIndex].sound.stop();
    buttonsArray[noteIndex].sound.play();
    await sleep(4500 / GAME_SPEED);
    setActiveButtonIndex(null);
    await sleep(2000 / GAME_SPEED);
  };

  const handlePlayerNoteInput = (noteIndex) => {
    setPlayerSequence((sequence) => [...sequence, noteIndex]);
    buttonsArray[noteIndex].sound.stop();
    buttonsArray[noteIndex].sound.play();
  };

  const [gameStarted, setGameStarted] = useState(false);
  const [playersTurn, setPlayersTurn] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [gameLevel, setGameLevel] = useState(0);
  const [gameSequence, setGameSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [playerLost, setPlayerLost] = useState(false);

  // check if last user note is correct
  useEffect(() => {
    if (gameStarted) {
      const start = async () => {
        const index = playerSequence.length - 1;

        // Player lost
        if (playerSequence[index] !== gameSequence[index]) {
          setGameStarted(false);
          setPlayerLost(true);
          setPlayerSequence([]);
          setGameSequence([]);
          return;
        }

        // Player gets to next level
        if (playerSequence.length === gameSequence.length) {
          setGameLevel((level) => level + 1);
          setPlayersTurn(false);
          await sleep(10000 / GAME_SPEED);
          setPlayerSequence([]);
          nextLevel();
        }
      };
      start();
    }
  }, [playerSequence, gameSequence]);

  // starting the game and repeating the sequence after each success
  useEffect(() => {
    const playSequence = async (sequence) => {
      for (let i = 0; i < sequence.length; i++) {
        await playNote(sequence[i]);
      }
    };

    if (gameStarted) {
      const start = async () => {
        await playSequence(gameSequence);
        setPlayersTurn(true);
      };
      start();
    }
  }, [gameSequence, gameStarted]);

  return [
    [activeButtonIndex, setActiveButtonIndex],
    gameStarted,
    playersTurn,
    gameLevel,
    playerLost,
    startTheGame,
    handlePlayerNoteInput,
  ];
};
