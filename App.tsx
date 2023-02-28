import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';

import { THEME } from './src/theme';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style="auto" />
      { fontsLoaded ? <Routes/> : <Loading/> }  
    </NativeBaseProvider>
  );
}


