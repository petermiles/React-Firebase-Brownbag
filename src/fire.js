import { default as fb } from 'firebase';

const config = {
  apiKey: 'AIzaSyB5K2DclTEadkcb5IxrUsFdrCGoU0-vPrQ',
  authDomain: 'brownbag-a6d89.firebaseapp.com',
  databaseURL: 'https://brownbag-a6d89.firebaseio.com',
  projectId: 'brownbag-a6d89',
  storageBucket: 'brownbag-a6d89.appspot.com',
  messagingSenderId: '1046365089368',
};

const firebase = fb.initializeApp(config);

export default firebase;
