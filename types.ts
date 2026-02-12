export interface KPI {
  id: string;
  label: string;
  value: string;
  trend: number;
  trendLabel: string;
  icon: string;
}

export interface Client {
  id: string;
  name: string;
  company: string;
  status: 'Lead' | 'Negotiation' | 'Active' | 'Churned';
  value: number;
  lastContact: string;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  status: 'Planning' | 'In Progress' | 'Review' | 'Done';
  progress: number;
  dueDate: string;
  team: string[];
}

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
  status: 'Paid' | 'Pending' | 'Overdue';
}

export interface WorkflowNode {
  id: string;
  type: 'trigger' | 'action' | 'condition';
  label: string;
  x: number;
  y: number;
}

export type View = 'dashboard' | 'crm' | 'projects' | 'finance' | 'hr' | 'automation' | 'analytics';

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}
