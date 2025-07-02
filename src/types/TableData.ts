export interface TableRow {
  id: number;
  jobRequest: string;
  submitted: string;
  status: 'in-process' | 'need-to-start' | 'complete' | 'blocked';
  submitter: string;
  url: string;
  assigned: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  estValue: string;
}

export const sampleData: TableRow[] = [
  {
    id: 1,
    jobRequest: 'Launch social media campaign for pro...',
    submitted: '15-11-2024',
    status: 'in-process',
    submitter: 'Aisha Patel',
    url: 'www.aishapatel...',
    assigned: 'Sophie Choudhury',
    priority: 'medium',
    dueDate: '20-11-2024',
    estValue: '6,200,000'
  },
  {
    id: 2,
    jobRequest: 'Update press kit for company redesign',
    submitted: '28-10-2024',
    status: 'need-to-start',
    submitter: 'Irfan Khan',
    url: 'www.irfankhanp...',
    assigned: 'Tejas Pandey',
    priority: 'high',
    dueDate: '30-10-2024',
    estValue: '3,500,000'
  },
  {
    id: 3,
    jobRequest: 'Finalize user testing feedback for app...',
    submitted: '05-12-2024',
    status: 'in-process',
    submitter: 'Mark Johnson',
    url: 'www.markjohns...',
    assigned: 'Rachel Lee',
    priority: 'medium',
    dueDate: '10-12-2024',
    estValue: '4,750,000'
  },
  {
    id: 4,
    jobRequest: 'Design new features for the website',
    submitted: '10-01-2025',
    status: 'complete',
    submitter: 'Emily Green',
    url: 'www.emilygreen...',
    assigned: 'Tom Wright',
    priority: 'low',
    dueDate: '15-01-2025',
    estValue: '5,900,000'
  },
  {
    id: 5,
    jobRequest: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabro...',
    assigned: 'Kevin Smith',
    priority: 'low',
    dueDate: '30-01-2025',
    estValue: '2,800,000'
  }
];