import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ArtistProfile() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 26 }}>Artist ID: {id}</Text>
    </View>
  );
}
