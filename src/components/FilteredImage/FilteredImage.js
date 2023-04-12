import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ImageFilter} from 'react-native-image-filter-kit';

export default function FilteredImage({
  imageUri,
  filterName,
  style,
  onExtractImage,
  isExtractEnabled,
}) {
  const [isFilteredImageReady, setIsFilteredImageReady] = useState(false);

  const onFilteringFinishHandler = event => {
    setIsFilteredImageReady(true);
  };

  const _onExtractImageHandler = event => {
    console.log(_onExtractImageHandler, event);
    if (isExtractEnabled && onExtractImage) {
      onExtractImage(event?.nativeEvent?.uri ?? event);
    }
  };
  const _renderImage = () => {
    const untouchedImage = (
      <Image style={styles.image} source={{uri: imageUri}} />
    );
    if (!filterName || filterName?.toLowerCase() === 'normal') {
      if (!isFilteredImageReady) {
        //rsetIsFilteredImageReady(true);
      }
      _onExtractImageHandler(imageUri);
      return untouchedImage;
    } else {
      return (
        <ImageFilter
          style={
            isFilteredImageReady ? styles.imageFilter : styles.imageFilterHidden
          }
          config={{
            name: filterName,
            image: untouchedImage,
          }}
          onFilteringFinish={onFilteringFinishHandler}
          onExtractImage={_onExtractImageHandler}
          extractImageEnabled={isExtractEnabled}
        />
      );
    }
  };

  return (
    <View style={[styles.loadingView, style ?? {}]}>
      {!isFilteredImageReady && (
        <ActivityIndicator size="large" style={styles.loading} />
      )}
      {_renderImage()}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    minWidth: '100%',
    flex: 1,
  },
  imageFilter: {},
  imageFilterHidden: {
    opacity: 0,
  },
  loadingView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  loading: {position: 'absolute', width: '100%', height: '100%'},
});
