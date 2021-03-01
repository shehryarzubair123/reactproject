import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) =>{

    const [note, setNote] = useState({
        title: "",
        content:"",
    });

    const InputEvent = (event) =>{

        const {value, name} = event.target;

        setNote((prevData) =>{
            return {...prevData,
                [name]: value,                
            };
        });

    };

    const addEvent = () => {

        props.passNote(note);
        setNote({
            title: "",
            content:"",
        });
    };

return (
    <>
    <div className="main">
    <form>
    <input 
    type='text' 
    name="title"
    value={note.title} 
    onChange={InputEvent} 
    placeholder="Title" 
    autoComplete="off"        
    /><br/>

    <textarea 
    rows="" 
    coloumn="" 
    name="content"
    value={note.content} 
    onChange={InputEvent} 
    placeholder="Write a note">
    </textarea><br/>
    <Button onClick={addEvent} variant="contained" color="primary"><AddIcon/></Button><br/>
    </form>
    </div><br/>
    </>

);

};

export default CreateNote;