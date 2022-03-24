import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { Button, Center } from 'native-base'

import styles from './style'
import DrinkImage from '../assets/drink.png'
import DrunkImage from '../assets/drunk.png'
import DjImage from '../assets/dj.png'

export default function Home() {
  function teste(){
    console.log('Hello World')
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image 
        style={styles.image}
        source={DrinkImage}
      />
      <Button style={styles.card} onPress={() => teste()}>
        <Center>
        <Text style={styles.title}>Se deu Mau!</Text>
        <Image 
        style={styles.imageCard}
        source={DrunkImage}
      />
      <Text style={styles.text}>voce foi selecionado, rebole até o chao ou beba 2 shots</Text>
      </Center>
      </Button>

    </View>
  );
}

