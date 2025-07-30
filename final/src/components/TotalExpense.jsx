import React from "react";

export default function TotalExpense({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 text-center shadow-sm">
      <h2 className="text-xl font-semibold text-gray-700">Tổng chi tiêu</h2>
      <p className="text-2xl font-bold text-red-600 mt-2">
        {total.toLocaleString()} VND
      </p>
    </div>
  );
}
