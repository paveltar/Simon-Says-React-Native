import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {/* useSelector, */ useDispatch} from 'react-redux';
import styles from '../styles';
import {buttonsArray} from '../../utils/constants';
import {useGame} from '../../hooks';

const GameScreen = () => {
  const [
    [activeButtonIndex, setActiveButtonIndex],
    gameStarted,
    playersTurn,
    gameLevel,
    startTheGame,
    handlePlayerNoteInput,
  ] = useGame();

  return (
    <View style={[styles.container, {alignItems: 'center'}]}>
      <View style={[{marginTop: 200}, !gameStarted && {opacity: 0}]}>
        <Text>Games score: {gameLevel}</Text>
      </View>
      <View style={styles.gameContainer}>
        {buttonsArray.map((item, index) => (
          <TouchableOpacity
            disabled={!gameStarted || !playersTurn}
            activeOpacity={1}
            key={item.letter}
            onPressIn={() => {
              setActiveButtonIndex(index);
            }}
            onPressOut={() => {
              setActiveButtonIndex(null);
            }}
            onPress={async () => {
              handlePlayerNoteInput(index);

              // preventing multiple button presses
              // setDelay(true)
              // await sleep(10)
              // setDelay(false)
            }}
            style={[
              styles.gameButton,
              styles.center,
              {
                backgroundColor: `hsl(${item.hslColor}, 100%, ${
                  activeButtonIndex === index ? '80%' : '50%'
                })`,
              },
            ]}>
            <Text style={styles.gameButtonText}>{item.letter}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {!gameStarted && (
        <TouchableOpacity
          onPress={startTheGame}
          style={[styles.button, styles.center]}>
          <Text>Play</Text>
        </TouchableOpacity>
      )}
      {/* <Text>gameSequence {gameSequence}</Text>
      <Text>playerSequence {playerSequence}</Text> */}
    </View>
  );
};

export default GameScreen;
