import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f0f0f90',
    position: 'absolute',
    zIndex: 900,
  },
  loading: {
    width: 100,
    height: 100,
    zIndex: 999,
  },
});
