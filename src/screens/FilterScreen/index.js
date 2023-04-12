import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FilterData} from '../../handlers/filterData';
import styles from './style';
import FilteredImage from '../../components/FilteredImage/FilteredImage';
import {cleanExtractedImagesCache} from 'react-native-image-filter-kit';

const FilterEditor = ({route}) => {
  const navigation = useNavigation();
  const {croppedImageUri, thumbnailUri} = route.params;
  const [activeFilter, setActiveFilter] = useState(0);
  // const [thumbnailUri, setThumbnailUri] = useState(null);

  let extractedImageUri = null;

  useEffect(() => {
    cleanExtractedImagesCache();
  }, []);

  const onSelectedFilter = index => {
    setActiveFilter(index);
  };

  const onExtractImageHandler = uri => {
    extractedImageUri = uri;
  };

  const renderFilterItem = filterName => {
    return (
      <TouchableOpacity
        id={filterName}
        style={styles.filterItem}
        onPress={() => onSelectedFilter(filterName.item)}>
        <FilteredImage
          imageUri={thumbnailUri}
          filterName={filterName.item}
          style={styles.filterImage}
        />
        <Text style={styles.filterName}>{filterName.item}</Text>
      </TouchableOpacity>
    );
  };

  const renderMainImage = () => {
    return (
      <FilteredImage
        imageUri={croppedImageUri}
        filterName={activeFilter}
        style={styles.mainImage}
        onExtractImage={onExtractImageHandler}
        isExtractEnabled={true}
      />
    );
  };

  const keyExtractor = filterName => {
    return filterName;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextArea}>
          <Text style={styles.headerText}>Filter Editor</Text>
        </View>
        <View style={styles.headerButtonLine}>
          <TouchableOpacity style={styles.buttonArea}>
            <Text
              style={styles.headerButtonText}
              onPress={() => navigation.goBack()}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonArea}>
            <Text
              style={styles.headerButtonText}
              onPress={() => {
                navigation.navigate('Final', {
                  imageUri: extractedImageUri,
                });
              }}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        {/* <Image style={styles.image}
          source={{uri: filteredImageUri}}
          resizeMode='contain'
        /> */}
        {renderMainImage()}
      </View>
      <View style={styles.controllerArea}>
        <View style={styles.filterControllerArea}>
          <FlatList
            horizontal
            data={FilterData}
            renderItem={renderFilterItem}
            keyExtractor={keyExtractor}
            showsHorizontalScrollIndicator={false}
            maxToRenderPerBatch={5}
          />
          {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {FilterData.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.filterItem}
                  onPress={() => onSelectedFilter(index)}>
                  <FilteredImage
                    imageUri={thumbnailUri}
                    filterName={item.name}
                    style={styles.filterImage}
                  />
                  <Text style={styles.filterName}>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView> */}
        </View>
      </View>
    </View>
  );
};

export default FilterEditor;
