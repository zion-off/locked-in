import React, { useState, useEffect } from 'react';
import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase'; 

const ToggleCircle = ({ text }) => {
  const [color, setColor] = useState('green');
  const docId = text.toLowerCase(); 

  useEffect(() => {
    const circleRef = doc(db, 'circles', docId);

    const fetchData = async () => {
      try {
        const circleSnap = await getDoc(circleRef);
        if (circleSnap.exists()) {
          setColor(circleSnap.data().color);
        } else {
          await setDoc(circleRef, { color: 'green' });
          setColor('green'); 
        }
      } catch (error) {
        console.error('Error fetching or creating document:', error);
      }
    };

    const unsubscribe = onSnapshot(circleRef, (snapshot) => {
      if (snapshot.exists()) {
        setColor(snapshot.data().color);
      }
    });

    fetchData();

    return () => unsubscribe();
  }, [docId]);

  const handleClick = async () => {
    try {
      const newColor = color === 'red' ? 'green' : 'red';
      const circleRef = doc(db, 'circles', docId);
      await setDoc(circleRef, { color: newColor }, { merge: true });
      setColor(newColor); 
      console.log('Color updated to:', newColor); 
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