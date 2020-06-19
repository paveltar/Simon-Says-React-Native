import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
// import { useSelector } from 'react-redux'

const HomeScreen = (props) => {
  // const test = useSelector((state) => state.test);

  return (
    <View style={[styles.container, styles.center]}>
      <Text style={styles.text}>Game</Text>
    </View>
  );
};

export default HomeScreen;
