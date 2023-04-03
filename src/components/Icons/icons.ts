import type {FC} from 'react';
import BoldArrowDownIcon from './BoldArrowDownIcon';
import BoldArrowRightCircleIcon from './BoldArrowRightCircleIcon';
import BoldHideIcon from './BoldHideIcon';
import BoldLockIcon from './BoldLockIcon';
import BoldMessageIcon from './BoldMessageIcon';
import BoldShowIcon from './BoldShowIcon';
import CheckIcon from './CheckIcon';
import CloseIcon from './CloseIcon';
import CurvedDeleteIcon from './CurvedDeleteIcon';
import CurvedInfoSquareIcon from './CurvedInfoSquareIcon';
import CurvedLogoutIcon from './CurvedLogoutIcon';
import CurvedPlusIcon from './CurvedPlusIcon';
import CurvedProfileIcon from './CurvedProfileIcon';
import CurvedShieldDoneIcon from './CurvedShieldDoneIcon';
import CurvedStarIcon from './CurvedStarIcon';
import InfoCircleIcon from './InfoCircleIcon';
import LightArrowLeftIcon from './LightArrowLeftIcon';
import LightCalendarIcon from './LightCalendarIcon';
import LogoIcon from './LogoIcon';
import MoreCircleIcon from './MoreCircleIcon';
import NotificationIcon from './NotificationIcon';
import PauseIcon from './PauseIcon';
import PlayIcon from './PlayIcon';
import PlusIcon from './PlusIcon';
import ResetIcon from './ResetIcon';
import StopIcon from './StopIcon';
import {
  FocusedHomeIcon,
  FocusedProfileIcon,
  FocusedStatsIcon,
  FocusedTaskIcon,
  HomeIcon,
  ProfileIcon,
  StatsIcon,
  TaskIcon,
} from './Tabs';
import TimeCircleIcon from './TimeCircleIcon';

import type {IconProps} from './types';

const createSvgIcons = <T extends {[name: string]: FC<IconProps>}>(
  cfg: T,
): Record<keyof T, FC<IconProps>> => cfg;

export const icons = createSvgIcons({
  plus: PlusIcon,
  lightCalendar: LightCalendarIcon,
  timeCircle: TimeCircleIcon,
  boldArrowDown: BoldArrowDownIcon,
  boldLock: BoldLockIcon,
  boldMessage: BoldMessageIcon,
  boldHide: BoldHideIcon,
  boldShow: BoldShowIcon,
  logo: LogoIcon,
  lightArrowLeft: LightArrowLeftIcon,
  play: PlayIcon,
  pause: PauseIcon,
  notification: NotificationIcon,
  curvedPlus: CurvedPlusIcon,
  close: CloseIcon,
  reset: ResetIcon,
  stop: StopIcon,
  curvedDelete: CurvedDeleteIcon,
  check: CheckIcon,
  infoCircle: InfoCircleIcon,
  curvedInfoSquare: CurvedInfoSquareIcon,
  curvedProfile: CurvedProfileIcon,
  curvedShieldDone: CurvedShieldDoneIcon,
  curvedStar: CurvedStarIcon,
  moreCircle: MoreCircleIcon,
  boldArrowRightCircle: BoldArrowRightCircleIcon,
  curvedLogout: CurvedLogoutIcon,

  // tab icons
  tabHomeIcon: HomeIcon,
  tabFocusedHomeIcon: FocusedHomeIcon,
  tabTaskIcon: TaskIcon,
  tabFocusedTaskIcon: FocusedTaskIcon,
  tabStatsIcon: StatsIcon,
  tabFocusedStatsIcon: FocusedStatsIcon,
  tabProfileIcon: ProfileIcon,
  tabFocusedProfileIcon: FocusedProfileIcon,
});
