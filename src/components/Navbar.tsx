// NOTE: This is starter code — wire up your database and env vars
'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          JobTracker
        </Link>

        <div className="flex gap-6 items-center">
          <Link href="/dashboard" className="text-slate-700 hover:text-blue-600 transition">
            Dashboard
          </Link>
          <Link href="/profile" className="text-slate-700 hover:text-blue-600 transition">
            My Skills
          </Link>
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
          >
            U
          </button>
          {profileOpen && (
            <div className="absolute top-16 right-4 bg-white rounded-lg shadow-lg p-4 w-40">
              <button className="block w-full text-left px-4 py-2 hover:bg-slate-100 rounded">
                Settings
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-slate-100 rounded text-red-600">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
