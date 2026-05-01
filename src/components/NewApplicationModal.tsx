// NOTE: This is starter code — wire up your database and env vars
'use client';

import { useState } from 'react';

interface NewApplicationModalProps {
  onClose: () => void;
  onSubmit: (jd: string, resume: File | null) => void;
}

export function NewApplicationModal({ onClose, onSubmit }: NewApplicationModalProps) {
  const [jobDescription, setJobDescription] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobDescription.trim()) {
      alert('Please paste a job description');
      return;
    }
    setLoading(true);
    try {
      await onSubmit(jobDescription, resumeFile);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-8">
        <h2 className="text-2xl font-bold mb-6">New Job Application</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Job Description
            </label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              className="w-full border border-slate-300 rounded px-4 py-3 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Resume (optional - if not uploaded before)
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
              className="block w-full text-sm text-slate-500"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-slate-200 text-slate-900 px-6 py-2 rounded hover:bg-slate-300 transition font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-medium disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Generate Resume & Cover Letter'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
