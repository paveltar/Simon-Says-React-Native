import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import {/* useSelector, */ useDispatch } from 'react-redux';
import styles from '../styles';
import { addScore } from '../../actions';
import { buttonsArray } from '../../utils/constants';
import { sleep, getRandomInt } from '../../utils';

const GameScreen = () => {

  const startTheGame = async () => {
    setGameStarted(true);
    await sleep(500)
    await nextLevel()
  };

  const nextLevel = async () => {
    await sleep(200)
    setGameLevel(level => level + 1);
    const nextNoteIndex = getRandomInt(0, buttonsArray.length - 1)
    setGameSequence(sequence => {
      const newSequence = [...sequence, nextNoteIndex]
      return newSequence
    })
  }

  const playNote = async noteIndex => {
    setActiveButtonIndex(noteIndex)
    buttonsArray[noteIndex].sound.play()
    await sleep(650)
    setActiveButtonIndex(null)
  }

  const playSequence = async sequence => {
    for (let i = 0; i < sequence.length; i++) {
      await playNote(sequence[i])
    }
  }

  const handlePlayerNoteInput = noteIndex => {
    setPlayerSequence(sequence => [...sequence, noteIndex])
    buttonsArray[noteIndex].sound.stop()
    buttonsArray[noteIndex].sound.play()
  }

  // const test = useSelector((state) => state.test);
  // const dispatch = useDispatch();

  const [gameStarted, setGameStarted] = useState(false);
  const [playersTurn, setPlayersTurn] = useState(false);
  // const [delay, setDelay] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [gameLevel, setGameLevel] = useState(0);
  const [gameSequence, setGameSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);

  // check if last user note is correct
  useEffect(() => {
    const x = async () => {
      if (gameStarted) {
        const index = playerSequence.length - 1
        if (playerSequence[index] !== gameSequence[index]) {
          setGameStarted(false)
          setPlayerSequence([])
          setGameSequence([])
          setGameLevel(0)
          alert('you lose')
        }

        if (playerSequence.length === gameSequence.length) {
          setPlayersTurn(false)
          await sleep(1000)
          setPlayerSequence([])
          nextLevel()
        }
      }
    }
    x()

  }, [playerSequence])

  useEffect(() => {
    const x = async () => {
      if (gameStarted) await playSequence(gameSequence)
      setPlayersTurn(true)
    }
    x()
  }, [gameSequence])

  return (
    <View style={[styles.container, { alignItems: 'center' }]}>
      <View style={[{ marginTop: 200 }, !gameStarted && { opacity: 0 }]}>
        <Text>Games score: {gameLevel}</Text>
      </View>
      <View style={styles.gameContainer}>
        {buttonsArray.map((item, index) => (
          <TouchableOpacity
            disabled={!gameStarted || !playersTurn}
            activeOpacity={1}
            key={item.letter}
            onPressIn={() => {
              setActiveButtonIndex(index)
            }}
            onPressOut={() => {
              setActiveButtonIndex(null)
            }}
            onPress={async () => {
              handlePlayerNoteInput(index)

              // preventing multiple button presses
              // setDelay(true)
              // await sleep(10)
              // setDelay(false)
            }}
            style={[
              styles.gameButton,
              styles.center,
              { backgroundColor: `hsl(${item.hslColor}, 100%, ${activeButtonIndex === index ? '80%' : '50%'})` },
            ]}>
            <Text style={styles.gameButtonText}>{item.letter}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {!gameStarted && <TouchableOpacity
        onPress={startTheGame}
        style={[styles.button, styles.center]}>
        <Text>Play</Text>
      </TouchableOpacity>}
      {/* <Text>gameSequence {gameSequence}</Text>
      <Text>playerSequence {playerSequence}</Text> */}
    </View>
  );
};

export default GameScreen;
