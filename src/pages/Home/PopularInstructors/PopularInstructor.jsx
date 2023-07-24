import React from "react";
import Container from "../../../Container";


const PopularInstructor = ({item}) => {
  
  const {className, classImage, instructorName,instructorPhoto, instructorEmail, seats, email} = item;
  // const {photo} = userData;

  return (
    <Container>
       
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-80 w-11/12 rounded-lg cover m-4"
            src={instructorPhoto}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructorName}</h2>
          <p>Email: {instructorEmail}</p>
          <p>Students: {seats}</p>
        </div>
      </div>
    </Container>
  );
};

export default PopularInstructor;

