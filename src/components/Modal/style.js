import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f0f0f60',
    position: 'absolute',
  },
  modalContainer: {
    backgroundColor: '#fefefefa',
    width: 350,
    height: 150,
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.75,
    elevation: 7,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3C84AB',
  },
  modalText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000e0',
    marginTop: 15,
    paddingLeft: 10,
  },
  buttonContainer: {
    width: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginRight: -10,
    position: 'absolute',
    right: 30,
    bottom: 20,
  },
  button: {
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#3C84AB',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
