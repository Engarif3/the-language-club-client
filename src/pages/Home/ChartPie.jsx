import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import stat from "../../assets/stat3.gif";
import "./ChartPie.css"

const ChartPie = () => {
  const { darkMode } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["classes"], async () => {
    // setLoading(true);
    const res = await axiosSecure.get("/classes");
    // setLoading(false);
    return res.data;
  });

  const instructorUsers = users.filter((user) => user.status === "approved");
  const sortedInstructorUsers = instructorUsers.reduce((acc, user) => {
    const existingUser = acc.find((item) => item.nameClass === user.nameClass);
    if (existingUser) {
      existingUser.seats += user.seats; // Summing the seats for the same nameClass
    } else {
      acc.push({ ...user }); // Creating a new entry for a unique nameClass
    }
    return acc;
  }, []);

  //   const data = [
  //     { name: "Group A", value: 400 },
  //     { name: "Group B", value: 300 },
  //     { name: "Group C", value: 300 },
  //     { name: "Group D", value: 200 }
  //   ];
  const data = sortedInstructorUsers.map((user) => {
    return {
      name: user.nameClass,
      value: user.seats,
    };
  });

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#84cc16",
    "#f43f5e",
    "#8b5cf6",
    "#0e7490",
    "#0f766e",
    "#a78bfa",
    "#f472b6",
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        // textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="overflow-hidden">
      <h2
        className={
          darkMode
            ? "text-neutral-50 text-5xl text-center my-32"
            : "text-5xl text-center my-32"
        }
      >
        Students involvement in courses
      </h2>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-12 md:gap-28 items-center  rounded-2xl md:py-20 w-full">
        <div className="rounded-lg md:w-[40rem]">
          <img className="rounded-lg" src={stat} alt="stat gif" />
        </div>
        <div className="flex flex-col justify-center items-center ml-16 md:ml-0 ">
          <PieChart width={480} height={480}>
            <Tooltip />
            <Legend verticalAlign="top" height={90} width={380}/>
            <Pie
              data={data}
              cx={200}
              cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={175}
              fill="#8884d8"
              dataKey="value"
              className="mb-0 cursor-pointer"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <h2
            className={
              darkMode
                ? "text-white mr-10 mt-8 font-semibold text-lg italic"
                : "text-black mr-10 mt-8 font-semibold text-lg italic"
            }
          >
            Course Vs No. of Students
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ChartPie;
