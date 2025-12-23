import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from './firebase';

export const addToFavorites = async (userId: string, song: any) => {
  const ref = doc(db, 'users', userId);
  await updateDoc(ref, {
    favorites: arrayUnion(song),
  });
};
