// the function to change the image source, button color, and background color
function changeImageAndColor(buttonColor, bgColor, imageLocation) {
  const imageElement = document.getElementById("image");
  imageElement.src = imageLocation; // Set the source of the image element to new img location

  const uploadButton = document.getElementById("upload-button");
  uploadButton.style.backgroundColor = buttonColor; // Change the background color of the upload button

  document.body.style.backgroundColor = bgColor; // Change the background color of the body
}

// Function to handle click on the upload button
function handleUploadButtonClick() {
  const uploadInput = document.getElementById("upload-input");
  uploadInput.click(); // Simulate a click on the hidden file input element
}

// Function to handle file upload
function handleFileUpload(event) {
  const file = event.target.files[0]; // Get the selected file from the input element

  if (
    file &&
    (file.type === "image/jpeg" || file.type === "image/png") && // Check if the file is an image (.jpg or .png) and within the size 5MB
    file.size <= 5242880
  ) {
    const reader = new FileReader();

    reader.onload = function () {
      const uploadedImage = document.createElement("img"); // Create a new img element
      uploadedImage.src = reader.result; // Set the source of the uploaded image to the file data
      uploadedImage.classList.add("uploaded-image"); // Add a CSS class to the uploaded image

      setTimeout(function () {
        document.body.appendChild(uploadedImage); // Append the uploaded image to the document body after 2 seconds
      }, 2000);
    };

    reader.readAsDataURL(file); // Read the file as a data URL
  }
}

const uploadInput = document.getElementById("upload-input");
uploadInput.addEventListener("change", handleFileUpload); // Add event listener to the file input element
