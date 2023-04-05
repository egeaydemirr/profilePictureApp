import openCamera from './OpenCamera';
import openGallery from './OpenGallery';

export const openActionSheet = showActionSheetWithOptions => {
  const options = ['Camera', 'Gallery', 'Folder', 'Cancel'];
  const cancelButtonIndex = 3;
  showActionSheetWithOptions(
    {
      options,
      cancelButtonIndex,
      cancelButtonTintColor: 'red',
      showSeparators: true,
      textStyle: {
        marginLeft: -20,
      },
      icons: [
        require('../assets/camera.png'),
        require('../assets/photo-gallery.png'),
        require('../assets/folder.png'),
        require('../assets/cancel.png'),
      ],
      title: 'Select an option',
    },
    buttonIndex => {
      buttonIndex === 0 && openCamera();
      buttonIndex === 1 && openGallery();
      buttonIndex === 2 && console.log('Folder');
      buttonIndex === 3 && console.log('Cancel');

      // Do something here depending on the button index selected
    },
  );
};
