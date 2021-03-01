import React, { useEffect, useState } from "react";

const Apptitle = ()=>{

    const [num, setNum] = useState(0);

    const addNum = () =>{

        setNum(num+1);

    }

    useEffect(()=>{
        document.title=`Clicked me ${num} times`
    });
    
    
    return (
        <>
        <button onClick={addNum}> Click Me {num}</button>

        </>
    );

};

export default Apptitle;