import React, { useState, useEffect }  from "react";
import ToggleCircle from "./component";
import haadi from "./haadi.jpg";
import zein from "./zein.jpg";
import momo from "./momo.jpg";
import yazi from "./yazi.png";
import malak from "./malak.jpg";

const App = () => {
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    const imagesArray = [haadi, zein, momo, yazi, malak];
    const randomIndex = Math.floor(Math.random() * imagesArray.length);
    setRandomImage(imagesArray[randomIndex]);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "5vh",
        backgroundColor: "black",
      }}>
      <ToggleCircle text="zion" />
      <ToggleCircle text="zein" />
      <ToggleCircle text="hind" />
      <ToggleCircle text="haadi" />
      <ToggleCircle text="momo" />
      <ToggleCircle text="mo" />
      <ToggleCircle text="yazi" />
      <ToggleCircle text="malak" />
      <ToggleCircle text="khadija" />

      {randomImage && (
        <img
          src={randomImage}
          alt="ad"
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            width: "20vw", 
            height: "auto", 
            borderRadius: "5px", 
          }}
        />
      )}
    </div>
  );
};

export default App;
