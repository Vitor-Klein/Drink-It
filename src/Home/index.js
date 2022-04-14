import React, { useState, useEffect } from 'react'

import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, LogBox } from 'react-native';
import { Button, Center } from 'native-base'
import Swiper from 'react-native-dynamic-deck-swiper'
import styles from './style'
import DrinkImage from '../assets/drink.png'
import DrunkAnimation from '../animations/drunk.json'
import { cards } from '../cards'
import LottieView from  "lottie-react-native"


export default function Home() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imagePath, setImagePath] = useState('')

  function selectHandleCard() {
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
    LogBox.ignoreLogs(['Failed prop'])
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
                title === '' ? (
                  <View style={styles.InitailCard}>
                    <Text style={styles.initialText}>
                      Bem vindo ao DrinkIt para começar arraste a carta para qualquer lado
                    </Text>
                    <LottieView
                      style={styles.initialAnimation}
                      source={DrunkAnimation}
                      loop
                      autoPlay
                      speed={0.75}
                    />
                  </View>
                ) : (
                  <Button style={styles.card}>
                    <Center>
                      <Text style={styles.title}>{title}</Text>
                      <View style={styles.imageContainer}>
                        <Image
                          style={styles.imageCard}
                          source={imagePath}
                          alt="Alternate Text"
                        />
                      </View>

                      <Text style={styles.text}>{description}</Text>
                    </Center>
                  </Button>
                )
              )
            }
          }}
          onSwiped={() => selectHandleCard()}
        >
          {(card) =>
          (
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

