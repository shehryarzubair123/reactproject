import React, { useState } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";

const AppTodo = () =>{

    const [additem, setAddItem] = useState([]);

    const addNote = (note) =>{
        setAddItem((prevData)=>{
            return [...prevData, note];

        });

      
    };

    const remEvent = (id) =>{
        setAddItem((oldData)=>
        oldData.filter((currdata, index)=>{
            return index !== id;
        })
        );
    }

    return (
        <>
        <CreateNote passNote={addNote}/>
       
        {additem.map((val, index)=>{
            return (<Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            remitem={remEvent}
            />
            );
        })}
        </>
    );

};

export default AppTodo;