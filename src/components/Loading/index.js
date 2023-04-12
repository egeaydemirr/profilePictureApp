import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './style';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={100} color="#3C84AB" style={styles.loading} />
    </View>
  );
};

export default Loading;
