import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import styles from './ResumeForm.module.css';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1FdyBXb_-vtlCzTRqjqSKg4DZl2L-HSE",
  authDomain: "resume-store-ca16c.firebaseapp.com",
  projectId: "resume-store-ca16c",
  storageBucket: "resume-store-ca16c.appspot.com",
  messagingSenderId: "785591663982",
  appId: "1:785591663982:web:71385c064f2982261e557f",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const ResumeForm = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    setUploading(true);
    setUploadError(null);

    try {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(`resume-upload/${encodeURIComponent(file.name)}`);
      const snapshot = await fileRef.put(file);
      const fileURL = await snapshot.ref.getDownloadURL();

      alert('Resume uploaded successfully!');
      console.log('File available at', fileURL);
    } catch (error) {
      setUploadError('Error uploading file: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={styles.container} >
      <h1 className={styles.heading}>Upload Resume</h1>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className={styles.fileInput}
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className={styles.button}
      >
        {uploading ? 'Uploading...' : 'Upload Resume'}
      </button>
      {uploadError && <p className={styles.errorMessage}>{uploadError}</p>}
    </div>
  );
};

export default ResumeForm;
