import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function ExpenseForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    date: new Date().toISOString().slice(0, 10),
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount) return;
    onAdd({
      ...form,
      amount: parseFloat(form.amount),
      id: Date.now(),
    });
    setForm({ title: "", amount: "", date: new Date().toISOString().slice(0, 10) });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 mb-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Thêm khoản chi tiêu</h2>
      <div className="flex flex-col gap-4">
        <input
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          placeholder="Tên khoản chi (vd: Mua sắm)"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          placeholder="Số tiền (vd: 35000)"
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
        />
        <input
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-700 hover:bg-teal-600 text-white font-semibold rounded-lg p-3 flex items-center justify-center transition duration-200"
        >
          <FaPlus className="mr-2" /> Thêm
        </button>
      </div>
    </form>
  );
}
