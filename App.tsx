import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';

// import { NewGroup } from '@screens/NewGroup';
// import { Groups } from '@screens/Groups';
import { Players } from '@screens/Players';
import { Loading } from '@components/Loading';

export default function App() {
  const [fonstLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      { fonstLoaded ? <Players/> : <Loading/> }
    </ThemeProvider>
  );
}