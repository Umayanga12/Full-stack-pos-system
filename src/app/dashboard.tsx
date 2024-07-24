// pages/dashboard.tsx
import React from 'react';
import { ChartComponent } from '@/components/BillChart';
import { ProductCharComponent } from '@/components/ProductChart';
import NavBar from '@/components/navBar';
 // Ensure the correct path if NavBar is used

export const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      <NavBar/> {/* Include NavBar if it is part of the dashboard layout */}
      <div className="p-8">
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <div className="flex gap-5 pl-10">
          <div>
            <ChartComponent />
          </div>
          <div>
            <ProductCharComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
