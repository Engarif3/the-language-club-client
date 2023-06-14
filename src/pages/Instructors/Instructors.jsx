import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Instructor from './Instructor';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => {
        const filteredInstructors = data.filter(user => user.role === "instructor");
        setInstructors(filteredInstructors);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="mb-12">
      <Helmet>
        <title>The Language Club | Instructors</title>
      </Helmet>
      <h2 className="text-5xl text-center py-12">All Instructors Information</h2>
      <div className="grid md:grid-cols-3 gap-8 px-12">
        {instructors.map(instructor => (
          <Instructor key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
