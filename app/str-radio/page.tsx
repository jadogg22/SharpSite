import React from 'react';

import { MyHeader } from '@/components/MyHeader';

export default function RadioPage() {
  return (
  <div className="flex min-h-screen flex-col">
  <MyHeader />
  <main className="flex-1 container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Radio Page</h1>
    <p>This is the radio page content.</p>
    {/* Add your radio player or content here */}
  </main>
  </div>
  );
};
