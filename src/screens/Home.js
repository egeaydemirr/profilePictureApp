import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useActionSheet} from '@expo/react-native-action-sheet';
import {
  openCamera,
  openGallery,
  selectDocument,
} from '../components/ImagePicker';

const Home = () => {
  const {showActionSheetWithOptions} = useActionSheet();
  const [imageData, setImageData] = React.useState(null);

  let photo = null;

  const camera = async () => {
    photo = await openCamera();
    setImageData(photo);
    console.log('photo', photo);
  };
  const gallery = async () => {
    photo = await openGallery();
    setImageData(photo);
    console.log('photo', photo);
  };
  const document = async () => {
    photo = await selectDocument();
    setImageData(photo);
    console.log('photo', photo);
  };

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
        buttonIndex === 0 && camera();
        buttonIndex === 1 && gallery();
        buttonIndex === 2 && document();
      },
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openActionSheet}>
        <View style={styles.imageContainer}>
          {imageData ? (
            <Image source={{uri: imageData.uri}} style={styles.image} />
          ) : (
            <Image source={require('../assets/gallery.jpg')} />
          )}
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
    borderWidth: 5,
    marginBottom: 200,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#000',
  },
});

export default Home;
