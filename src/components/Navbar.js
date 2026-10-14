import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Navbar({ titulo, links }) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.barra}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Pressable onPress={() => setMenuAberto(!menuAberto)} style={styles.botao}>
          <Text style={styles.botaoTexto}>{menuAberto ? '✕' : '☰'}</Text>
        </Pressable>
      </View>
      {menuAberto &&
        links.map((link) => (
          <Pressable key={link} style={styles.item}>
            <Text style={styles.itemTexto}>{link}</Text>
          </Pressable>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#1e1e2e' },
  barra: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  titulo: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  botao: { minWidth: 44, minHeight: 44, alignItems: 'center', justifyContent: 'center' },
  botaoTexto: { color: '#fff', fontSize: 24 },
  item: { padding: 16, borderTopWidth: 1, borderTopColor: '#333' },
  itemTexto: { color: '#fff', fontSize: 16 },
});