

// import { useState, useEffect } from "react";
// import PopularInstructor from "./PopularInstructor";

// const PopularInstructors = () => {
//   const [lessons, setLessons] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch data from the first API endpoint
//     fetch("http://localhost:5000/classes")
//       .then((res) => res.json())
//       .then((data) => {
//         const sortedLessons = data.sort((a, b) => b.seats - a.seats);
//         setLessons(sortedLessons);
//       })
//       .catch((error) => console.log(error));

//     // Fetch data from the second API endpoint
//     fetch("http://localhost:5000/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <section>
//       <h2 className="text-5xl text-center">Popular Instructors</h2>
//       <div className="grid md:grid-cols-3 gap-8 mx-auto md:p-12">
//         {lessons.slice(0, 6).map((lesson, index) => {
//           const user = users[index];
//           return (
//             <PopularInstructor
//               key={lesson._id}
//               item={lesson}
//               userData={user}
//             />
//           );
//         })}
//       </div>
      
//     </section>
//   );
// };

// export default PopularInstructors;


import React from 'react';
import PopularInstructor from './PopularInstructor';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PopularInstructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['combinedData'], async () => {
    const res = await axiosSecure.get('/combinedData');
    return res.data;
  });

  // Filter users by email to remove duplicates
  const uniqueEmails = [...new Set(users.map(user => user.instructorEmail))];
  const filteredUsers = uniqueEmails.map(email =>
    users.find(user => user.instructorEmail === email)
  );

  // Sort users based on seats number
  const sortedUsers = filteredUsers.sort((a, b) => b.seats - a.seats);

  console.log(sortedUsers);
  return (
    <div>
      <div className='grid md:grid-cols-3 gap-8 mx-auto md:p-12'>
        {sortedUsers.slice(0, 6).map((item) => (
          <PopularInstructor key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;

