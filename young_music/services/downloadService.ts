import RNFS from 'react-native-fs';

export const downloadMedia = async (url: string, name: string) => {
  const path = `${RNFS.DocumentDirectoryPath}/${name}`;

  return RNFS.downloadFile({
    fromUrl: url,
    toFile: path,
  }).promise;
};
