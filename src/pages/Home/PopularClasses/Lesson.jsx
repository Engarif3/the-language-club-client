import React from "react";

const Lesson = ({item}) => {
  const {seats, nameClass, classImage} = item;
  return (
    <div>
       
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={classImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{nameClass}</h2>
          <p>No of Students: {seats}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
