import {getStorybookUI} from '@storybook/react-native';
import i18n from 'i18n';
import {initReactI18next} from 'react-i18next';

import './storybook.requires';

i18n.use(initReactI18next);

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;
