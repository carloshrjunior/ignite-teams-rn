import { TouchableOpacity } from "react-native";

import styled, {css} from "styled-components/native";

// Exporta o tipo 'ButtonTypeStyleProps' que recebe valor 'PRIMARY' ou 'SECONDARY'
export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

// Declara um tipo para o estilo do botão
type Props = {
  type: ButtonTypeStyleProps;
}

// O componente 'Container' recebe como propriedade a tipagem que define o estilo do botão
export const Container = styled(TouchableOpacity) <Props>`
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  border-radius: 6px;

  flex: 1;
  align-items: center;
  justify-content: center;

  max-height: 56px;
  min-height: 56px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`

    color: ${theme.COLORS.WHITE};

    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD};

  `};
`;