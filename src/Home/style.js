import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    backgroundColor: '#9D6381',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swiperContainer: {
    width: '100%',
    height: '75%',

  },
  image: {
    width: 127,
    height: 180,
    marginTop: 80,
    marginBottom: 20
  },
  card: {
    flex: 1,
    backgroundColor: '#612940',
    width: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center',
    margin: 0
  },
  title: {
    fontSize: 50,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  imageCard: {
    width: 220,
    height: 220,
    marginTop: 40,
    marginBottom: 40
  },
  text: {
    fontSize: 25,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'justify',
    width: 300
  },
});
