import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-50">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-slate-900">Savy Fullstack App</h1>
        <p className="mt-4 text-lg text-slate-600">Deployed via SavyOps AI on AWS Amplify</p>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-xl shadow-md border border-slate-200">
          <h2 className="text-xl font-semibold mb-2">Frontend</h2>
          <p className="text-slate-500">Next.js 14 with Tailwind CSS</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md border border-slate-200">
          <h2 className="text-xl font-semibold mb-2">Backend</h2>
          <p className="text-slate-500">Amplify Functions & API (Gen 2)</p>
        </div>
      </div>
    </main>
  );
}