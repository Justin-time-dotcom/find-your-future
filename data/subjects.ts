export interface SubjectDefinition {
  id: string;
  name: string;
  category: 'core' | 'science' | 'humanities' | 'languages' | 'other';
}

export const subjects: SubjectDefinition[] = [
  { id: 'english', name: 'English', category: 'core' },
  { id: 'mathematics', name: 'Mathematics', category: 'core' },
  { id: 'biology', name: 'Biology', category: 'science' },
  { id: 'chemistry', name: 'Chemistry', category: 'science' },
  { id: 'physics', name: 'Physics', category: 'science' },
  { id: 'history', name: 'History', category: 'humanities' },
  { id: 'geography', name: 'Geography', category: 'humanities' },
  { id: 'economics', name: 'Economics', category: 'humanities' },
  { id: 'french', name: 'French', category: 'languages' },
  { id: 'swahili', name: 'Swahili', category: 'languages' },
  { id: 'computer_science', name: 'Computer Science', category: 'other' },
  { id: 'business_studies', name: 'Business Studies', category: 'other' },
];
