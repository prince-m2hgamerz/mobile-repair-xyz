import React from 'react';
import type { RepairStatus } from '../types/appointments';

const colors: Record<RepairStatus, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  accepted: 'bg-blue-100 text-blue-800',
  in_progress: 'bg-purple-100 text-purple-800',
  completed: 'bg-green-100 text-green-800',
  canceled: 'bg-red-100 text-red-800',
};

export default function StatusBadge({ status }: { status: RepairStatus }) {
  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${colors[status]}`}>
      {status.replace('_', ' ')}
    </span>
  );
}
