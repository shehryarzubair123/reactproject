import React, { useState } from "react";

const Appforms = () =>{


    const [fulname, setFulName] = useState({
        fname: "",
        lname: "",
    }); 

    const InputEvent = (event) =>{
        console.log(event.target.value);
        console.log(event.target.name);

        const value = event.target.value;
        const name = event.target.name;

        setFulName((prevalue) => {
            if(name === "fname"){
                return {
                    fname: value,
                    lname: prevalue.lname,
                };

            }else if(name === "lname"){
                return{
                    fname: prevalue.fname,
                    lname: value,
                };
            };
        });
    };

    const onSubmit = (event) =>{
        event.preventDefault();
       
        
    };

    return (

        <>
        <form onSubmit={onSubmit}>
        <h1>Hello {fulname.fname} {fulname.lname} </h1>
        <input type="text" placeholder="Enter Name"
        onChange={InputEvent} 
        name="fname"
        value={fulname.fname}       
        /><br/>
        <input type="text" placeholder="Enter Name"
        onChange={InputEvent} 
        name="lname"
        value={fulname.lname}       
        /><br/>
        <button type="submit">Submit</button>
        </form>
        </>
    );


}

export default Appforms;