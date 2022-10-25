import styled, { css } from "styled-components/native";

import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  align-items: center;
  flex-direction: row;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  margin-bottom: 16px;

  height: 56px;
  width: 100%;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
  `};

  flex: 1;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200
}))`

  margin-left: 16px;
  margin-right: 4px;
`;