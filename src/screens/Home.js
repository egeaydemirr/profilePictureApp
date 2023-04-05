import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useActionSheet} from '@expo/react-native-action-sheet';
import {openActionSheet} from '../components/ActionSheet';

//TODO: Implement the image picker for the camera and gallery

const Home = () => {
  const {showActionSheetWithOptions} = useActionSheet();

  const handleOpenActionSheet = () => {
    openActionSheet(showActionSheetWithOptions);
  };

  // const openCamera = async () => {
  //   const options = {
  //     cameraType: 'front',
  //     saveToPhotos: true,
  //   };
  //   const response = await launchCamera(options);
  // };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOpenActionSheet}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/gallery.jpg')} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    elevation: 2,
    marginBottom: 200,
  },
});

export default Home;
