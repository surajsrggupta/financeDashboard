import { useApp } from "../hooks/useApp.js";

const StatsGrid = () => {
  const { stats } = useApp();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
        <p className="text-sm text-gray-500 uppercase font-bold">
          Total Balance
        </p>
        <h3 className="text-2xl font-bold">₹{stats.balance}</h3>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
        <p className="text-sm text-gray-500 uppercase font-bold">Income</p>
        <h3 className="text-2xl font-bold text-green-600">+ ₹{stats.income}</h3>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
        <p className="text-sm text-gray-500 uppercase font-bold">Expenses</p>
        <h3 className="text-2xl font-bold text-red-600">- ₹{stats.expense}</h3>
      </div>
    </div>
  );
};

export default StatsGrid;
