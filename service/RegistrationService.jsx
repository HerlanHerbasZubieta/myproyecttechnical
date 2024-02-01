
import { addDoc, collection } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import firebase from '@/service/firebase';

const db = getFirestore(firebase);

const registerUser = async (userData) => {
  try {
    await addDoc(collection(db, 'user'), { ...userData });
    console.log('Usuario registrado con éxito');
  } catch (error) {
    console.error('Error al registrar usuario', error.message);
  }
};

export default registerUser;
