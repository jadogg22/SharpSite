import React from 'react';
import { MyHeader } from '@/components/MyHeader';
import { MyFooter } from '@/components/MyFooter';

export default function DriverResources() {
  return (
    <div className="flex min-h-screen flex-col">
      <MyHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Driver Resources</h1>
        <p className="mb-4">This is the Driver Resources page</p>
        {/* Add your directory content here */}
      </main>
      <MyFooter />
    </div>
  );
}
