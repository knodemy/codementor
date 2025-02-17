export interface Program {
  id: string;
  name: string;
  description: string;
  image: string;
  semesters: Semester[];
}

export interface Semester {
  id: string;
  name: string;
  classes: Class[];
}

export interface Class {
  id: string;
  name: string;
  instructor: string;
  meetingLink: string;
  description: string;
  assignments: Assignment[];
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  type: 'code' | 'scratch' | 'link'; // ✅ Add 'link'
  url?: string; // ✅ Allow 'url' for 'link' type assignments
  language?: string;
  initialCode?: string;
  dueDate: string;
}
