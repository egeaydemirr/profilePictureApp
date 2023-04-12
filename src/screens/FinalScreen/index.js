import React from 'react';
import {View, Image} from 'react-native';
import styles from './style';

const FinalPicture = ({route}) => {
  const {imageUri} = route.params;
  console.log(imageUri);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: imageUri}} style={styles.image} />
      </View>
    </View>
  );
};

export default FinalPicture;
