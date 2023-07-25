import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import Container from "../../../Container";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const handleLogOut = () => {
    logOut()
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <div className="navbar bg-teal-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/instructors">Instructors</Link>
              </li>
              <li>
                <Link to="/classes">Courses</Link>
              </li>
            </ul>
          </div>
          <div className="md:block lg:block hidden p-0 m-0">

          <a className="btn btn-ghost  normal-case text-xl text-center my-auto">The Language Club</a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/instructors">Instructors</Link>
            </li>
            <li>
              <Link to="/classes">Courses</Link>
            </li>
          </ul>
        </div>

        <div>
          {user && (
            <ul className="menu menu-horizontal px-1">
              {isAdmin ? (
              
                  <li><Link to="/dashboard/adminhome">Dashboard</Link></li>
               
              ) : isInstructor ? (
               
                  <li><Link to="/dashboard/instructorhome">Dashboard</Link></li>
                
              ) : (
                
                  <li><Link to="/dashboard/userhome">Dashboard</Link></li>
               
              )}
            </ul>
          )}
          
        </div>
        
       <div className="navbar-end space-x-4">
       {
          user&& <div className="hidden md:block lg:block"><button className="btn btn-circle">
          <img
            className="w-10 h-10 text-center rounded-full"
            src={user?.photoURL}
            alt=""
          />
        </button></div>
        }

        {!user ? <Link to="/login" >
          <a className="btn btn-outline btn-sm">Login</a>
        </Link>:<Link onClick={handleLogOut}>
          <a className="btn btn-outline btn-sm">Logout</a>
        </Link>}
       </div>
        
        
      </div>
    </Container>
  );
};

export default NavBar;
