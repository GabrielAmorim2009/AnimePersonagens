import { StyleSheet, Text, View } from 'react-native';

export default function Card({nome = 'Não Informado', img, mundo = 'Não Informado'}) {
  return (
    <View style={styles.container}>
        <Image style={styles.img}>{img}</Image>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.mundo}>{mundo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
