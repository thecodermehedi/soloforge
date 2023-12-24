import {NavLink} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const SideBar = ({SideNav, isSidebarOpen}) => {
  const {logOut} = useAuth();
  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 min-h-screen pt-14 transition-transform -translate-x-full sm:translate-x-0 bg-white ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-label="Sidebar"
    >
      <div className="h-screen px-3 pb-4 overflow-y-auto bg-gray-50 text-black pt-5">
        <ul className="space-y-2 font-medium">
          {SideNav?.map((item, index) => (
            <li key={index} className="group ">
              <NavLink
                to={item.path}
                end={true}
                className={({isActive}) =>
                  isActive
                    ? "flex items-center p-2 space-x-2 w-full bg-black text-white"
                    : "flex items-center p-2 space-x-2 w-full hover:bg-black hover:text-white transition duration-300 ease-in-out"
                }
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
          <button
            onClick={logOut}
            className="flex items-center p-2 space-x-2 w-full hover:bg-black hover:text-white transition duration-300 ease-in-out border bg-gray-200"
          >
            <span>
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
                  <path d="M9 12h12l-3-3m0 6l3-3" />
                </g>
              </svg>
            </span>
            <span>Logout</span>
          </button>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
