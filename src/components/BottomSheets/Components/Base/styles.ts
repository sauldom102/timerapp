import styled from 'styled-components/native';
import BottomSheet from '@gorhom/bottom-sheet';

export const Sheet = styled(BottomSheet)`
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: ${({theme}) => theme.colors.white};
`;
