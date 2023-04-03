import {uniqueId} from 'lodash';
import type Task from '.';

export const TASKS: Task[] = [
  {
    title: 'Reading books',
    totalTime: 50 * 60,
    totalTimeDisplay: '50 minutes',
    expectedDuration: 60 * 60,
    expectedDurationDisplay: '60 minutes',
    completed: true,
    category: {
      bgColor: '#FF5726',
      icon: 'https://uxwing.com/wp-content/themes/uxwing/download/education-school/read-book-icon.png',
      title: 'Reading',
    },
  },
  {
    title: 'Reading books',
    totalTime: 50 * 60,
    totalTimeDisplay: '50 minutes',
    expectedDuration: 60 * 60,
    expectedDurationDisplay: '60 minutes',
    completed: true,
    category: {
      bgColor: '#FF5726',
      icon: 'https://uxwing.com/wp-content/themes/uxwing/download/education-school/read-book-icon.png',
      title: 'Reading',
    },
  },
  {
    title: 'Reading books',
    totalTime: 50 * 60,
    totalTimeDisplay: '50 minutes',
    expectedDuration: 60 * 60,
    expectedDurationDisplay: '60 minutes',
    completed: true,
    category: {
      bgColor: '#FF5726',
      icon: 'https://uxwing.com/wp-content/themes/uxwing/download/education-school/read-book-icon.png',
      title: 'Reading',
    },
  },
  {
    title: 'Reading books',
    totalTime: 50 * 60,
    totalTimeDisplay: '50 minutes',
    expectedDuration: 60 * 60,
    expectedDurationDisplay: '60 minutes',
    completed: true,
    category: {
      bgColor: '#FF5726',
      icon: 'https://uxwing.com/wp-content/themes/uxwing/download/education-school/read-book-icon.png',
      title: 'Reading',
    },
  },
  {
    title: 'Reading books',
    totalTime: 50 * 60,
    totalTimeDisplay: '50 minutes',
    expectedDuration: 60 * 60,
    expectedDurationDisplay: '60 minutes',
    completed: true,
    category: {
      bgColor: '#FF5726',
      icon: 'https://uxwing.com/wp-content/themes/uxwing/download/education-school/read-book-icon.png',
      title: 'Reading',
    },
  },
  {
    title: 'Reading books',
    totalTime: 50 * 60,
    totalTimeDisplay: '50 minutes',
    expectedDuration: 60 * 60,
    expectedDurationDisplay: '60 minutes',
    completed: true,
    category: {
      bgColor: '#FF5726',
      icon: 'https://uxwing.com/wp-content/themes/uxwing/download/education-school/read-book-icon.png',
      title: 'Reading',
    },
  },
].map(task => ({
  ...task,
  id: `${uniqueId()}`,
}));
