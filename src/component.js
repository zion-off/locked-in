import React, { useState, useEffect } from 'react';
import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import './style.css';

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

  const circleClass = `${color.toLowerCase()}Circle movingCircle`;

  // Generate random delay and duration for each instance
  const randomDelay = Math.random() * 2; // Random value between 0 and 2 seconds
  const randomDuration = Math.random() * 5 + 3; // Random value between 3 and 8 seconds 

  const animationStyle = {
    animationDelay: `${randomDelay}s`,
    animationDuration: `${randomDuration}s`,
  };

  return (
    <div
      className={`circle ${circleClass}`}
      onClick={handleClick}
      style={{ backgroundColor: color, ...animationStyle }}
    >
      {text}
    </div>
  );
};

export default ToggleCircle;