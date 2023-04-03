import type {RootTabScreenProps} from 'navigator/types';
import type {Props as MenuItemProps} from './MenuItem/types';

export type Props = RootTabScreenProps<'Profile'> & {};

export type MenuItem = Omit<MenuItemProps, 'onPress'>;
