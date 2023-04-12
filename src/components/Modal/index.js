import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const CustomModal = ({result, modalVisible, setModalVisible, image}) => {
  // console.log('result modal', result, modalVisible);
  // console.log(result.length === 0);

  const navigation = useNavigation();

  const no = () => {
    setModalVisible(false);
  };

  const yes = () => {
    setModalVisible(false);
    navigation.navigate('Crop', {image: image, result: result});
  };

  if (modalVisible) {
    if (result.length === 0) {
      return (
        <Modal animationType="none" transparent={true} visible={modalVisible}>
          <View style={styles.container}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Profile Picture App</Text>
              <Text style={styles.modalText}>
                This picture has no face. Please choose another picture.
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <Text style={styles.buttonText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      );
    } else {
      return (
        <Modal animationType="none" transparent={true} visible={modalVisible}>
          <View style={styles.container}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Profile Picture App</Text>
              <Text style={styles.modalText}>
                This picture has a face. Do you want to edit it?
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={no}>
                  <Text style={styles.buttonText}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={yes}>
                  <Text style={styles.buttonText}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      );
    }
  } else {
    return null;
  }
};

export default CustomModal;
