import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from '../styles';
import {buttonsArray} from '../../utils/constants';
import {useGame} from '../../hooks';
import ScoreModal from '../ScoreModal';
import {addScore} from '../../actions';

const GameScreen: React.FC = (props) => {
  const {
    navigation: {navigate},
  }: any = props;
  const [
    [activeButtonIndex, setActiveButtonIndex],
    gameStarted,
    playersTurn,
    gameLevel,
    playerLost,
    startTheGame,
    handlePlayerNoteInput,
  ] = useGame();

  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (playerLost) {
      setModalVisible(true);
    }
  }, [playerLost]);

  return (
    <View style={[styles.container, {alignItems: 'center'}]}>
      <ScoreModal
        gameLevel={gameLevel}
        onClosePress={() => {
          setModalVisible(false);
        }}
        visible={modalVisible}
        setPlayerName={(name: string) => {
          navigate('ScoreBoard');
          dispatch(
            addScore({
              name,
              score: gameLevel,
            }),
          );
        }}
      />

      <View style={[{marginTop: 200}, !gameStarted && styles.invisible]}>
        <Text>Game score: {gameLevel}</Text>
      </View>
      <View style={styles.gameContainer}>
        {buttonsArray.map((item, index) => (
          <TouchableOpacity
            disabled={!gameStarted || !playersTurn}
            activeOpacity={1}
            key={item.letter}
            onPressIn={() => setActiveButtonIndex(index)}
            onPressOut={() => setActiveButtonIndex(null)}
            onPress={async () => handlePlayerNoteInput(index)}
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
    </View>
  );
};

export default GameScreen;
