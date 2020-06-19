import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from '../styles';

const ScoreBoard = (props) => {
  const renderContent = () => {
    return <ScrollView><Text>TEXT</Text></ScrollView>;
  };

  return (
    <View style={[styles.container, styles.center]}>
      <Text style={styles.text}>ScoreBoard</Text>
      {renderContent()}
    </View>
  );
};

export default ScoreBoard;
