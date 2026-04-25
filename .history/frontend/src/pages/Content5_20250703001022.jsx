import React from 'react';

export default function StatsSection() {
  const stats = [
    { number: '50+', label: 'Project Finished' },
    { number: '40+', label: 'Happy Clients' },
    { number: '30+', label: 'Team' },
    { number: '3+',  label: 'Products' },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-4xl font-extrabold text-indigo-600">{stat.number}</h3>
            <p className="text-gray-700 text-sm mt-2 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
