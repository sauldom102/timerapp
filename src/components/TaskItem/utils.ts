import type {Task} from 'models';

export const getTaskItemProps = (task: Task) => ({
  id: task.id,
  title: task.title,
  totalTime: task.totalTime,
  categoryColor: task.category.bgColor,
  categoryIcon: task.category.icon,
  canPlay: !task.completed,
});

export const getUnplayableTaskItemProps = (task: Task) => ({
  id: task.id,
  title: task.title,
  subtitle: task.category.title,
  rightText: task.totalTime ? task.totalTimeDisplay : '',
  totalTime: task.totalTime,
  categoryColor: task.category.bgColor,
  categoryIcon: task.category.icon,
  canPlay: false,
});
