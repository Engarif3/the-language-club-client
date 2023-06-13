import React from "react";


const Instructor = ({instructor}) => {


    const {name, email,photo} = instructor;
  return (
    <div>
      <div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
             className="h-80 w-11/12 rounded-lg cover m-4"
             src={photo}
              alt="Instructor Image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name:{name}</h2>
            <p>Email: {email}</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
