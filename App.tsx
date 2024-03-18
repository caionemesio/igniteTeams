import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Groups from '@screens/Groups';
import Loading from '@components/Loading';

export default function App() {
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style='light'
        backgroundColor='transparent'
        translucent
      />
      {fontLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}