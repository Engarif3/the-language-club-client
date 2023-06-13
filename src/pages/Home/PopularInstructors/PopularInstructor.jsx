import React from "react";


const PopularInstructor = ({item}) => {
  
  const {className, classImage, instructorName,instructorPhoto, instructorEmail, seats, email} = item;
  // const {photo} = userData;

  return (
    <div>
       
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-56 object-fill"
            src={instructorPhoto}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructorName}</h2>
          <p>Email: {instructorEmail}</p>
          <p>No of Students: {seats}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructor;

