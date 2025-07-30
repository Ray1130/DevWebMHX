import React, { useState } from "react";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";

export default function ExpenseList({ expenses, onDelete, onUpdate }) {
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", amount: "", date: "" });

  const startEdit = (expense) => {
    setEditId(expense.id);
    setEditForm({
      title: expense.title,
      amount: expense.amount,
      date: expense.date,
    });
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate({ ...editForm, id: editId, amount: parseFloat(editForm.amount) });
    setEditId(null);
  };

  return (
    <div className="space-y-4">
      {expenses.map((e) => (
        <div
          key={e.id}
          className="p-4 bg-white rounded-xl shadow flex justify-between items-start gap-4 hover:shadow-md transition"
        >
          {editId === e.id ? (
            <div className="flex-1 flex flex-col gap-2">
              <input
                className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-teal-400"
                name="title"
                value={editForm.title}
                onChange={handleChange}
              />
              <input
                className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-teal-400"
                name="amount"
                type="number"
                value={editForm.amount}
                onChange={handleChange}
              />
              <input
                className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-teal-400"
                name="date"
                type="date"
                value={editForm.date}
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className="flex-1">
              <p className="text-lg font-medium text-gray-800">{e.title}</p>
              <p className="text-sm text-gray-600">
                💸 {e.amount.toLocaleString()} VND — 🗓 {e.date}
              </p>
            </div>
          )}
          <div className="flex flex-col gap-2">
            {editId === e.id ? (
              <button
                onClick={handleSave}
                className="text-green-500 hover:text-green-700"
                title="Lưu"
              >
                <FaSave />
              </button>
            ) : (
              <button
                onClick={() => startEdit(e)}
                className="text-yellow-500 hover:text-yellow-600"
                title="Sửa"
              >
                <FaEdit />
              </button>
            )}
            <button
              onClick={() => onDelete(e.id)}
              className="text-red-500 hover:text-red-600"
              title="Xoá"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
