import type {FC} from 'react';
import React, {memo} from 'react';
import {Header, StatusBar, Timer} from 'components';
import {useTranslation} from 'react-i18next';
import theme from 'theme';
import useConnect from './connect';
import Controls from './Controls';
import {
  Container,
  Body,
  Description,
  TimerSection,
  Message,
  Bottom,
  ResumeButton,
} from './styles';
import type {Props} from './types';

const TaskDetail: FC<Props> = () => {
  const {
    goBack,
    progress,
    task,
    timeToDisplay,
    playing,
    handlePressPlayPause,
    handlePressReset,
    handlePressCheck,
    handlePressResume,
  } = useConnect();

  const {t} = useTranslation();

  if (!task) {
    return null;
  }

  return (
    <Container>
      <StatusBar />
      <Header
        title={task.title}
        onPressGoBack={goBack}
        rightIcon="moreCircle"
      />
      <Body>
        <Description>{task.description}</Description>
        <TimerSection>
          <Timer
            title={timeToDisplay}
            color={theme.colors.blue}
            progress={progress}
          />
          <Message>You have 5 minutes left</Message>
          <Bottom>
            {task.completed ? (
              <ResumeButton
                title={t('actions.resume-completed-task')}
                onPress={handlePressResume}
              />
            ) : (
              <Controls
                playing={playing}
                onPressPlayPause={handlePressPlayPause}
                onPressReset={handlePressReset}
                onPressCheck={handlePressCheck}
              />
            )}
          </Bottom>
        </TimerSection>
      </Body>
    </Container>
  );
};

export default memo(TaskDetail);
