import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import personagens from './data/personagens.json';
import Card from './components/card.js';

export default function App() {
  return (
    <View style={styles.container}>
      {personagens.map((personagem) => (
      <Card
        key={personagem.id}
        nome={personagem.nome}
        img={personagem.img}
        mundo={personagem.mundo}
      />))}
    </View>
    )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
    flexWrap: "wrap",
  },
});
