import Home from './src/Home/index'
import { NativeBaseProvider } from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}
