import React, {useState, useEffect} from 'react'

import { StatusBar } from 'expo-status-bar';
import { Text, View, Image,LogBox } from 'react-native';
import { Button, Center } from 'native-base'
import Swiper from 'react-native-dynamic-deck-swiper'
import styles from './style'
import DrinkImage from '../assets/drink.png'
import {cards} from '../cards'

  
export default function Home() {
  const[title, setTitle] = useState('')
  const[description, setDescription] = useState('')
  const[imagePath, setImagePath] = useState('')

  function selectHandleCard(){
    const index = Math.floor(Math.random() * cards.cards.length);
    var cardValue = cards.cards[index]

    setTitle(cardValue.title)
    setDescription(cardValue.description)
    setImagePath(cardValue.imagePath)
  }

  useEffect(() => {
    selectHandleCard()
    LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`'])
    LogBox.ignoreLogs(['source.uri should not be an empty string'])
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image 
        style={styles.image}
        source={DrinkImage}
      />
      <View style={styles.swiperContainer}>
      <Swiper
        style={styles.swiper}
        getNextCardData={({ first, left, right, previousCards }) => {
          if (previousCards.length >= 1000) {
            return null;
          }
          if (first || left || right) {
            return (
                <Button style={styles.card}>
                    <Center>
                    <Text style={styles.title}>{title}</Text>
                    <Image 
                    style={styles.imageCard}
                    source={imagePath}
                    alt="Alternate Text"
                  />
                  <Text style={styles.text}>{description}</Text>
                  </Center>
              </Button>
            )
          }
        }}
        onSwiped={() => selectHandleCard()}
      >
        {(card) =>
          card === null ? (
            <View style={styles.card}>
              <Text style={styles.text}>This is the end of the deck, pal.</Text>
            </View>
          ) : (
            <View style={styles.card}>
              <Text style={styles.text}>{card}</Text>
            </View>
          )
        }
      </Swiper>
      </View>
      
    </View>
  );
}

