import React from "react";
import Sdata from "./Sdata.jsx";
import SerCard from "./SerCard.jsx"


const Services = () =>{
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row mb-5">
                <div className="col-10 mx-auto">
                    <div className="row">
                            {
                                Sdata.map((val, ind) => {
                                    return <SerCard 
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    />
                                    
                             })
                            }                                       
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Services;