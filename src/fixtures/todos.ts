import { DateFormatter } from '@/helpers/date';

export const todos = [
  {
    text: 'Hi!',
    addDate: DateFormatter(),
    isDone: false,
    id: Math.random() * 100,
    editActive: false,
  },
  {
    text: 'My name is',
    addDate: DateFormatter(),
    isDone: false,
    id: Math.random() * 100,
    editActive: false,
  },
  {
    text: 'My name is ...',
    addDate: DateFormatter(),
    isDone: false,
    id: Math.random() * 100,
    editActive: false,
  },
  {
    text: 'S s s Slim Shady',
    addDate: DateFormatter(),
    isDone: false,
    id: Math.random() * 100,
    editActive: false,
  },
];
