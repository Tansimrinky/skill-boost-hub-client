import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="navbar bg-base-100 rounded-box">
      <div className="flex-1 px-2 lg:flex-none">
        <img
          className="h-[30px]"
          src="https://i.ibb.co/85n48Xm/png-clipart-training-and-development-computer-icons-learning-education-skill-icon-blue-logo.png"
          alt=""
        />
        <a className="text-lg font-bold">
          Skill<span className="text-blue-500">Boost</span> Hub
        </a>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="hidden md:flex items-center gap-2 text-slate-600 font-bold">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/classes">All Classes</Link>
          </div>
          <div>
            <Link to="/teach">Teach Now</Link>
          </div>

          {/* <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost rounded-btn">Dropdown</label>
              <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li><a>Item 1</a></li> 
                <li><a>Item 2</a></li>
              </ul>
            </div> */}
          {user ? (
            // If the user is logged in, show profile picture and dropdown
            <div className="flex justify-end flex-1 px-2">
              <div className="flex items-stretch">
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost rounded-btn">
                    <img
                      className="h-[50px] w-[50px] rounded-full"
                      src="https://i.ibb.co/bdhCxNX/download.jpg"
                      alt=""
                    />
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 "
                  >
                    <span className="username font-bold text-slate-600">{user.displayName}</span>
                    <div  className="font-bold text-slate-600">
                      <Link to="/dashboard">Dashboard</Link>
                    </div>
                    <button className="font-bold text-slate-600" onClick={handleLogOut}>Logout</button>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            // If the user is not logged in, show Sign In button
            <Link to="/signIn">Sign In</Link>
          )}
        </div>
      </div>

      <div className="grid md:hidden ">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn m-1">
          <FiAlignJustify />
          </label>
          <div
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-slate-600 font-bold"
          >
             <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/classes">All Classes</Link>
          </div>
          <div>
            <Link to="/teach">Teach Now</Link>
          </div>
         
         </div>
        </div>
      </div>
      <div className="grid md:hidden">
      {user ? (
            // If the user is logged in, show profile picture and dropdown
            <div className="flex justify-end flex-1 px-2">
              <div className="flex items-stretch">
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost rounded-btn">
                    <img
                      className="h-[50px] w-[50px] rounded-full"
                      src="https://i.ibb.co/bdhCxNX/download.jpg"
                      alt=""
                    />
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 font-bold text-slate-600 text-center"
                  >
                    <span className="username">{user.displayName}</span>
                    <div>
                      <Link to="/dashboard">Dashboard</Link>
                    </div>
                    <button onClick={handleLogOut}>Logout</button>
                    <div></div>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            // If the user is not logged in, show Sign In button
            <Link to="/signIn">Sign In</Link>
          )}
      </div>
    </div>
  );
};

export default Navbar;
