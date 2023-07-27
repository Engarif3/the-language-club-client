import React from "react";
import Container from "../../../Container";


const PopularInstructor = ({item}) => {
  
  const {instructorName,instructorPhoto, instructorEmail, seats} = item;
  

  return (
    <div>
       
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-80 w-11/12 rounded-lg object-fit m-4"
            src={instructorPhoto}
            alt="instructor"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructorName}</h2>
          <p>Email: {instructorEmail}</p>
          <p>Students: {seats}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructor;

