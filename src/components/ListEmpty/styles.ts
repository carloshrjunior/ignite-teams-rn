import styled, {css} from "styled-components/native";

import { UserList } from 'phosphor-react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(UserList).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_400,
  size: 132,
}))`
  margin-bottom: 16px;
`;

export const Message = styled.Text`
  ${({ theme }) => css`
  
    color: ${theme.COLORS.GRAY_300};

    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};

  `};
  
  text-align: center;
`;