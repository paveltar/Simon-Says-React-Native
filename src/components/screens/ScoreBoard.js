import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from '../styles';

import {useSelector, useDispatch} from 'react-redux';

const ScoreBoard = (props) => {
  const scores = useSelector((state) => state.scores);

  const mapScores = (score, index) => {
    return [
      // Separator
      // add player name
      index > 0 && <View key={`${score}-separator`} style={styles.separator} />,
      <Text key={score} style={styles.score}>{`${index}: ${score}`}</Text>,
    ];
  };

  const renderContent = () => <ScrollView>{scores.map(mapScores)}</ScrollView>;

  return (
    <View style={[styles.container, styles.center]}>
      <Text style={styles.text}>ScoreBoard</Text>
      {renderContent()}
    </View>
  );
};

export default ScoreBoard;
