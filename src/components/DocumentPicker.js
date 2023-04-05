import DocumentPicker from 'react-native-document-picker';

const selectDocument = async () => {
  try {
    const doc = await DocumentPicker.pick({
      type: [DocumentPicker.types.images],
    });
  } catch (error) {
    if (DocumentPicker.isCancel(error)) {
      console.log('User cancelled the picker');
    } else {
      throw error;
    }
  }
};

export default selectDocument;
