import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

function Dashboard(props) {
  const currentTab = props.tab;

  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        {/* Tabs */}
        <div className="py-4 border-b-2 border-gray-300">
          <ul className="flex flex-row">
            {/* Notifications */}
            {currentTab === "notifications" ? (
              <li className="p-2 mr-4 bg-black text-white font-semibold rounded-md">
                Notifications
              </li>
            ) : (
              <Link to={"/dashboard/employee/notifications"}>
                <li className="p-2 mr-4 font-semibold rounded-md">
                  Notifications
                </li>
              </Link>
            )}
            {/* Leave Management */}
            {currentTab === "leave-management" ? (
              <li className="p-2 mr-4 bg-black text-white font-semibold rounded-md">
                Leave Management
              </li>
            ) : (
              <Link to={"/dashboard/employee/leave-management"}>
                <li className="p-2 mr-4 font-semibold rounded-md">
                  Leave Management
                </li>
              </Link>
            )}
            {/* Documents */}
            {currentTab === "documents" ? (
              <li className="p-2 mr-4 bg-black text-white font-semibold rounded-md">
                Documents
              </li>
            ) : (
              <Link to={"/dashboard/employee/documents"}>
                <li className="p-2 mr-4 font-semibold rounded-md">Documents</li>
              </Link>
            )}
            {/* Profile */}
            {currentTab === "profile" ? (
              <li className="p-2 mr-4 bg-black text-white font-semibold rounded-md">
                Profile
              </li>
            ) : (
              <Link to={"/dashboard/employee/profile"}>
                <li className="p-2 mr-4 font-semibold rounded-md">Profile</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
