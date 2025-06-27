import React from 'react';

import { MyHeader } from '@/components/MyHeader';

export default function RadioPage() {
  return (
  <div className="flex min-h-screen flex-col">
  <MyHeader />
  <main className="flex-1 flex flex-col">
    <iframe
      src="https://embed.radio.co/player/30a1e6b.html?popout"
      className="w-full flex-1"
      style={{ border: 0 }}
      allowFullScreen
    ></iframe>
  </main>
  </div>
  );
};
