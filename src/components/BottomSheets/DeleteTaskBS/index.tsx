import type {FC} from 'react';
import {useRef} from 'react';
import React, {memo, useCallback} from 'react';
import type BottomSheet from '@gorhom/bottom-sheet';
import {useTask, useTaskActions} from 'api/hooks';
import TaskItem from 'components/TaskItem';
import {getTaskItemProps} from 'components/TaskItem/utils';
import {useTranslation} from 'react-i18next';
import {useTaskToDelete} from 'storage';
import {useCloseBottomSheet} from 'utils';
import {Sheet, Main, Title, Divider, Bottom, Button} from './styles';
import type {Props} from './types';

const DeleteTaskBS: FC<Props> = () => {
  const {t} = useTranslation();

  const {deleteTask} = useTaskActions();

  const taskToDelete = useTaskToDelete();

  const {task} = useTask(taskToDelete);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const {ref, handleClose} = useCloseBottomSheet(bottomSheetRef);

  const handlePressDelete = useCallback(async () => {
    if (taskToDelete) {
      await deleteTask(taskToDelete);
    }
    handleClose();
  }, [taskToDelete, deleteTask, handleClose]);

  if (!task) {
    return null;
  }

  return (
    <Sheet ref={ref} openByDefault>
      <Main>
        <Title>{t('bottomSheets.delete-task.title')}</Title>
        <Divider />
        <TaskItem canBeDeleted={false} {...getTaskItemProps(task)} />
        <Bottom>
          <Button
            title={t('actions.cancel')}
            onPress={handleClose}
            variant="secondary"
            rounded
          />
          <Button
            title={t('actions.yes-delete')}
            onPress={handlePressDelete}
            withShadow
            rounded
          />
        </Bottom>
      </Main>
    </Sheet>
  );
};

export default memo(DeleteTaskBS);
