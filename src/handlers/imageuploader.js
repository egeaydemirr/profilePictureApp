import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

let source = null;
export const handlerCamera = async () => {
  const options = {
    storageOptions: {
      skipBackup: true,
      cameraType: 'front',
      quality: 1,
    },
  };
  await launchCamera(options, response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      source = response.assets[0];
      console.log('handlerImageLibrary', source);
    }
  });
  return source;
};

export const handlerImageLibrary = async () => {
  const options = {
    storageOptions: {
      skipBackup: true,
      quality: 1,
      type: 'image/jpeg' || 'image/png' || 'image/jpg',
    },
  };
  await launchImageLibrary(options, response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      source = response.assets[0];
      console.log('handlerImageLibrary', source);
    }
  });
  return source;
};

export const handlerImagePicker = callback => {
  const options = {
    storageOptions: {
      skipBackup: true,
      quality: 1,
      type: 'image/jpeg' || 'image/png' || 'image/jpg',
      path: 'files',
    },
  };
  launchImageLibrary(options, response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      source = {uri: response.uri};
      callback(source);
    }
  });
};
