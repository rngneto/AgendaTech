export default async function getCroppedImg(imageSrc, croppedAreaPixels) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;
  
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;
  
        ctx.drawImage(
          image,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          0,
          0,
          croppedAreaPixels.width,
          croppedAreaPixels.height
        );
  
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Erro ao criar blob da imagem.'));
              return;
            }
            resolve(blob);
          },
          'image/jpeg',
          0.9 // Qualidade da compressão (0.9 = alta qualidade)
        );
      };
  
      image.onerror = () => {
        reject(new Error('Erro ao carregar a imagem.'));
      };
    });
  }
  