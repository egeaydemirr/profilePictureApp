import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import FaceDetection from '@react-native-ml-kit/face-detection';

//TODO: Implement the face detection
export const openCamera = async () => {
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
    return response.assets[0];
  }
};

export const openGallery = async () => {
  const options = {
    saveToPhotos: true,
  };
  const response = await launchImageLibrary(options);
  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.errorCode) {
    console.log('Image picker error: ', response.errorCode);
  } else if (response.errorMessage) {
    console.log('Image picker error: ', response.errorMessage);
  } else {
    return response.assets[0];
  }
};

export const selectDocument = async () => {
  const doc = await DocumentPicker.pick({
    type: [DocumentPicker.types.images],
  });

  return doc[0].name;
};
