import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Instructor from './Instructor';
import Loader from '../../components/Loader/Loader';
import useAuth from '../../hooks/useAuth';

const Instructors = () => {
  const {darkMode} = useAuth();
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://assignment-12-server-woad.vercel.app/users")
      .then(res => res.json())
      .then(data => {
        const filteredInstructors = data.filter(user => user.role === "instructor");
        setInstructors(filteredInstructors);
        setLoading(false);
      } )
      .catch(error => {console.log(error)
        setLoading(false);
        });
  }, []);

  if(loading){
    return <Loader></Loader>;
  }

  return (
    <div className="mb-12">
      <Helmet>
        <title>The Language Club | Instructors</title>
      </Helmet>
      <h2 className={darkMode?"text-neutral-50 text-5xl text-center py-12":"text-5xl text-center py-12"}>All Instructors Information</h2>
      <div className="grid md:grid-cols-4 gap-8 px-12">
        {instructors.map(instructor => (
          <Instructor key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
