import React from 'react';
import { MyHeader } from '@/components/MyHeader';
import { MyFooter } from '@/components/MyFooter';

export default function Directory() {
  return (
  <div className="flex min-h-screen flex-col">
  <MyHeader />
  <main className="flex-1 container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Directory</h1>
    <p>This is the directory content</p>
    {/* Add your directory content here */}
  </main>
  </div>
  );
};
