import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';

export default function ZoomableView({
  initialOffsetX,
  initialOffsetY,
  initialZoom,
  imageData,
  onManipulationEnd,
  ...props
}) {
  const getMinZoom = () => {
    if (imageData.width < imageData.height) {
      return imageData.height / imageData.width;
    } else {
      return imageData.width / imageData.height;
    }
  };

  const onManipulationEndCallback = zoomableViewEventObject => {
    if (!onManipulationEnd) {
      return;
    }

    let aspect = 1;
    if (imageData.width < imageData.height) {
      aspect = imageData.height / zoomableViewEventObject.zoomLevel;
    } else {
      aspect = imageData.width / zoomableViewEventObject.zoomLevel;
    }

    // console.log('aspect: ', aspect);

    let targetX =
      imageData.width / 2 - zoomableViewEventObject.offsetX * 2 - aspect / 2;
    let targetY =
      imageData.height / 2 - zoomableViewEventObject.offsetY * 2 - aspect / 2;

    if (targetX < 0) {
      targetX = 0;
    }

    if (targetY < 0) {
      targetY = 0;
    }

    if (targetX + aspect > imageData.width) {
      targetX -= targetX + aspect - imageData.width;
    }

    if (targetY + aspect > imageData.height) {
      targetY -= targetY + aspect - imageData.height;
    }

    const eventObject = {
      width: aspect,
      height: aspect,
      x: targetX,
      y: targetY,
      center: {
        x: zoomableViewEventObject.offsetX,
        y: zoomableViewEventObject.offsetY,
      },
    };

    onManipulationEnd(eventObject);
  };

  const getInitialZoom = () => {
    if (initialZoom) {
      return initialZoom;
    } else {
      getMinZoom();
    }
  };

  return (
    <View style={styles.zoomableParent}>
      <ReactNativeZoomableView
        maxZoom={props.maxZoom ? props.maxZoom : 4}
        minZoom={props.minZoom ? props.minZoom : getMinZoom()}
        zoomStep={props.zoomStep ? props.zoomStep : 0.5}
        initialZoom={getInitialZoom()}
        initialOffsetX={initialOffsetX}
        initialOffsetY={initialOffsetY}
        contentHeight={imageData.height / 2}
        contentWidth={imageData.width / 2}
        {...props}
        onShiftingEnd={(event, gestureState, zoomableViewEventObject) => {
          // console.log(zoomableViewEventObject);
          onManipulationEndCallback(zoomableViewEventObject);
        }}
        onZoomEnd={(event, gestureState, zoomableViewEventObject) => {
          // onImgTransform()
          // console.log(zoomableViewEventObject);
          onManipulationEndCallback(zoomableViewEventObject);
        }}>
        <Image style={styles.image} source={{uri: imageData.uri}} />
      </ReactNativeZoomableView>
      <View style={styles.holeView} pointerEvents="none" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    // margin: 8,
    width: '100%',
    height: '100%',
    minHeight: 80,
    overflow: 'hidden',
    resizeMode: 'contain',
    maxHeight: '100%',
    maxWidth: '100%',
  },
  holeView: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    // right: -width / 2 + 50,
    // bottom: -width / 2 + 310,
    backgroundColor: 'transparent',
    width: '200%',
    height: '200%',

    borderWidth: 150,
    borderRadius: 300,
    borderColor: 'black',
    opacity: 0.3,
  },
  zoomableParent: {
    overflow: 'hidden',
    width: 300,
    height: 300,
  },
});
