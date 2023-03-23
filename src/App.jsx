import React from 'react';
import Component from './components/Component';
import Summary from './components/Summary';

export default function App() {
  return (
    <main className="grid w-full md:max-w-[650px] md:mx-auto md:bg-white md:rounded">
      <Component />
      <Summary />
    </main>
  );
}
