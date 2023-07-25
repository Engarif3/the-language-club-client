
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUsers,
  FaBook,
} from "react-icons/fa";
import {BiLogOut} from "react-icons/bi"
import {RiAdminFill} from "react-icons/ri"
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { HiMenuAlt3 } from "react-icons/hi";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [open, setOpen] = useState(true);
  const {logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  return (

      <section className="flex md:gap-6">
        <div
          className={`bg-sky-900 min-h-screen ${
            open ? "w-72" : "w-12"
          } duration-100 text-white px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={24}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4  menu p-2 rounded-2xl bg-slate-600">
                     
                        {isAdmin ? <>
                             <li>{open&&<NavLink to="/dashboard/adminhome"><RiAdminFill className="text-red-500"></RiAdminFill>Admin Home</NavLink>}</li>
                             <li>{open&&<NavLink to="/dashboard/manage-class"> <FaBook className="text-red-500"></FaBook> Manage Courses</NavLink>}</li>
                             <li>{open&&<NavLink to="/dashboard/manage-users"><FaUsers className="text-red-500"></FaUsers> Manage Users</NavLink>}</li>
                         </> : isInstructor? <>
                             <li>{open&&<NavLink to="/dashboard/instructorhome"><FaHome></FaHome> Instructor Home</NavLink>}</li>
                             <li>{open&&<NavLink to="/dashboard/addclass"><FaCalendarAlt></FaCalendarAlt> Add A Course</NavLink>}</li>
                             <li>{open&&<NavLink to="/dashboard/myclass"><FaBook></FaBook> My Courses</NavLink>}</li>
                            
                         </> : <>
                             <li>{open&&<NavLink to="/dashboard/userhome"><FaHome></FaHome> Student Home</NavLink>}</li>
                             <li>{open&&<NavLink to="/dashboard/my-selected-classes"><FaCalendarAlt></FaCalendarAlt> My Selected Courses</NavLink>}</li>
                             <li>{open&&<NavLink to="/dashboard/my-enrolled-classes"><FaCalendarAlt></FaCalendarAlt> My Enrolled Courses</NavLink>}</li>
                             <li>{open&&<NavLink to="/dashboard/payment-history"><FaWallet></FaWallet> Payment History</NavLink>}</li>
                         </>
                     }
          </div>
          {open&&<hr className="my-12 text-red-600"  />}
          <div className="mt-4 flex flex-col gap-4  menu p-2  rounded-2xl bg-slate-600">
          <li>{open&&<NavLink to="/"><FaHome size={24} className="text-red-500"></FaHome>Home</NavLink>}</li>
          <li onClick={handleLogOut}>{open&&<p><BiLogOut size={24} className="text-red-500"></BiLogOut>Logout</p>}</li>
          </div>

        </div>
        <div className=" text-xl text-gray-900 mx-auto ">
          <div className="mx-auto"><Outlet></Outlet></div>
        </div>
      </section>
      
  );
};

export default Dashboard;
