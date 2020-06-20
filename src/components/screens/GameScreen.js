import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {/* useSelector, */ useDispatch} from 'react-redux';
import styles from '../styles';
import {addScore} from '../../actions';
import {buttonsArray} from '../../utils/constants';

const GameScreen = (props) => {
  const startTheGame = () => {
    setGameStarted(true);
  };

  

  // const test = useSelector((state) => state.test);
  // const dispatch = useDispatch();
  const [gameStarted, setGameStarted] = useState(false);
  const [gameScore, setGameScore] = useState(0);

  return (
    <View style={[styles.container, styles.center]}>
      <View style={!gameStarted && {opacity: 0}}>
        <Text>Games score: {gameScore}</Text>
      </View>
      <View style={styles.gameContainer}>
        {buttonsArray.map((item) => (
          <TouchableOpacity
            key={item.letter}
            onPress={() => {
              item.sound.play();
            }}
            style={[
              styles.gameButton,
              styles.center,
              {backgroundColor: item.color},
            ]}>
            <Text style={styles.gameButtonText}>{item.letter}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        onPress={startTheGame}
        style={[styles.button, styles.center]}>
        <Text>Play</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameScreen;
