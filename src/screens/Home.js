import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useActionSheet} from '@expo/react-native-action-sheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';

import {
  openCamera,
  openGallery,
  selectDocument,
} from '../components/ImagePicker';

const Home = ({route, navigation}) => {
  const {showActionSheetWithOptions} = useActionSheet();
  const [imageData, setImageData] = React.useState(null);

  //* Action Sheet ----------------
  const openActionSheet = () => {
    const options = ['Camera', 'Gallery', 'Folder', 'Cancel'];
    const cancelButtonIndex = 3;
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        cancelButtonTintColor: 'red',
        showSeparators: true,
        textStyle: {
          marginLeft: -20,
        },
        icons: [
          require('../assets/camera.png'),
          require('../assets/photo-gallery.png'),
          require('../assets/folder.png'),
          require('../assets/cancel.png'),
        ],
        title: 'Select an option',
      },
      buttonIndex => {
        buttonIndex === 0 && openCamera();
        buttonIndex === 1 && openGallery();
        buttonIndex === 2 && selectDocument();
      },
    );

    //* Open Camera ----------------

    const openCamera = async () => {
      const options = {
        cameraType: 'front',
        saveToPhotos: true,
      };

      const response = await launchCamera(options);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Image picker error: ', response.errorCode);
      } else if (response.errorMessage) {
        console.log('Image picker error: ', response.errorMessage);
      } else {
        cameraImageData = response.assets[0];
        console.log('camera Image Data:', cameraImageData);
        setImageData(cameraImageData.uri);
      }
      console.log('Image:', imageData);
    };

    //* Open Gallery ----------------
    const openGallery = async () => {
      const options = {
        saveToPhotos: true,
      };
      const response = await launchImageLibrary(options);
    };

    //* Select Document ----------------
    const selectDocument = async () => {
      try {
        const doc = await DocumentPicker.pick({
          type: [DocumentPicker.types.images],
        });
      } catch (error) {
        if (DocumentPicker.isCancel(error)) {
          console.log('User cancelled the picker');
        } else {
          throw error;
        }
      }
    };
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openActionSheet}>
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
