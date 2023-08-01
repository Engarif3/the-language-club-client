import React from "react";



const Instructor = ({instructor}) => {


    const {name, email,photo} = instructor;
  return (
    
      <div>
        <div className="card  bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-300">
          <figure>
            <img
             className="h-72 w-full rounded-t-lg object-fill"
             src={photo}
              alt="Instructor Image"
            />
          </figure>
          <div className="card-body h-[10rem]">
            <h2 className="card-title">Name:{name}</h2>
            <p>Email: {email}</p>
          </div>
        </div>
      </div>

  );
};

export default Instructor;
