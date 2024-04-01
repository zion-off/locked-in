import React, { useState, useEffect } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase'; // Assuming your firebase.js is in the same directory

const ToggleCircle = ({ text }) => {
  const [color, setColor] = useState('red');
  const docId = text.toLowerCase(); // Use text argument as docId (converted to lowercase)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const circleRef = doc(db, 'circles', docId);
        const circleSnap = await getDoc(circleRef);
        if (circleSnap.exists()) {
          setColor(circleSnap.data().color);
        } else {
          // Create a new document with initial color if it doesn't exist
          await setDoc(circleRef, { color: 'red' });
          setColor('red'); // Set local state to 'red' as it's a new document
        }
      } catch (error) {
        console.error('Error fetching or creating document:', error);
      }
    };

    fetchData();
  }, [docId]);

  const handleClick = async () => {
    try {
      const newColor = color === 'red' ? 'green' : 'red';
      const circleRef = doc(db, 'circles', docId);
      await setDoc(circleRef, { color: newColor }, { merge: true });
      setColor(newColor); // Update local state after setting Firestore document
      console.log('Color updated to:', newColor); // Log the updated color
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

const App = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '5vh',
      }}
    >
      <ToggleCircle text="zion" />
      <ToggleCircle text="zein" />
      <ToggleCircle text="hind" />
      <ToggleCircle text="haadi" />
      <ToggleCircle text="momo" />
      <ToggleCircle text="mo" />
      <ToggleCircle text="yazi" />
      <ToggleCircle text="malak" />
      <ToggleCircle text="khadija" />
    </div>
  );
};

export default App;
