import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
// import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


    const handleLogOut = () => {
        logOut()
            .then(() => navigate("/"))
            .catch(error => console.log(error));
    };



    const navOptions = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/instructors">Instructors</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            {user && ( 
                <div className="flex gap-10">
                    {isAdmin ? (
                        <li><Link to="/dashboard/adminhome">Dashboard</Link></li>
                    ) : isInstructor ? (
                        <li><Link to="/dashboard/instructorhome">Dashboard</Link></li>
                    ) : (
                        <li><Link to="/dashboard/userhome">Dashboard</Link></li>
                    )}
                    <button className="btn btn-circle">
                <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
              </button>
                    <button onClick={handleLogOut} className="btn btn-primary mb-2">LogOut</button>
                    
                </div>
            )}
        
            {!user && ( 
                <li><Link to="/login" > <btn className="btn btn-primary">Login</btn> </Link></li>
            )}
        </>
    );

    return (
        <>
            <div className="navbar bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">The Language Club</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBar;
