import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalExpense from "./components/TotalExpense";

export default function App() {
  
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Thêm 
  const handleAdd = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  // Xoá
  const handleDelete = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  // Cập nhật khoản chi
  const handleUpdate = (updated) => {
    setExpenses(expenses.map((e) => (e.id === updated.id ? updated : e)));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-teal-700">💸 Quản lý chi tiêu</h1>
        <ExpenseForm onAdd={handleAdd} />
        <TotalExpense expenses={expenses} />
        <ExpenseList expenses={expenses} onDelete={handleDelete} onUpdate={handleUpdate} />
      </div>
    </div>
  );
}
