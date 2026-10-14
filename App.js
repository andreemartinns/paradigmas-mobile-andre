import { SafeAreaView, StatusBar } from 'react-native';
import Navbar from './src/components/Navbar';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Navbar titulo="Meu Site" links={['Home', 'Sobre', 'Contato']} />
    </SafeAreaView>
  );
}