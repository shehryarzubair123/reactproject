import React from "react";


function Card(props) {
    console.log(props);
    return (
    <>
   
    <div className="card"> 
    <img src={props.imgsrc} />
    <h1 className="ques"> {props.ques}</h1>
    <h3 className="ans">{props.ans} </h3>    
    <button className="btnname">{props.btnname}</button>
    </div>
   
    </>
    )
}

export default Card;