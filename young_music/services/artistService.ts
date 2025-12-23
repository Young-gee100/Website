import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export const getArtist = async (id: string) => {
  const snap = await getDoc(doc(db, 'artists', id));
  return snap.data();
};
