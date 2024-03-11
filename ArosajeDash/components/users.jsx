import React from 'react';

const StatCard = ({ number, title, subtitle, change }) => {
  return (
    <div className="bg-green-200 rounded-xl text-center shadow-md w-full h-2/6 mb-4 p-2">
      <div className="text-3xl font-bold text-green-800 mb-3">{number}</div>
      <div className="text-xl font-semibold mb-1">{title}</div>
      <div className="text-gray-500 mb-2">{subtitle}</div>
      {change !== undefined && (
        <div
          className={`text-sm font-semibold mt-1 ${
            change > 0 ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {change > 0 ? `+${change}%` : `${change}%`} cette semaine
        </div>
      )}
    </div>
  );
};

const Users = () => {
  return (
    <div className="flex flex-col space-y-1 p-2.5">
      <StatCard
        number="670"
        title="Utilisateurs"
        subtitle="en temps réel"
      />
      <StatCard
        number="45"
        title="Botanistes"
        subtitle="en temps réel"
        change={10}
      />
    </div>
  );
};

export default Users;
