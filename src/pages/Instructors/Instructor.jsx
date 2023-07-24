import React from "react";
import Container from "../../Container";


const Instructor = ({instructor}) => {


    const {name, email,photo} = instructor;
  return (
    
      <Container>
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
          </div>
        </div>
      </Container>

  );
};

export default Instructor;
