// NOTE: This is starter code — wire up your database and env vars
interface StatusBadgeProps {
  status: 'applied' | 'interview' | 'offer' | 'rejected';
}

const statusConfig = {
  applied: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Applied' },
  interview: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Interview' },
  offer: { bg: 'bg-green-100', text: 'text-green-800', label: 'Offer' },
  rejected: { bg: 'bg-red-100', text: 'text-red-800', label: 'Rejected' },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
}
