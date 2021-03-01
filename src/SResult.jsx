import React from "react";

const SResult = (props) =>{
    const img = `https://source.unsplash.com/400x300/?${props.name}`;

    return(
        <>
        <img src={img} alt="img"/>
       </>
    );
};
export default SResult;