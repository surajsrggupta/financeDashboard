import { createContext,  useState, useMemo } from "react";
import { transactionsData } from "../data/mockData";

 const AppContext = createContext();
 const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(transactionsData);
  const [role, setRole] = useState("admin");
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  const stats = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((acc, curr) => acc + curr.amount, 0);

    const expense = transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, curr) => acc + curr.amount, 0);

    return {
      income,
      expense,
      balance: income - expense,
    };
  }, [transactions]);

  const addTransaction = (newTxn) => {
    if (role !== "admin") return alert("Access Denied: Viewers can't add!");
    setTransactions([newTxn, ...transactions]);
  };

  return (
    <AppContext.Provider
      value={{
        transactions,
        darkMode,
        setDarkMode,
        role,
        setRole,
        filter,
        setFilter,
        stats,
        addTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider}