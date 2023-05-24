function changeImageAndColor(buttonColor, bgColor, imageLocation) {
  const imageElement = document.getElementById('image');
  imageElement.src = imageLocation;
  
  const uploadButton = document.getElementById('upload-button');
  uploadButton.style.backgroundColor = buttonColor;
  
  document.body.style.backgroundColor = bgColor;
}

function handleUploadButtonClick() {
  const uploadInput = document.getElementById('upload-input');
  uploadInput.click();
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  
  if (file && (file.type === 'image/jpeg' || file.type === 'image/png') && file.size <= 5242880) {
    const reader = new FileReader();
    
    reader.onload = function() {
      const uploadedImage = document.createElement('img');
      uploadedImage.src = reader.result;
      uploadedImage.classList.add('uploaded-image');
      
      setTimeout(function() {
        document.body.appendChild(uploadedImage);
      }, 2000);
    }
    
    reader.readAsDataURL(file);
  }
}    
const uploadInput = document.getElementById('upload-input');
uploadInput.addEventListener('change', handleFileUpload);

