import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardButton = ({url}) => {
    return (
        
            <button className="group relative grid overflow-hidden rounded-full px-4  shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 mb-[9px]">
                  <span>
                    <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                  </span>
                  <span className="backdrop absolute inset-[1px] rounded-full bg-black transition-colors duration-200 group-hover:bg-slate-800" />
                  <span className=" z-10 text-red-600"><li><NavLink className=" aria-[current=page]:text-blue-400" to={url}>Dashboard</NavLink></li></span>
                </button>
        
    );
};

export default DashboardButton;