import PhotoManipulator from 'react-native-photo-manipulator';

const CropTheFace = async (image, result) => {
  const calculate = (canvas, face) => {
    const originX = face.width / 2 + face.left;
    const originY = face.height / 2 + face.top;
    // console.log(face);
    let cut = {
      x: originX - face.width,
      y: originY - face.height,
      width: face.width * 2,
      height: face.height * 2,
    };
    // console.log('-------------', cut);
    if (cut.x < 0) {
      cut.x = 0;
    }
    if (cut.y < 0) {
      cut.y = 0;
    }
    if (cut.x + cut.width > canvas.width) {
      cut.width = canvas.width - cut.x;
    }
    if (cut.y + cut.height > canvas.height) {
      cut.height = canvas.height - cut.y;
    }
    return cut;
  };
  // console.log('result', result[0].frame);
  const newCut = calculate(image, result[0].frame);
  const cropRegion = {
    x: newCut.x,
    y: newCut.y,
    width: newCut.width,
    height: newCut.height,
  };
  // console.log('cropRegion', cropRegion);
  const targetSize = {
    width: 500,
    height: 500,
  };

  const croppedImage = await PhotoManipulator.crop(
    image.uri,
    cropRegion,
    targetSize,
  );
  // console.log('croppedImage', croppedImage);
  return croppedImage;
};

export default CropTheFace;
