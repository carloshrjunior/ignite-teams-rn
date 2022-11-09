// Dentro desse arquivo "index.tsx", é definido quais rotas serão carregadas para nossa aplicação;

import { View } from "react-native";

// NavigationContainer serve para criarmos um contexto de navegação, onde dentro dele passamos as rotas que iremos exportar para a nossa aplicação;
// Nesse caso, basta importar dentro do NavigationContainer, o componente AppRoutes (onde estão declaradas todas as rotas que iremos usar);
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { useTheme } from "styled-components/native";

export function Routes() {
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}