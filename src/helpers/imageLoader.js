function unbindEvents(image) {
  // Reset callbacks
  image.onload = null;
  image.onerror = null;
  image.onabort = null;

  try {
    delete image.src;
  } catch (e) {
    // Strict mode in safari error
  }
}

function imgToBase64(img) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = img.width;
  canvas.height = img.height;

  ctx.drawImage(img, 0, 0);

  return canvas.toDataURL();
}

const imageLoader = (url, crossOrigin="anonymous") => {
  const image = new Image();

  // Support cross origin requests
  if (crossOrigin) image.crossOrigin = crossOrigin;

  return new Promise((resolve, reject) => {
    const loaded = (event) => {
      unbindEvents(image);
      resolve(imgToBase64(image));
    };

    const errored = (error) => {
      unbindEvents(image);
      reject(error);
    };

    image.onload = loaded;
    image.onerror = errored;
    image.onabort = errored;
    
    image.src = url;
  });
};

export default imageLoader;
