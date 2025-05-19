import { StyleSheet, Text, View, Image } from 'react-native';

export default function Card({nome = 'Não Informado', img="", mundo = 'Não Informado'}) {
  return (
    <View style={styles.card}>
        <Image style={styles.img} source={{uri: img}}/>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.mundo}>{mundo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    border: "solid 2px gray",
    borderRadius: 10,
    margin: 4,
  },
  img: {
    flex: 1,
    height: 150,
    width: 150, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  nome: {
    flex: 1,
    height: 100,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mundo: {
    flex: 1,
    height: 100,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
