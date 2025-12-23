import { storage, db } from './firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';

export const uploadMedia = async (file) => {
  const response = await fetch(file.uri);
  const blob = await response.blob();

  const storageRef = ref(storage, `media/${file.name}`);
  await uploadBytes(storageRef, blob);

  const url = await getDownloadURL(storageRef);

  await addDoc(collection(db, 'media'), {
    title: file.name,
    url,
    createdAt: Date.now(),
  });
};
