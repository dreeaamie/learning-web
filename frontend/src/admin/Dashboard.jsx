// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../../public/logo.webp";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { BACKEND_URL } from "../utils/utils";
// function Dashboard() {
//   const handleLogout = async () => {
//     try {
//       const response = await axios.get(`${BACKEND_URL}/admin/logout`, {
//         withCredentials: true,
//       });
//       toast.success(response.data.message);
//       localStorage.removeItem("admin");
//     } catch (error) {
//       console.log("Error in logging out ", error);
//       toast.error(error.response.data.errors || "Error in logging out");
//     }
//   };
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-100 p-5">
//         <div className="flex items-center flex-col mb-10">
//           <img src={logo} alt="Profile" className="rounded-full h-20 w-20" />
//           <h2 className="text-lg font-semibold mt-4">I'm Admin</h2>
//         </div>
//         <nav className="flex flex-col space-y-4">
//           <Link to="/admin/our-courses">
//             <button className="w-full bg-green-700 hover:bg-green-600 text-white py-2 rounded">
//               Our Courses
//             </button>
//           </Link>
//           <Link to="/admin/create-course">
//             <button className="w-full bg-orange-500 hover:bg-blue-600 text-white py-2 rounded">
//               Create Course
//             </button>
//           </Link>

//           <Link to="/">
//             <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded">
//               Home
//             </button>
//           </Link>
//           <Link to="/admin/login">
//             <button
//               onClick={handleLogout}
//               className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded"
//             >
//               Logout
//             </button>
//           </Link>
//         </nav>
//       </div>
//       <div className="flex h-screen items-center justify-center ml-[40%]">
//         Welcome!!!
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GraduationCap, BookOpen, PlusCircle, Home, LogOut } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { BACKEND_URL } from "../utils/utils";
import logo from "../../public/logo.webp";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/admin/logout`, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      localStorage.removeItem("admin");
      navigate("/admin/login");
    } catch (error) {
      console.log("Error in logging out ", error);
      toast.error(error.response?.data?.errors || "Error in logging out");
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Sidebar */}
      <aside className="w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-6 flex flex-col justify-between shadow-sm">
        <div>
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-10">
            <img
              src={logo}
              alt="Admin Logo"
              className="rounded-full h-20 w-20 shadow-md mb-3"
            />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              I’m Admin
            </h2>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col space-y-3">
            <Link
              to="/admin/our-courses"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-sm"
            >
              <BookOpen className="h-5 w-5" /> Our Courses
            </Link>

            <Link
              to="/admin/create-course"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition shadow-sm"
            >
              <PlusCircle className="h-5 w-5" /> Create Course
            </Link>

            <Link
              to="/"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-rose-500 text-white hover:bg-rose-600 transition shadow-sm"
            >
              <Home className="h-5 w-5" /> Home
            </Link>
          </nav>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 mt-6 px-4 py-3 rounded-xl bg-yellow-500 text-white hover:bg-yellow-600 transition shadow-sm"
        >
          <LogOut className="h-5 w-5" /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
          Welcome Back, Admin 👋
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="text-gray-500 dark:text-gray-400 text-sm">Revenue</p>
            <h3 className="text-2xl font-bold mt-1 text-emerald-600">₹1,24,500</h3>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="text-gray-500 dark:text-gray-400 text-sm">Students</p>
            <h3 className="text-2xl font-bold mt-1 text-blue-600">1,280</h3>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="text-gray-500 dark:text-gray-400 text-sm">Courses</p>
            <h3 className="text-2xl font-bold mt-1 text-orange-500">18</h3>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md hover:shadow-lg transition">
            <p className="text-gray-500 dark:text-gray-400 text-sm">Feedbacks</p>
            <h3 className="text-2xl font-bold mt-1 text-rose-500">230+</h3>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-md p-10 text-center text-lg text-gray-700 dark:text-gray-300">
          <p>Welcome to your admin dashboard! Here you can manage courses, track revenue, and monitor students.</p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
