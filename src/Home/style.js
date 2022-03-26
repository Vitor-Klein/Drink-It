import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    backgroundColor: '#F5DFBB',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image:{
    width: 120,
    height: 120,
    marginTop: 40,
    marginBottom: 40
  },
  card:{
    flex: 1,
    backgroundColor: '#0E9594',
    width: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center',
    margin: 0
  },
  title:{
    fontSize: 50,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  imageCard:{
    width: 220,
    height: 220,
    marginTop: 40,
    marginBottom: 40
  },
  text:{
    fontSize: 25,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'justify',
    width: 300
  },
});
