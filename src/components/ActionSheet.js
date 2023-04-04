export const openActionSheet = showActionSheetWithOptions => {
  const options = ['Camera', 'Gallery', 'Folder', 'Cancel'];
  const cancelButtonIndex = 3;
  showActionSheetWithOptions(
    {
      options,
      cancelButtonIndex,
      cancelButtonTintColor: 'red',
      icons: [
        require('../assets/camera.png'),
        require('../assets/photo-gallery.png'),
        require('../assets/folder.png'),
        require('../assets/cancel.png'),
      ],
      title: 'Select an option',
    },
    buttonIndex => {
      // Do something here depending on the button index selected
    },
  );
};
