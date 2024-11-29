'use client'

import { Header } from "../dashboard/Header";

const Expenses = () => {
  return (
    <div className="mb-5">
      <Header name="salidas"/>
      <p className="text-sm text-gray-500">
        No se están mostrando gastos.
      </p>
    </div>
  );
};

export default Expenses;
