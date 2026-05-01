// NOTE: This is starter code — wire up your database and env vars
'use client';

import { useState } from 'react';

interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  summary: string;
  experience: Array<{ title: string; company: string; duration: string; description: string }>;
  skills: string[];
  education: Array<{ degree: string; school: string; year: string }>;
}

interface ResumeEditorProps {
  initialData: ResumeData;
  onSave: (data: ResumeData) => void;
  onExport: (format: 'pdf' | 'docx') => void;
}

export function ResumeEditor({ initialData, onSave, onExport }: ResumeEditorProps) {
  const [data, setData] = useState<ResumeData>(initialData);

  const handleFieldChange = (field: keyof ResumeData, value: unknown) => {
    setData({ ...data, [field]: value });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <input
          type="text"
          placeholder="Full Name"
          value={data.fullName}
          onChange={(e) => handleFieldChange('fullName', e.target.value)}
          className="col-span-2 border border-slate-300 rounded px-4 py-2 text-lg font-bold"
        />
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => handleFieldChange('email', e.target.value)}
          className="border border-slate-300 rounded px-4 py-2"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={data.phone}
          onChange={(e) => handleFieldChange('phone', e.target.value)}
          className="border border-slate-300 rounded px-4 py-2"
        />
      </div>

      <textarea
        placeholder="Professional Summary"
        value={data.summary}
        onChange={(e) => handleFieldChange('summary', e.target.value)}
        className="w-full border border-slate-300 rounded px-4 py-2 mb-6 h-24 resize-none"
      />

      <div className="flex gap-4">
        <button
          onClick={() => onSave(data)}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Save
        </button>
        <button
          onClick={() => onExport('pdf')}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Export PDF
        </button>
        <button
          onClick={() => onExport('docx')}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Export Word
        </button>
      </div>
    </div>
  );
}
