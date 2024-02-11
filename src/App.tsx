import React, { useState } from "react";
import "./App.css";
import Button from "./components/button";
import HugImage from "./assets/illus-hug.gif";
import KissImage from "./assets/illus-kiss.gif";
import Kiss2Image from "./assets/illus-kiss2.gif";

function App() {
    const [yesScaleFactor, setYesScaleFactor] = useState(1);
    const [imageSrc, setImageSrc] = useState(HugImage);
    const [message, setMessage] = useState("Will you be my Valentine?");
    const [action, setAction] = useState(true);

    const handleNoButtonClick = () => {
        setYesScaleFactor(yesScaleFactor + 1);
        setImageSrc(HugImage);
    };

    const handleYesButtonClick = () => {
      setImageSrc(KissImage);
      setMessage("Yieeee... Kilig ako boi AHAHAHAHAHA");
      setAction(false);
  };

    return (
        <div className="main-cont">
            <img width="350" src={imageSrc} alt="Kiss bear" />
            <h1>{ message }</h1>

            <div className="act-cont" style={{display: (action) ? "block" : "none"}}>
                <Button label="No" type="danger" onClick={handleNoButtonClick} />
                <Button label="Yes" type="ok" scaleFactor={yesScaleFactor} onClick={handleYesButtonClick} />
            </div>

            <span>Gihimo ni: <a href="https://www.facebook.com/loybaldo21">loyBALDO</a></span>
        </div>
    );
}

export default App;
