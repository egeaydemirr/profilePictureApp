export const focusTheFace = (image, result) => {
  let originX;
  let originY;
  const calculate = (canvas, face) => {
    originX = face.width / 2 + face.left;
    originY = face.height / 2 + face.top;
    // console.log(face);
    let cut = {
      x: originX - face.width,
      y: originY - face.height,
      width: face.width * 2,
      height: face.height * 2,
    };
    // console.log('focustheface-------------', cut);
    if (cut.x < 0) {
      cut.x = 0;
    }
    if (cut.y < 0) {
      cut.y = 0;
    }
    if (cut.x + cut.width > canvas.width) {
      cut.width = canvas.width - cut.x;
    }
    if (cut.y + cut.height > canvas.height) {
      cut.height = canvas.height - cut.y;
    }
    return cut;
  };
  // console.log('result', result[0].frame);
  const newCut = calculate(image, result[0].frame);
  const cropRegion = {
    x: newCut.x,
    y: newCut.y,
    width: newCut.width,
    height: newCut.height,
    center: {
      x: originX,
      y: originY,
    },
  };
  // console.log('cropRegion', cropRegion);
  return cropRegion;
};

export const getZoom = (focusedRegion, image) => {
  // console.log('focusedRegion', focusedRegion);
  // console.log('image', image);
  let zoom = 1;
  if (image.width > image.height) {
    zoom = image.width / focusedRegion.width;
  } else {
    zoom = image.height / focusedRegion.height;
  }
  return zoom;
};
