import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const searchMedia = async (query: string) => {
  const snap = await getDocs(collection(db, 'media'));
  return snap.docs
    .map(d => d.data())
    .filter(m => m.title.toLowerCase().includes(query.toLowerCase()));
};
