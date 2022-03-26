import React, {useState, useEffect} from 'react'

import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { Button, Center } from 'native-base'

import styles from './style'
import DrinkImage from '../assets/drink.png'
import cards from '../cards.json'

  
export default function Home() {
  const[title, setTitle] = useState('')
  const[description, setDescription] = useState('')
  const[imagePath, setImagePath] = useState('')

  function teste(){
    const index = Math.floor(Math.random() * cards.cards.length);
    var cardValue = cards.cards[index]

    setTitle(cardValue.title)
    setDescription(cardValue.description)
    setImagePath(cardValue.imagePath)
  }

  useEffect(() => {
    teste()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image 
        style={styles.image}
        source={DrinkImage}
      />
      <Button style={styles.card} onPress={() => teste()}>
        <Center>
        <Text style={styles.title}>{title}</Text>
        <Image 
        style={styles.imageCard}
        source={{ 
          uri: imagePath.toString()
        }}
        alt="Alternate Text"
      />
      <Text style={styles.text}>{description}</Text>
      </Center>
      </Button>

    </View>
  );
}

