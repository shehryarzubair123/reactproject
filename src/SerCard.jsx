import React from "react";



const SerCard = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img className="card-img-top" src={props.imgsrc} alt="Card" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary">Go somewhere</button>
                    </div>
                </div>
            </div>

        </>
    );
}
export default SerCard;