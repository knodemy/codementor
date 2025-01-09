import { Program } from '../types';

export const programs: Program[] = [
  {
    id: '1',
    name: 'Computer Science',
    description: 'Comprehensive program covering software development, algorithms, and computer systems',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    semesters: [
      {
        id: 's1',
        name: 'Fall 2024',
        classes: [
          {
            id: 'cs101',
            name: 'Introduction to Programming',
            instructor: 'Dr. Sarah Chen',
            meetingLink: 'https://meet.google.com/abc-defg-hij',
            description: 'Fundamentals of programming using Python',
            assignments: [
              {
                id: 'a1',
                title: 'Hello World in C++',
                description: 'Write a C++ program that prints "Hello, World!" to the console.',
                type: 'code',
                language: 'cpp',
                initialCode: '#include <iostream>\n\nint main() {\n  // Your code here\n  return 0;\n}',
                dueDate: '2024-04-15'
              },
              {
                id: 'a2',
                title: 'Basic Animation',
                description: 'Create a simple animation of a cat moving across the screen using Scratch blocks.',
                type: 'scratch',
                dueDate: '2024-04-20'
              }
            ]
          },
          {
            id: 'cs102',
            name: 'Data Structures',
            instructor: 'Prof. James Wilson',
            meetingLink: 'https://meet.google.com/klm-nop-qrs',
            description: 'Advanced data structures and algorithms',
            assignments: [
              {
                id: 'a3',
                title: 'Linked List Implementation',
                description: 'Implement a doubly linked list in C++ with basic operations.',
                type: 'code',
                language: 'cpp',
                initialCode: 'class Node {\n  // Your code here\n};\n\nclass LinkedList {\n  // Your code here\n};',
                dueDate: '2024-04-25'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Business Management',
    description: 'Learn essential business skills and management principles',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    semesters: [
      {
        id: 's2',
        name: 'Spring 2024',
        classes: [
          {
            id: 'bm101',
            name: 'Business Strategy',
            instructor: 'Prof. Emily Rodriguez',
            meetingLink: 'https://meet.google.com/tuv-wxy-z12',
            description: 'Strategic management and business planning',
            assignments: []
          }
        ]
      }
    ]
  }
];