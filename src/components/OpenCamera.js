import {launchCamera} from 'react-native-image-picker';

const openCamera = async () => {
  const options = {
    cameraType: 'front',
    saveToPhotos: true,
  };
  const response = await launchCamera(options);
};
export default openCamera;
