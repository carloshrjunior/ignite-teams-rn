import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700
}))``;