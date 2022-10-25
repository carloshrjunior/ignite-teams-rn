import styled, {css} from "styled-components/native";

export const Container = styled.View`
  margin: 32px 0;

  width: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
  
    color: ${theme.COLORS.WHITE};

    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL};

  `};
  
  text-align: center;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
  
    color: ${theme.COLORS.GRAY_300};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};

  `};

  text-align: center;
`;