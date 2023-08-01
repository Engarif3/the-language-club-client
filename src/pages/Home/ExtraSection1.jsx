// import "./styles.css";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const ExtraSection1 = () => {
    const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['classes'], async () => {
    // setLoading(true);
    const res = await axiosSecure.get('/classes');
    // setLoading(false);
    return res.data;
  });
  const instructorUsers = users.filter(user => user.status === "approved")

//   const data = [
//     { name: "Group A", value: 400 },
//     { name: "Group B", value: 300 },
//     { name: "Group C", value: 300 },
//     { name: "Group D", value: 200 }
//   ];
const data = instructorUsers.map((user) => {
    return {
      name: user.nameClass,
      value: user.seats,
    };
  })
  
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
    
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="flex flex-col justify-center items-center">
        <PieChart width={450} height={450} >
         <Tooltip />
         <Legend verticalAlign="top" height={56}/>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={160}
        fill="#8884d8"
        dataKey="value"
        className="mb-0"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
  
      </Pie>
    </PieChart>
            <h2 className="text-white text-center">Course Vs No of Student</h2>
    </div>
  );
}

export default ExtraSection1;