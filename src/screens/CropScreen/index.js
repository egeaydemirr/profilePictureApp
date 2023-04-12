import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {focusTheFace, getZoom} from '../../handlers/focusTheFace';
import styles from './style';
import ZoomableView from '../../components/ZoomableView/ZoomableView';
import PhotoManipulator from 'react-native-photo-manipulator';
import ThumbnailPhoto from '../../handlers/thumbnail';

const CropEditor = ({route}) => {
  const navigation = useNavigation();
  const {image, result} = route.params;
  const [lastCropRegion, setLastCropRegion] = useState(null);

  const [region, setRegion] = useState(null);
  const [zoom, setZoom] = useState(1);
  let focusedRegion = focusTheFace(image, result);

  const zoomvalue = getZoom(focusedRegion, image);
  useEffect(() => {
    setRegion(focusedRegion);
    setZoom(zoomvalue);
    setLastCropRegion({
      width: focusedRegion.width,
      height: focusedRegion.height,
      x: focusedRegion.x,
      y: focusedRegion.y,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log('zoomvalue', zoom);
  // console.log('focusedRegion', region);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextArea}>
          <Text style={styles.headerText}>Crop Editor</Text>
        </View>
        <View style={styles.headerButtonLine}>
          <TouchableOpacity
            style={styles.buttonArea}
            onPress={() => navigation.goBack()}>
            <Text style={styles.headerButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonArea}
            onPress={async () => {
              const targetSize = {width: 300, height: 300};
              const croppedImage = await PhotoManipulator.crop(
                image.uri,
                lastCropRegion,
                targetSize,
              );
              // console.log('croppedImage: ', croppedImage);
              const thumbnailImage = await ThumbnailPhoto(croppedImage);
              navigation.navigate('Filter', {
                croppedImageUri: croppedImage,
                thumbnailUri: thumbnailImage,
              });
            }}>
            <Text style={styles.headerButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        {region && (
          <ZoomableView
            initialOffsetX={(image.width / 2 - region.center.x) / 2}
            initialOffsetY={(image.height / 2 - region.center.y) / 2}
            initialZoom={zoom}
            imageData={image}
            onManipulationEnd={eventObject => {
              // console.log('eventObject: ', eventObject);
              setLastCropRegion(eventObject);
            }}
          />
        )}
      </View>
    </View>
  );
};

export default CropEditor;
