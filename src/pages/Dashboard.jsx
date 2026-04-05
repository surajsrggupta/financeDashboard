import { useState } from "react";
import StatsGrid from "../components/StatsGrid";
import TransactionList from "../components/TransactionList";
import DashboardCharts from "../components/DashboardCharts";
import Insights from "../components/Insights";
import AddTransactionModal from "../components/AddTransactionModal";
import { useApp } from "../hooks/useApp.js";


const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { role } = useApp();

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10">
      {/* Header with Add Button */}

      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-gray-500 text-sm font-medium uppercase tracking-wider">
            Overview
          </h2>
          <h1 className="text-3xl font-extrabold text-gray-900">
            Finance Dashboard
          </h1>
        </div>
        
        {role === "admin" && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1"
          >
            + Add Transaction
          </button>
        )}
      </div>

      {/* 1. Summary Stats */}
      <StatsGrid />

      {/* 2. Visual Charts */}
      <DashboardCharts />

      {/* 3. Main Data Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TransactionList />
        </div>
        <div className="space-y-6">
          <Insights />
        </div>
      </div>

      {/* Modal */}
      <AddTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Dashboard;
