import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./imagelist.css";

const ImageList = () => {
  const [driveImages, setDriveImages] = useState([]);

  useEffect(() => {
    fetchDriveImages();
  }, []);

  const fetchDriveImages = async () => {
    try {
      const folderId = '1_qOJ0z3kI_e2IJq4X6HqF0T1ROBESygS'; // Replace with your folder ID
      const apiUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=AIzaSyCk-BioE877Fskjmn289MnLEDL6sDiOSgM`; // Replace with your API key

      const response = await axios.get(apiUrl);
      const files = response.data.files;
      const images = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.mimeType.startsWith('image/')) {
          const imageUrl = `https://drive.google.com/uc?id=${file.id}`;
          images.push(imageUrl);
        }
      }
      setDriveImages(images); // Update the state with fetched Drive image URLs
      console.log(driveImages);
      console.log(response);
      console.log(files);
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <>
    <h1>Google drive Image List</h1>
    <div className='drive-images'>
      {driveImages.map((image, index) => (
      <div key={index} className='image-box'>
        <img src={image} alt={`Drive Image ${index + 1}`} style={{ Width: '100px', height: '400px' }} />
      </div>
      ))}
    </div>
    </>
  );
};

export default ImageList;
