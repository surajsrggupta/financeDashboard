import { useApp } from "../hooks/useApp.js";

const TransactionList = () => {
  const { transactions, filter, setFilter, role } = useApp();

  // 1. Filtering Logic
  const filteredData = transactions.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Recent Transactions</h2>

        <div className="flex gap-4 items-center">
          {/* Filter Dropdown */}
          <select
            className="border p-2 rounded-lg text-sm bg-gray-50 outline-none"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Transactions</option>
            <option value="income">Income Only</option>
            <option value="expense">Expense Only</option>
          </select>

          {/* Role Based Button: Sirf Admin ko dikhega */}
          {role === "admin" && (
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
              + Add New
            </button>
          )}
        </div>
      </div>

      {/* 2. Table UI */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 border-b text-sm">
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Category</th>
              <th className="pb-3 font-medium">Type</th>
              <th className="pb-3 font-medium text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredData.length > 0 ? (
              filteredData.map((t) => (
                <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-sm text-gray-600">{t.date}</td>
                  <td className="py-4 font-medium text-gray-800">
                    {t.category}
                  </td>
                  <td className="py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        t.type === "income"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {t.type.toUpperCase()}
                    </span>
                  </td>
                  <td
                    className={`py-4 text-right font-bold ${
                      t.type === "income" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {t.type === "income" ? "+" : "-"} ₹{t.amount}
                  </td>
                </tr>
              ))
            ) : (
              /* Empty State: Requirement #6 */
              <tr>
                <td colSpan="4" className="py-10 text-center text-gray-400">
                  No transactions found for this filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionList;
