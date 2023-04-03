import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  alwaysBounceVertical: false,
  contentContainerStyle: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
})`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
`;
