import { View, Text, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { uploadMedia } from '../../services/adminService';

export default function Upload() {
  const upload = async () => {
    const file = await DocumentPicker.getDocumentAsync({});
    if (file.assets) {
      await uploadMedia(file.assets[0]);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Admin Upload</Text>
      <Button title="Upload Media" onPress={upload} />
    </View>
  );
}
