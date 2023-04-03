import type {FC} from 'react';
import React, {memo} from 'react';
import {Header, StatusBar} from 'components';
import {useTranslation} from 'react-i18next';
import useConnect from './connect';
import {
  Container,
  AvoidingView,
  Body,
  Input,
  DateInput,
  SelectInput,
  Button,
} from './styles';
import type {Props} from './types';

const CreateNewTask: FC<Props> = () => {
  const {goBack, control, submit, isValid, inputRefs, categoryOptions} =
    useConnect();

  const {t} = useTranslation();

  return (
    <Container>
      <StatusBar />
      <Header
        title={t('screens.create-new-task.title')}
        onPressClose={goBack}
        centerTitle
      />
      <AvoidingView>
        <Body>
          <Input
            name="title"
            label={t('inputs.title.label')}
            placeholder={t('inputs.title.placeholder')}
            control={control}
            nextFieldRef={inputRefs.description}
          />
          <Input
            innerRef={inputRefs.description}
            name="description"
            label={t('inputs.description.label')}
            placeholder={t('inputs.description.placeholder')}
            control={control}
            multiline
          />
          <DateInput
            name="date"
            label={t('inputs.date.label')}
            placeholder={t('inputs.date.placeholder')}
            control={control}
          />
          <DateInput
            name="expectedDuration"
            label={t('inputs.expected-duration.label')}
            placeholder={t('inputs.expected-duration.placeholder')}
            mode="time"
            title={t('inputs.expected-duration.title')}
            control={control}
          />
          <SelectInput
            name="category"
            label={t('inputs.category.label')}
            placeholder={t('inputs.category.placeholder')}
            control={control}
            options={categoryOptions}
          />
        </Body>
        <Button
          title={t('actions.create-new-task')}
          onPress={submit}
          enabled={isValid}
          withShadow
          rounded
        />
      </AvoidingView>
    </Container>
  );
};

export default memo(CreateNewTask);
