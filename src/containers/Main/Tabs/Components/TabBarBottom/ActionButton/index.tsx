import type {FC} from 'react';
import {memo} from 'react';
import {Container, Content, Icon} from './styles';
import type {Props} from './types';

const TabBarBottomActionButton: FC<Props> = ({onPress}) => (
  <Container testID="tabbar-action-button">
    <Content onPress={onPress}>
      <Icon />
    </Content>
  </Container>
);

export default memo(TabBarBottomActionButton);
