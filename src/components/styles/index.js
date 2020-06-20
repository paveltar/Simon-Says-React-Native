import {StyleSheet, Dimensions} from 'react-native';
import { buttonsArray } from '../../utils/constants';

const {width} = Dimensions.get('window');

const gameContainerSize = 1000 / buttonsArray.length

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    margin: 30,
    padding: 5,
    backgroundColor: 'grey',
    borderWidth: 1,
    borderRadius: 15,
    width: 100,
  },
  separator: {
    height: 2,
    backgroundColor: 'black',
    width: width / 2,
  },
  boldText: {fontWeight: 'bold'},
  tabText: {fontSize: 15},
  score: {paddingVertical: 10, fontSize: 20},
  gameContainer: {
    flexWrap: 'wrap',
    width: gameContainerSize,
    height: gameContainerSize,
    // flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  gameButton: {
    // flexDirection: 'row-reverse',
    width: '50%',
    height: '50%',
    // borderWidth: 1,
  },
  gameButtonText: {
    fontSize: 40,
  }
});
