import React, {useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
// import img1 from "../../assets/home/03.png"

const ExtraSection = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [axiosSecure] = useAxiosSecure();
    const { data: items = [], refetch } = useQuery(['classes'], async () => {
      const res = await axiosSecure.get('/classes');
      return res.data;
    });
    return (
       <div>
        {items.map(item => (
  <motion.div layoutId={item._id} onClick={() => setSelectedId(item.id)}>
    <motion.h5>{item.nameClass}</motion.h5>
    <motion.h2>{item.instructorName}</motion.h2>
  </motion.div>
))}

<AnimatePresence>
  {selectedId && (
    <motion.div layoutId={selectedId}>
      <motion.h5>{item.nameClass}</motion.h5>
      <motion.h2>{item.instructorName}</motion.h2>
      <motion.button onClick={() => setSelectedId(null)} />
    </motion.div>
  )}
</AnimatePresence>
       </div>
    );
};

export default ExtraSection;