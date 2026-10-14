import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import LoginForm from './src/components/LoginForm';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111' }}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <LoginForm
          titulo="ENTRAR"
          subtitulo="Bem-vindo de volta"
          onEntrar={(email, senha) => console.log(email, senha)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}