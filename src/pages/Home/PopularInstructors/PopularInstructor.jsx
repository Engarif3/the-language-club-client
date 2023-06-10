import React from "react";


const PopularInstructor = ({item}) => {
  
  const {studentCount, instructorName, classImage, seats} = item;
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
          <h2 className="card-title">{instructorName}</h2>
          <p>No of Students: {seats}</p>
          
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructor;
