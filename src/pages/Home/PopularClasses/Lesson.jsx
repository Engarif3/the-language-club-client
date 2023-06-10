import React from "react";

const Lesson = ({item}) => {
  const {seats, nameClass, classImage, price} = item;
  return (
    <div>
       
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-56 object-cover"
            src={classImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{nameClass}</h2>
          <p>No of Students: {seats}</p>
          <p>Price:$ {price}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Lesson;
