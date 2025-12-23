import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

export const createPlaylist = async (userId: string, name: string) => {
  await addDoc(collection(db, 'users', userId, 'playlists'), {
    name,
    songs: [],
  });
};
