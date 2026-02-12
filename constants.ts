import { KPI, Client, Project, Transaction } from './types';

export const KPIS: KPI[] = [
  { id: '1', label: 'Total Revenue', value: '$2.4M', trend: 12.5, trendLabel: 'vs last month', icon: 'DollarSign' },
  { id: '2', label: 'Active Clients', value: '142', trend: 5.2, trendLabel: 'new added', icon: 'Users' },
  { id: '3', label: 'Open Projects', value: '28', trend: -2.1, trendLabel: 'completion rate', icon: 'Briefcase' },
  { id: '4', label: 'Team Utilization', value: '87%', trend: 4.5, trendLabel: 'efficiency', icon: 'Activity' },
];

export const CLIENTS: Client[] = [
  { id: 'c1', name: 'Alice Freeman', company: 'TechNova Inc', status: 'Active', value: 125000, lastContact: '2 days ago' },
  { id: 'c2', name: 'Bob Smith', company: 'Global Logistics', status: 'Negotiation', value: 85000, lastContact: '5 hours ago' },
  { id: 'c3', name: 'Charlie Davis', company: 'Creative Studios', status: 'Lead', value: 45000, lastContact: '1 day ago' },
  { id: 'c4', name: 'Diana Prince', company: 'Retail Giant', status: 'Active', value: 340000, lastContact: '1 week ago' },
  { id: 'c5', name: 'Evan Wright', company: 'Finance Flow', status: 'Churned', value: 22000, lastContact: '3 months ago' },
];

export const PROJECTS: Project[] = [
  { id: 'p1', name: 'Website Redesign', client: 'TechNova Inc', status: 'In Progress', progress: 65, dueDate: '2023-11-15', team: ['https://picsum.photos/30/30?1', 'https://picsum.photos/30/30?2'] },
  { id: 'p2', name: 'Mobile App Launch', client: 'Retail Giant', status: 'Planning', progress: 15, dueDate: '2023-12-01', team: ['https://picsum.photos/30/30?3'] },
  { id: 'p3', name: 'Cloud Migration', client: 'Global Logistics', status: 'Review', progress: 90, dueDate: '2023-10-30', team: ['https://picsum.photos/30/30?4', 'https://picsum.photos/30/30?5'] },
  { id: 'p4', name: 'Marketing Campaign', client: 'Creative Studios', status: 'Done', progress: 100, dueDate: '2023-10-15', team: ['https://picsum.photos/30/30?1'] },
];

export const TRANSACTIONS: Transaction[] = [
  { id: 't1', description: 'Enterprise License - TechNova', amount: 25000, type: 'income', date: '2023-10-24', status: 'Paid' },
  { id: 't2', description: 'AWS Infrastructure', amount: 4500, type: 'expense', date: '2023-10-23', status: 'Paid' },
  { id: 't3', description: 'Consulting Fee - Retail Giant', amount: 12000, type: 'income', date: '2023-10-22', status: 'Pending' },
  { id: 't4', description: 'Office Equipment', amount: 2100, type: 'expense', date: '2023-10-20', status: 'Paid' },
  { id: 't5', description: 'Q3 Bonus Payout', amount: 15000, type: 'expense', date: '2023-10-15', status: 'Paid' },
];
