import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Groups } from "@screens/Groups";
import { Players } from "@screens/Players";
import { NewGroup } from "@screens/NewGroup";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    // Dentro da navegação são definidas as Screens (telas) disponíveis da aplicação
    // Quando a rota "name" for chamada, é informada qual componente deve ser renderizado
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="groups"
        component={Groups}
      />

      <Screen 
        name="new"
        component={NewGroup}
      />

      <Screen 
        name="players"
        component={Players}
      />
    </Navigator>
  );
}