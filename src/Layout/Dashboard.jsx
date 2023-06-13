import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaCalendarAlt, FaHome,  FaUsers, FaBook } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
  

    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content -ml-28 text-xs fit">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden ">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-stone-700 text-red-600 w-4/6 px-6">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-2 w-80">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/manage-class"> <FaBook></FaBook> Manage Class</NavLink></li>
                            <li><NavLink to="/dashboard/manage-users"><FaUsers></FaUsers> Manage Users</NavLink></li>

                            
                        </> : isInstructor? <>
                            <li><NavLink to="/dashboard/instructorhome"><FaHome></FaHome> Instructor Home</NavLink></li>
                            <li><NavLink to="/dashboard/addclass"><FaCalendarAlt></FaCalendarAlt> Add A Class</NavLink></li>
                            <li><NavLink to="/dashboard/myclass"><FaCalendarAlt></FaCalendarAlt> My Class</NavLink></li>
                            <li><NavLink to="/dashboard/enrolled-students"><FaCalendarAlt></FaCalendarAlt> Total Enrolled Students</NavLink></li>
                            <li><NavLink to="/dashboard/feedback"><FaCalendarAlt></FaCalendarAlt> Feedback from Admin</NavLink></li>
    
                        </> : <>
                            <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> Student Home</NavLink></li>
                            <li><NavLink to="/dashboard/my-selected-classes"><FaCalendarAlt></FaCalendarAlt> My Selected Classes</NavLink></li>
                            <li><NavLink to="/dashboard/my-enrolled-classes"><FaCalendarAlt></FaCalendarAlt> My Enrolled Classes</NavLink></li>
                            <li><NavLink to="/dashboard/payment-history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            {/* <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>

                            </li> */}
                        </>
                    }
                </ul>

            </div>
        </div>
         <Footer></Footer>
        </div>
    );
};

export default Dashboard;