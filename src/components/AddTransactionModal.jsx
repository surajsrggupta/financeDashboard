import { useState } from "react";
import { useApp } from "../hooks/useApp.js";

const AddTransactionModal = ({ isOpen, onClose }) => {
  const { addTransaction } = useApp();
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    type: "expense",
    date: new Date().toISOString().split("T")[0], 
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.amount || !formData.category)
      return alert("Bhai, saari details bharo!");

    addTransaction({
      id: Date.now(),
      ...formData,
      amount: parseFloat(formData.amount),
    });

    onClose(); 
    setFormData({
      amount: "",
      category: "",
      type: "expense",
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            Add New Transaction
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount (₹)
            </label>
            <input
              type="number"
              className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 500"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Food, Salary, Rent"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <select
                className="w-full border rounded-lg p-2.5 outline-none"
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                className="w-full border rounded-lg p-2.5 outline-none"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all mt-4 shadow-lg shadow-blue-200"
          >
            Save Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;
