import {Image} from 'react-native';
import PhotoManipulator from 'react-native-photo-manipulator';
import RNFS from 'react-native-fs';

const ThumbnailPhoto = async croppedImageUri => {
  let imageData = null;
  if (typeof croppedImageUri === 'string') {
    const isFileExist = await RNFS.exists(croppedImageUri);
    if (isFileExist) {
      const {width, height} = await getImageSize(croppedImageUri);
      imageData = {
        uri: croppedImageUri,
        width: width,
        height: height,
      };
    } else {
      throw new Error('Image file does not exist at path: ' + imageData);
    }
  }

  const maxLength = 96;
  const imageDataUri = imageData.uri;

  let targetRatio;
  if (imageData.width > imageData.height) {
    targetRatio = maxLength / imageData.width;
  } else {
    targetRatio = maxLength / imageData.height;
  }
  const cropRegion = {
    x: 0,
    y: 0,
    width: imageData.width,
    height: imageData.height,
  };

  const targetSize = {
    width: imageData.width * targetRatio,
    height: imageData.height * targetRatio,
  };

  const thumbnailImage = await PhotoManipulator.crop(
    imageDataUri,
    cropRegion,
    targetSize,
  );
  return thumbnailImage;
};

const getImageSize = imageUri => {
  return new Promise((resolve, reject) => {
    Image.getSize(
      imageUri,
      (width, height) => {
        resolve({width, height});
      },
      reject,
    );
  });
};

export default ThumbnailPhoto;
