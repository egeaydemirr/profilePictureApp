import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  button: {
    width: 150,
    height: 30,
    backgroundColor: '#3C84AB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  imageContainer: {
    width: 370,
    height: 450,
    borderColor: '#3C84AB',
    borderWidth: 3.5,
    borderRadius: 20,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: 5,
  },
  image: {
    width: 35,
    height: 35,
  },
  choosenImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  menu: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 200,
    padding: 12,
  },
  text: {
    fontSize: 17,
    color: '#3C84AB',
    borderBottomColor: '#BAD7E990',
    borderBottomWidth: 1,
    padding: 10,
  },
  cancel: {
    fontSize: 17,
    color: '#DD3E3E',
    padding: 10,
  },
});
