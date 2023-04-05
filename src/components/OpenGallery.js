import {launchImageLibrary} from 'react-native-image-picker';

const openGallery = async () => {
  const options = {
    saveToPhotos: true,
  };
  const response = await launchImageLibrary(options);
};

export default openGallery;
