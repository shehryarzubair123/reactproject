import React, { useState } from "react";
import SResult from "./SResult";

const Search = () =>{

    const [img, setImg] = useState("");
    const InputEvent = (event) =>{
    const data = event.target.value;
    setImg(data);
    console.log(data);
    }
    return(
        <>
        <h1>Search Page </h1>
        <input
            type="text"
            placeholder="Enter Some Text"
            onChange={InputEvent}
            value={img}
        /><br/>
        {img === "" ? null : <SResult name={img}/>}
        </>
    );
}
export default Search;