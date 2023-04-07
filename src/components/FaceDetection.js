import FaceDetection from '@react-native-ml-kit/face-detection';

const faceDetector = async image => {
  const face = await FaceDetection.detect(image, {
    landmarkMode: 'all',
  });
  if (face[0] === undefined) {
    alert('Photo does not contain a face');
    return;
  }
  return face;
};
export default faceDetector;
