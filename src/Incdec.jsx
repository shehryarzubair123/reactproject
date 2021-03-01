import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Incdec = () =>{

    const [Num, setNum] = useState(0);

    const incNum = () =>{

        setNum(Num+1)
    }
    const decNum = () =>{
        if(Num > 0){
        setNum(Num-1)
        }else
        {
            alert("we reach Num Zero")
            setNum(0);
        }
    }

    return (
    <>
        <div>
            <h1> {Num} </h1>
            <button onClick={incNum}><AddIcon/></button>
            <button onClick={decNum}><RemoveIcon/></button>
        </div>
    </>

    );
};
export default Incdec;