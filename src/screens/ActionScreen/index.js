import React, {createRef, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {
  handlerCamera,
  handlerImageLibrary,
  handlerImagePicker,
} from '../../handlers/imageuploader';
import Detector from '../../handlers/facedetection';
import Loading from '../../components/Loading';
import styles from './style';
import CustomModal from '../../components/Modal';

const actionSheetRef = createRef();

const ActionScreen = () => {
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  let photo = null;
  const [resultState, setResultState] = useState(null);
  const [loading, setLoading] = useState(false);

  let result = null;

  const camera = async () => {
    photo = await handlerCamera();
    // console.log('camera', photo);
    actionSheetRef.current?.hide();
    if (photo !== null) {
      setLoading(true);
      setImage(photo.uri);
      // console.log('image', image);
      result = await Detector(photo.uri);
      setResultState(result);
      setLoading(false);
      setModalVisible(true);
    }
  };

  const imageLibrary = async () => {
    photo = await handlerImageLibrary();
    // console.log('imageLibrary', photo);
    actionSheetRef.current?.hide();
    if (photo !== null) {
      setLoading(true);
      setImage(photo);
      // console.log('image', image);
      result = await Detector(photo.uri);
      setResultState(result);
      setLoading(false);
      setModalVisible(true);
    }
  };

  const imageFiles = async () => {
    setImage(await handlerImagePicker());
    // console.log('imageFiles', image);
    actionSheetRef.current?.hide();
  };

  return (
    <View style={styles.container}>
      {loading ? <Loading /> : null}
      {modalVisible ? (
        <CustomModal
          result={resultState}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          image={image}
        />
      ) : null}
      <View style={styles.imageContainer}>
        {!image ? (
          <Image
            style={styles.image}
            source={require('../../assets/image.png')}
          />
        ) : (
          <Image style={styles.choosenImage} source={{uri: image.uri}} />
        )}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          actionSheetRef.current?.show();
        }}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>
      <ActionSheet ref={actionSheetRef}>
        <View style={styles.menu}>
          <TouchableOpacity onPress={camera}>
            <Text style={styles.text}>Take a picture</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={imageLibrary}>
            <Text style={styles.text}>Upload from gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={imageFiles}>
            <Text style={styles.text}>Upload from files</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => actionSheetRef.current?.hide()}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </View>
  );
};

export default ActionScreen;
