import React from "react";
import {NavLink} from "react-router-dom";
import office from "../src/img/office1.png";


const Common = (props) =>{
    return(
        <>

        <div className="container-fluid header">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-7 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1 className="head1">{props.name}<strong className="brand_name">digtan digital</strong></h1>
                            <h5 className="my-3">We are the team of talented developer making websites</h5>
                            <div className="mt-4">
                                <NavLink to={props.visit} className="btn-get-started">{props.btn}</NavLink>
                            </div>
                        </div>
                        <div className="col-md-5 order-1 order-lg-2 header_img text-right">
                            <img src={office} className="img-fluid animated" alt="officeimg"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Common;