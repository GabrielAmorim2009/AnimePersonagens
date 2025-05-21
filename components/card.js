import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Obtém a largura da tela

export default function Card({ nome = 'Não Informado', img = "", mundo = 'Não Informado' }) {
  return (
    <View style={styles.card}>
      <Image style={styles.img} source={{ uri: img }} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.mundo}>{mundo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 180,
    margin: 5,
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: "gray",
    borderRadius: 10,
    boxShadow: "0 0 7px black",
    padding: 10,
  },
  img: {
    width: '100%',
    height: 100,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  nome: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  mundo: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 5,
  }
});
