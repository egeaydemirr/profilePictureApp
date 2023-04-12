import FaceDetection from '@react-native-ml-kit/face-detection';

const Detector = async photo => {
  // console.log('photo', photo);
  if (!photo) {
    // console.log("photo doesn't exist");
    return;
  }
  // console.log('photo detector test');
  const results = await FaceDetection.detect(photo, {
    landmarkMode: 'all',
  }).catch(error => console.log('error', error));
  // console.log('results', results);
  return results;
};

export default Detector;
