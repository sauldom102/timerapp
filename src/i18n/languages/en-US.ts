import type {RootTabParamList} from 'navigator/types';

const tabs: Record<keyof RootTabParamList, string> = {
  Home: 'Home',
  Task: 'Task',
  Stats: 'Statistics',
  Profile: 'Profile',
};

const screens = {
  home: {
    title: 'Pomo',
  },
  'create-new-task': {
    title: 'Create New Task',
  },
  'sign-up': {
    title: 'Create your\nAccount',
  },
  login: {
    title: 'Login to your\nAccount',
  },
  'fill-profile': {
    title: 'Fill Your Profile',
    description:
      "Don't worry, you can always change it later, or you can skip it for now.",
  },
  'all-today-tasks': {
    title: 'All tasks for today',
  },
  stats: {
    title: 'Statistics',
  },
  task: {
    title: 'All Your Tasks',
  },
  profile: {
    title: 'Profile',
  },
};

const inputs = {
  title: {
    label: 'Title',
    placeholder: 'Task Title',
  },
  description: {
    label: 'Description',
    placeholder: 'Task Description',
  },
  date: {
    label: 'Date',
    placeholder: 'Task Date',
  },
  'expected-duration': {
    label: 'Expected duration',
    placeholder: 'Duration',
    title: 'Select the amount of hours and minutes',
  },
  category: {
    label: 'Select Category',
    placeholder: 'Category',
  },
  email: {
    placeholder: 'Email',
  },
  password: {
    placeholder: 'Password',
  },
  'repeat-password': {
    placeholder: 'Repeat Password',
  },
  'first-name': {
    placeholder: 'First Name',
  },
  'last-name': {
    placeholder: 'Last Name',
  },
  username: {
    placeholder: 'Username',
  },
};

const actions = {
  'create-new-task': 'Create New Task',
  'sign-up': 'Sign up',
  'sign-in': 'Sign in',
  'view-all': 'View All',
  start: 'Start',
  skip: 'Skip',
  cancel: 'Cancel',
  'yes-delete': 'Yes, Delete',
  'yes-logout': 'Yes, Logout',
  'resume-completed-task': 'Resume Completed Task',
};

const misc = {
  'today-tasks': 'Today Tasks ({{total}})',
  'task-progress': {
    '1': "Let's get started! You have some tasks to do.",
    '2': 'Great work! Keep tackling those tasks.',
    '3': 'Almost there! Just a few more tasks to go.',
    '4': 'All done! Enjoy your free time now.',
  },
  'already-have-an-account': 'Already have an account?',
  'dont-have-an-account': "Don't have an account?",
  'no-data-for-this-week': 'No data for this week',
  'upgrade-premium-card': {
    pro: 'PRO',
    title: 'Upgrade to Premium',
    subtitle: 'Enjoy full access app without ads and restrictions',
  },
};

const bottomSheets = {
  'delete-task': {
    title: 'Delete Task',
  },
  'confirm-logout': {
    title: 'Logout',
    message: 'Are you sure you want to logout?',
  },
};

const messages = {
  'task-created-success': 'Task created successfully',
};

const dictionary = {
  tabs,
  screens,
  inputs,
  actions,
  misc,
  bottomSheets,
  messages,
};

export default dictionary;
