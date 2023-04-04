import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

//TODO: Add a touchable opacity for a image
//TODO: onPress. actionSheet will open and 4 options will be displayed
// TODO: 1. Camera
// TODO: 2. Gallery
// TODO: 3. Folder
// TODO: 4. Cancel

const Home = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/gallery.jpg')} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    elevation: 2,
    marginBottom: 200,
  },
});

export default Home;
