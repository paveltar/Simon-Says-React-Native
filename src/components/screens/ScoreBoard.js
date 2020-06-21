import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from '../styles';

import {useSelector} from 'react-redux';
import {MAX_SCORE_ARRAY_LENGTH} from '../../utils/constants';
import {sortScores} from '../../utils';

const ScoreBoard = () => {
  const scores = useSelector((state) => state.scores);

  const mapScores = ({name, score}, index) => {
    return [
      // Separator
      // add player name
      index > 0 && <View key={`${name}-separator`} style={styles.separator} />,
      <Text key={name} style={styles.score}>{`${
        index + 1
      }. ${name} - score: ${score}`}</Text>,
    ];
  };

  const renderContent = () => (
    <ScrollView>
      {scores.sort(sortScores).slice(0, MAX_SCORE_ARRAY_LENGTH).map(mapScores)}
    </ScrollView>
  );

  return (
    <View style={[styles.container, styles.center]}>
      <Text style={styles.text}>ScoreBoard</Text>
      {renderContent()}
    </View>
  );
};

export default ScoreBoard;
