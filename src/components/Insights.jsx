import { useApp } from "../hooks/useApp.js";

const Insights = () => {
  const { transactions } = useApp();

  const expenses = transactions.filter((t) => t.type === "expense");
  const maxExpense =
    expenses.length > 0
      ? expenses.reduce((prev, current) =>
          prev.amount > current.amount ? prev : current,
        )
      : null;

  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl text-white shadow-lg">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <span>✨</span> AI Insights
      </h3>
      {maxExpense ? (
        <div className="space-y-4">
          <p className="text-blue-100 text-sm leading-relaxed">
            Bhai, tera sabse zyada kharcha{" "}
            <span className="font-bold text-white uppercase">
              {maxExpense.category}
            </span>{" "}
            par ho raha hai (₹{maxExpense.amount}). Agli baar thoda sambhal ke!
          </p>
          <div className="bg-white/10 p-3 rounded-lg border border-white/20">
            <p className="text-xs text-blue-200">
              Tip: Set a budget for {maxExpense.category} to save more this
              month.
            </p>
          </div>
        </div>
      ) : (
        <p className="text-blue-100 text-sm italic text-center py-4">
          No insights available yet. Add some expenses!
        </p>
      )}
    </div>
  );
};

export default Insights;
