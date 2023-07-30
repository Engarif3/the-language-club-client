import React, { useState, useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import {useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateClass = () => {
  const { id } = useParams();
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();

  const [className, setClassName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [classImage, setClassImage] = useState('');
  const [email, setEmail] = useState('');
  const [price, setPrice] = useState('');
  const [seats, setSeats] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosSecure.get(`/classes/${id}`);
        const classData = res.data;
        setClassName(classData.nameClass);
        setClassImage(classData.classImage);
        setInstructorName(classData.instructorName);
        setEmail(classData.email);
        setPrice(classData.price);
        setSeats(classData.seats);
      } catch (error) {
        console.error('Error fetching class data:', error);
      }
    };

    fetchData();
  }, [axiosSecure, id]);

  const handleUpdate = async () => {
    try {
      const updatedClass = {
        name: className,
        classImage: classImage,
        instructorName: instructorName,
        email: email,
        price: parseFloat(price),
        seats: parseFloat(seats),
      };

      await axiosSecure.put(`/classes/${id}`, updatedClass);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Class updated successfully',
      });
        navigate('/dashboard/myclass'); 
    } catch (error) {
      console.error('Error updating class:', error);
    }
  };

  return (
    <div>
      <h1 className='text-2xl text-center'>Update Class</h1>
      <form className='mx-auto'>
        <label>Class Name:</label>
        <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} />
        
        <label>Class Image:</label>
        <input type="url" value={classImage} onChange={(e) => setClassImage(e.target.value)} />

        <label>Instructor Name:</label>
        <input type="text" readOnly value={instructorName} onChange={(e) => setInstructorName(e.target.value)} />

        <label>Email:</label>
        <input type="email"  readOnly value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

        <label>Seats:</label>
        <input type="number" value={seats} onChange={(e) => setSeats(e.target.value)} />

        <button className='btn btn-info' type="button" onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
};

export default UpdateClass;

