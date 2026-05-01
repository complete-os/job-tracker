// NOTE: This is starter code — wire up your database and env vars
import { useState } from 'react';
import { StatusBadge } from './StatusBadge';

interface Application {
  id: string;
  jobTitle: string;
  company: string;
  status: 'applied' | 'interview' | 'offer' | 'rejected';
  createdAt: string;
  resume?: string;
  coverLetter?: string;
}

export function JobApplicationCard({ application }: { application: Application }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{application.jobTitle}</h3>
          <p className="text-slate-600">{application.company}</p>
        </div>
        <StatusBadge status={application.status} />
      </div>

      <p className="text-sm text-slate-500 mb-4">
        Applied: {new Date(application.createdAt).toLocaleDateString()}
      </p>

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="w-full bg-slate-100 text-slate-900 px-4 py-2 rounded hover:bg-slate-200 transition"
      >
        {showDetails ? 'Hide Details' : 'View Details'}
      </button>

      {showDetails && (
        <div className="mt-4 space-y-4">
          <button className="w-full bg-blue-50 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition">
            Edit Resume
          </button>
          <button className="w-full bg-green-50 text-green-600 px-4 py-2 rounded hover:bg-green-100 transition">
            Download (Word/PDF)
          </button>
        </div>
      )}
    </div>
  );
}
