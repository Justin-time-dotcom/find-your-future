export interface GradingScale {
  id: string;
  name: string;
  description: string;
  scaleType: 'letters' | 'numbers' | 'percent' | 'gpa' | 'custom';
}

export const gradingScales: GradingScale[] = [
  { id: 'a-e', name: 'A - E', description: 'Common letter-based grading scale', scaleType: 'letters' },
  { id: 'a1-f9', name: 'A1 - F9', description: 'West African examination grading', scaleType: 'letters' },
  { id: '1-7', name: '1 - 7', description: 'South African achievement bands', scaleType: 'numbers' },
  { id: '9-1', name: '9 - 1', description: 'UK GCSE grading system', scaleType: 'numbers' },
  { id: 'a-star-e', name: 'A* - E', description: 'Advanced level grading system', scaleType: 'letters' },
  { id: '7-1', name: '7 - 1', description: 'IB grading scale', scaleType: 'numbers' },
  { id: 'gpa', name: 'GPA', description: 'Grade point average', scaleType: 'gpa' },
  { id: 'percent', name: 'Percentage', description: 'Percentage-based grading', scaleType: 'percent' },
  { id: 'custom', name: 'Custom', description: 'User-defined grading', scaleType: 'custom' },
];
