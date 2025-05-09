import React, { useState, useEffect } from 'react';

interface Stat {
  label: string;
  value: number;
}

const stats: Stat[] = [
  { label: 'Happy Customers', value: 1200 },
  { label: 'Tours Organized', value: 300 },
  { label: 'Destinations', value: 50 },
  { label: 'Years in Business', value: 10 },
];

const StatsCounter: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < stats[index].value ? count + 1 : count
        )
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={stat.label} className="text-center">
          <h3 className="text-4xl font-bold">{counts[index]}</h3>
          <p className="text-gray-700">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;
