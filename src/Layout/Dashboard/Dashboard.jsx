import { Outlet, NavLink } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { SiGoogleclassroom } from "react-icons/si";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {

  const isAdmin = true;
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className=" min-h-screen bg-base-300">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/teacher-request">Teacher Request</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-classes">All Classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/profile">Profile</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/my-enroll-class">
                <SiGoogleclassroom />
                  My Enroll Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-profile">
                  <CgProfile />
                  My Profile
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
            <FaHome />
              Home</NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
