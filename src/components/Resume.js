import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import ResumeImg from '../assets/resume.jpg'
// Firebase configuration (if not already initialized elsewhere in your app)
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

export default function Resume() {
  const [resumeURL, setResumeURL] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestResumeURL = async () => {
      try {
        const storageRef = firebase.storage().ref();
        const resumeUploadRef = storageRef.child('resume-upload');
        const resumeList = await resumeUploadRef.listAll();
        const latestResumeRef = resumeList.items.reduce((latest, item) => {
          return item.name > latest.name ? item : latest;
        }, resumeList.items[0]);
        
        if (latestResumeRef) {
          const url = await latestResumeRef.getDownloadURL();
          setResumeURL(url);
        }
      } catch (err) {
        setError('Failed to fetch resume URL');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestResumeURL();
  }, []);

  return (
    <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5 pb-10'>
      <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
        <img className='w-[300px]' src={ResumeImg} alt="Resume" />
      </div>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
          <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
          <div>
            <p className='pb-5'>You can view my Resume</p>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className='text-red-500'>{error}</p>
            ) : (
              <a className='btn' href={resumeURL} download>Download</a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
