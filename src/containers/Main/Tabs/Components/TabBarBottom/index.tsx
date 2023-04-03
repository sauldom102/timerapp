import type {FC} from 'react';
import {Fragment, memo} from 'react';
import ActionButton from './ActionButton';
import TouchableItem from './Item';
import {Main} from './styles';
import type {Props} from './types';

const TabBarBottom: FC<Props> = ({navigation, state, onPressAction}) => (
  <Main>
    {state.routes.map((route, i) => (
      <Fragment key={route.key}>
        <TouchableItem
          isFocused={i === state.index}
          jumpTo={navigation.navigate}
          routeName={route.name}
          routeKey={route.key}
        />
        {i === 1 && <ActionButton onPress={onPressAction} />}
      </Fragment>
    ))}
  </Main>
);

export default memo(TabBarBottom);
