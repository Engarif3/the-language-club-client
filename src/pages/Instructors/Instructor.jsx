import React from "react";
import useAuth from "../../hooks/useAuth";



const Instructor = ({instructor}) => {

  const {darkMode} = useAuth();
  const {name, email,photo} = instructor;
  return (

        <div className={darkMode? "card bg-[#2D2D2D] text-white border-b-4 border-red-600 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-300":"card bg-base-100 border-b-4 border-gray-600 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-300"}>
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

  );
};

export default Instructor;
