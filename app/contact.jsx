
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const app = () => {
  return (
    <View>
      <Text>Name: The Coffee Shop</Text>
      <Text>Address: 321, Baker St.</Text>
      <Text>Operating Hours: Mon - Sun 7am till 8pm</Text>
    </View>
  );
}

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
})
