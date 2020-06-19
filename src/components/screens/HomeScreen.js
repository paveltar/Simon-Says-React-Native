import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

const HomeScreen = (props) => {
  return (
    <View style={[styles.container, styles.center]}>
      <Text style={styles.text}>Game</Text>
    </View>
  );
};

export default HomeScreen;
