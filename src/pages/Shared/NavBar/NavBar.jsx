import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
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
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <div className="md:flex justify-end md:gap-48">
    <div className="md:flex">
    <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Courses</Link>
      </li>
    </div>
    
    <div>
    {user && (
        <div className="flex  md:gap-10">
          {isAdmin ? (
            <li>
              <Link to="/dashboard/adminhome">Dashboard</Link>
            </li>
          ) : isInstructor ? (
            <li>
              <Link to="/dashboard/instructorhome">Dashboard</Link>
            </li>
          ) : (
            <li>
              <Link to="/dashboard/userhome">Dashboard</Link>
            </li>
          )}
         <div className="flex md:gap-2">
         <button className="btn btn-circle md:my-4 hidden md:block">
            <img
              className="w-10 h-10 m-1 rounded-full "
              src={user.photoURL}
              alt=""
            />
          </button>
          <div className="flex">
          <button onClick={handleLogOut} className="btn bg-fuchsia-900 md:my-4">
            LogOut
          </button>
          </div>
         </div>
        </div>
      )}

      {!user && (
        <li>
          <Link to="/login" className=" bg-blue-950">
            <button className="btn bg-fuchsia-900 mb-2">Login</button>{" "}
          </Link>
        </li>
      )}
    </div>
      
    </div>
  );

  return (
    <>
      <div className="navbar bg-blue-950 text-white px-4 md:px-0">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-950 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">The Language Club</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
