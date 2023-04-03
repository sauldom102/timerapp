import type {FC} from 'react';
import {ContainerView} from '@storybook-utils';
import {flattenObject, shouldTextBeBlack} from 'utils';
import {colors} from '../colors';
import {ColorBoxContainer, ColorBoxTitle, Palette} from './styles';

const colorsToShow = Object.entries(flattenObject(colors));

export default {
  title: 'ColorPalette',
  argTypes: {},
};

type ColorBoxProps = {
  name: string;
  color: string;
};

const ColorBox: FC<ColorBoxProps> = ({name, color}) => (
  <ColorBoxContainer color={color}>
    <ColorBoxTitle shouldBeBlack={shouldTextBeBlack(color)}>
      {name}
    </ColorBoxTitle>
  </ColorBoxContainer>
);

export const ColorPalette = () => (
  <ContainerView>
    <Palette>
      {colorsToShow.map(([colorKey, colorValue]) => (
        <ColorBox key={colorKey} name={colorKey} color={colorValue as string} />
      ))}
    </Palette>
  </ContainerView>
);
