import PhotoManipulator from 'react-native-photo-manipulator';

const croppedFace = async (image, face) => {
  console.log('image', image);
  // console.log('face', face);
  const faceSizes = face[0].frame;

  // console.log(JSON.stringify(face, null, 2));
  console.log(faceSizes);
  const originX = faceSizes.left + faceSizes.width / 2;
  const originY = faceSizes.top + faceSizes.height / 2;

  const cropRegion = {
    x: originX - faceSizes.width,
    y: originY - faceSizes.height,
    width: faceSizes.width * 2,
    height: faceSizes.height * 2,
  };
  const targetSize = {
    height: 500,
    width: 500,
  };

  const croppedImage = PhotoManipulator.crop(image, cropRegion, targetSize);
  return croppedImage;
};

export default croppedFace;
