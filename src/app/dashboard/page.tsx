// NOTE: This is starter code — wire up your database and env vars
'use client';

import { useState } from 'react';
import { JobApplicationCard } from '@/components/JobApplicationCard';
import { NewApplicationModal } from '@/components/NewApplicationModal';

interface Application {
  id: string;
  jobTitle: string;
  company: string;
  status: 'applied' | 'interview' | 'offer' | 'rejected';
  createdAt: string;
  resume?: string;
  coverLetter?: string;
}

export default function Dashboard() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleNewApplication = async (jd: string, resume: File | null) => {
    // TODO: Call API to parse JD, extract skills, generate resume/cover letter
    setShowModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-slate-900">Job Applications</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          New Application
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app) => (
          <JobApplicationCard key={app.id} application={app} />
        ))}
      </div>

      {applications.length === 0 && (
        <div className="text-center py-16">
          <p className="text-slate-500 text-lg">No applications yet. Create one to get started!</p>
        </div>
      )}

      {showModal && (
        <NewApplicationModal
          onClose={() => setShowModal(false)}
          onSubmit={handleNewApplication}
        />
      )}
    </div>
  );
}
