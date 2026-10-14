import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function LoginForm({ titulo, subtitulo, onEntrar }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.subtitulo}>{subtitulo}</Text>

      <Text style={styles.label}>E-MAIL</Text>
      <TextInput
        style={styles.input}
        placeholder="voce@email.com"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>SENHA</Text>
      <View style={styles.linhaSenha}>
        <TextInput
          style={[styles.input, styles.inputSenha]}
          placeholder="Sua senha"
          placeholderTextColor="#888"
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={setSenha}
        />
        <Pressable
          style={styles.botaoMostrar}
          onPress={() => setMostrarSenha(!mostrarSenha)}
        >
          <Text style={styles.textoMostrar}>
            {mostrarSenha ? 'Ocultar' : 'Mostrar'}
          </Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.botaoEntrar}
        onPress={() => onEntrar && onEntrar(email, senha)}
      >
        <Text style={styles.textoEntrar}>ENTRAR</Text>
      </Pressable>

      <Pressable style={styles.link}>
        <Text style={styles.textoLink}>Esqueci a senha</Text>
      </Pressable>

      <View style={styles.divisor}>
        <View style={styles.linha} />
        <Text style={styles.textoOu}>ou</Text>
        <View style={styles.linha} />
      </View>

      <Pressable style={styles.botaoCriar}>
        <Text style={styles.textoCriar}>CRIAR CONTA</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#111' },
  titulo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  subtitulo: { color: '#aaa', fontSize: 14, marginBottom: 24 },
  label: {
    color: '#ccc',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 12,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#1c1c1c',
    borderWidth: 1,
    borderColor: '#2a2a2a',
    borderRadius: 8,
    color: '#fff',
    fontSize: 16,
    padding: 14,
  },
  linhaSenha: { flexDirection: 'row', alignItems: 'center' },
  inputSenha: { flex: 1 },
  botaoMostrar: {
    minWidth: 64,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoMostrar: { color: '#f5b800', fontSize: 14 },
  botaoEntrar: {
    backgroundColor: '#f5b800',
    borderRadius: 8,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textoEntrar: { color: '#000', fontWeight: 'bold', fontStyle: 'italic' },
  link: { alignItems: 'center', padding: 14 },
  textoLink: { color: '#ccc', fontSize: 14 },
  divisor: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  linha: { flex: 1, height: 1, backgroundColor: '#333' },
  textoOu: { color: '#888', marginHorizontal: 10, fontSize: 12 },
  botaoCriar: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  textoCriar: { color: '#fff', fontWeight: 'bold', fontStyle: 'italic' },
});