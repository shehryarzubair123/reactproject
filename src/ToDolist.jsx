import React from "react";

const ToDolist = (props) => {

    return (
    <>
    <div className="todo_style">
    <button 
    aria-hidden="true"
    onClick={() => {
    props.onSelect(props.id);
    }}>x</button>
    <li>{props.text}</li>
    </div>
    </>
    );
};

export default ToDolist;