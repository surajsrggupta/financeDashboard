import { useApp } from "../hooks/useApp.js";
import {
  FiLayout,
  FiList,
  FiPieChart,
  FiMoon,
  FiSun,
  FiUser,
} from "react-icons/fi"; // npm install react-icons

const Layout = ({ children }) => {
  const { role, setRole, darkMode, setDarkMode } = useApp();

  const navItems = [
    { name: "Dashboard", icon: <FiLayout /> },
    { name: "Transactions", icon: <FiList /> },
    { name: "Analytics", icon: <FiPieChart /> },
  ];

  return (
    <div
      className={`flex h-screen ${darkMode ? "bg-slate-900 text-white" : "bg-gray-50 text-gray-900"} transition-colors duration-300`}
    >
      <aside
        className={`w-64 border-r ${darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200"} hidden md:flex flex-col`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-600 tracking-tight">
            Fast{" "}
            <span className="text-xs align-top font-medium text-gray-400 italic">
              FinTech
            </span>
          </h2>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${item.name === "Dashboard" ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "hover:bg-gray-100"}`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100 italic text-xs text-center text-gray-400">
          Built by Suraj Gupta
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header
          className={`h-16 flex items-center justify-between px-8 shadow-sm ${darkMode ? "bg-slate-800 border-b border-slate-700" : "bg-white"}`}
        >
          <div className="flex items-center gap-4">
            <span className="md:hidden text-2xl">☰</span>{" "}
            {/* Mobile Menu Trigger */}
            <h1 className="font-bold text-lg hidden md:block">
              Financial Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-6">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>

            {/* Role Switcher */}
            <div className="flex items-center bg-gray-100 rounded-full p-1 border">
              <button
                onClick={() => setRole("viewer")}
                className={`px-4 py-1 text-xs font-bold rounded-full transition-all ${role === "viewer" ? "bg-white shadow text-blue-600" : "text-gray-400"}`}
              >
                VIEWER
              </button>
              <button
                onClick={() => setRole("admin")}
                className={`px-4 py-1 text-xs font-bold rounded-full transition-all ${role === "admin" ? "bg-white shadow text-blue-600" : "text-gray-400"}`}
              >
                ADMIN
              </button>
            </div>

            <div className="flex items-center gap-2 border-l pl-6">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <FiUser />
              </div>
              <span className="text-sm font-medium hidden sm:block">
                Suraj Gupta
              </span>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-8 bg-transparent">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
