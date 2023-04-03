import type {Task as ApiTask} from 'api/openapi/requests';
import {isToday, parseISO} from 'date-fns';
import {groupBy, orderBy} from 'lodash';
import {normalizeCategory} from 'models/Category';
import {
  displayDurationFromSeconds,
  displayTimerFromSeconds,
  formatDateForList,
} from 'utils';

export const normalizeTask = (task: ApiTask) => {
  const date = parseISO(task.date);
  const fromToday = isToday(date);

  return {
    id: task.id,
    title: task.title,
    description: task.description ?? undefined,
    totalTime: task.seconds,
    totalTimeDisplay: displayDurationFromSeconds(
      task.seconds,
      'Not started yet',
    ),
    timerDisplay: displayTimerFromSeconds(task.seconds),
    expectedDuration: task.estimatedDuration,
    expectedDurationDisplay: displayDurationFromSeconds(
      task.estimatedDuration,
      '0h 0m',
    ),
    category: normalizeCategory(task.category),
    completed: !!task.completed,
    date,
    fromToday,
  };
};

type Task = ReturnType<typeof normalizeTask>;

export const normalizeTasks = (tasks: ApiTask[]) => tasks.map(normalizeTask);

export default Task;

export const groupTasksByDate = (tasks: Task[]) => {
  const groupedTasks = groupBy(tasks, task => task.date.getDate());

  let list = Object.entries(groupedTasks).map(([, items], i) => ({
    index: i,
    canViewAll: false,
    date: items[0].date,
    data: items,
    title: formatDateForList(items[0].date),
  }));

  list = orderBy(list, ['date'], ['desc']);

  return list;
};
