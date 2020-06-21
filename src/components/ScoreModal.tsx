import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, TextInput} from 'react-native';
import styles from './styles';

const ScoreModal = ({onClosePress, setPlayerName, gameLevel, ...rest}) => {
  const [text, setText] = useState('');

  const _onClosePress = () => {
    onClosePress();
    setText('');
  };

  return (
    <Modal animationType="slide" transparent={false} {...rest}>
      <View style={styles.modal}>
        <Text style={styles.text}>Sorry but you loose!</Text>
        <Text style={styles.text}>Your score is: {String(gameLevel)}</Text>
        <Text style={styles.text}>Please enter you name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{flex: 1, marginHorizontal: 15}}
            onChangeText={(text) => setText(text)}
            value={text}
          />
        </View>

        <View style={[styles.modalButtons, {alignItems: 'center'}]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setPlayerName(text);
              _onClosePress();
            }}>
            <Text style={styles.text}>Enter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={_onClosePress}>
            <Text style={styles.text}>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ScoreModal;
