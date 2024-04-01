import React from 'react';
import ToggleCircle from './component';


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
        backgroundColor: 'black',
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