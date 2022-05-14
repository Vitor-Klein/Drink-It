import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: '#9D6381',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swiperContainer: {
    width: windowWidth,
    height: '75%',
    flex: 1
  },
  image: {
    width: 127,
    height: 180,
    marginTop: 50,
    marginBottom: 20
  },
  card: {
    flex: 1,
    backgroundColor: '#612940',
    width: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center',
    margin: 0,
  },
  title: {
    fontSize: 30,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  imageCard: {
    width: 210,
    height: 210,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 20
  },
  text: {
    zIndex: 1,
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'justify',
    width: 300
  },
  initialText:{
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: '#fff',
    width: 350,
    marginTop: 350
  },
  InitailCard:{
    flex: 1,
    backgroundColor: '#612940',
    width: (windowWidth - 100),
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 0,
  },
  initialAnimation:{
    marginTop: -50
  }
});
