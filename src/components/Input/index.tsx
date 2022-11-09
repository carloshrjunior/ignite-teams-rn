import { TextInputProps } from "react-native";

import { useTheme } from "styled-components/native";

import { Container } from "./styles";

export function Input({...rest}: TextInputProps) {
  // useTheme permite o acesso ao tema em um elemento que não foi estilizado com Styled Component
  const { COLORS } = useTheme();

  return (
    <Container 
      placeholderTextColor={COLORS.GRAY_400}
      {...rest}
    />
  )
}