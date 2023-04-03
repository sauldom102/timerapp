import styled from 'styled-components/native';

export const Main = styled.View`
  flex-direction: row;
  padding-top: 8px;
  padding-bottom: ${({theme}) => theme.device.safeBottom + 10}px;
  border-top-width: 0;
  background-color: ${({theme}) => theme.colors.white};
`;
