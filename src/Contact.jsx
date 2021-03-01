
import React, { useState } from "react";


const Contact = () =>{

    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        msg: "",
    });

    const InputEvent = (event) =>{

        const {name, value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            };
        });

    };

    const formSubmit = (e) => {
        e.prventDefult();
        alert("Data submited successfully")
    };

    return(
        <>
        <div className="my-3">
            <h1 className="text-center">Contact</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="name" 
                                value={data.name}
                                onChange={InputEvent}  
                                placeholder="Enter Name"/>
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" 
                                className="form-control" 
                                name="phone" 
                                value={data.phone}
                                onChange={InputEvent}  
                                placeholder="Enter Mobile Number"/>
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="email" 
                                value={data.email}
                                onChange={InputEvent}  
                                placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea 
                                type="text" 
                                className="form-control" 
                                name="msg" 
                                value={data.msg}
                                onChange={InputEvent}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Contact;