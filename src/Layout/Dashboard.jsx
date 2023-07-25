
import { NavLink, Outlet } from "react-router-dom";
import {
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUsers,
  FaBook,
} from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import useInstructor from "../hooks/useInstructor";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [open, setOpen] = useState(true);

  return (
    <div>
      <NavBar></NavBar>
      <section className="flex gap-6">
        <div
          className={`bg-[#0e0e0e] min-h-screen ${
            open ? "w-72" : "w-12"
          } duration-500 text-gray-100 px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={24}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative menu p-2 ">
                     
                        {isAdmin ? <>
                             <li>{open&&<NavLink to="/dashboard/adminhome"><FaHome></FaHome>Admin Home</NavLink>}</li>
                             <li>{open&&<NavLink to="/dashboard/manage-class"> <FaBook></FaBook> Manage Courses</NavLink>}</li>
                             <li>{open&&<NavLink to="/dashboard/manage-users"><FaUsers></FaUsers> Manage Users</NavLink>}</li>
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
        </div>
        <div className=" text-xl text-gray-900 mx-auto ">
          <div className="mx-auto"><Outlet></Outlet></div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
