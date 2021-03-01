import React, { useState } from "react";

const Appbg = () => {

const color = "#ff0000";
const [bg, setBg] = useState(color);

const cName = "Click"
const [Name, setName] = useState(cName);

const changeName = () => {
    let secName = "Angry 😠";
    setName(secName);
}
const curName = () => {
    let secName = "smile 😄";
    setName(secName);
}


const bgChange = () => {

    let newBg = "#800080";
    setBg(newBg);

};

const secBgChange = () => {
    let rnewbg= "#008000"
    setBg(rnewbg);
};

return (
    <>
    <div style={{backgroundColor: bg}}> 
    <button onClick={bgChange} onMouseEnter={changeName} onMouseLeave={curName} onDoubleClick={secBgChange}>{Name}</button>
    </div>

    </>

);

};
export default Appbg;
