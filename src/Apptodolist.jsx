import React, { useState } from "react";
import ToDolist from "./ToDolist.jsx";

const Apptodolist = () =>{

    const [inputlist, setinputlist] = useState("");
    const [Items, setItems] = useState([]);


    const itemEvents = (event) => {
        setinputlist(event.target.value);
    };

    const listOfItems = () =>{
        setItems((oldItems) =>{

            return[...oldItems, inputlist];
        }); 

        setinputlist("");
    };

    const deleteItems = (id) => {
        console.log("deleted");

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });
        });
    };

return (
    <>
    <div className="main">
        <div className="center"> 
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" 
        placeholder="Add a Items" 
        onChange={itemEvents} 
        value={inputlist} />

        <button onClick={listOfItems}>+</button>
        <ol>


           { Items.map((itemval, index) => {
             return <ToDolist 
             key={index} 
             text ={itemval} 
             onSelect={deleteItems} />;
           })}

        </ol>
        </div>
    </div>
    </>
);
}

export default Apptodolist;