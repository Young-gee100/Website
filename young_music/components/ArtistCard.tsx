import { Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function ArtistCard({ id, name }) {
  return (
    <TouchableOpacity onPress={() => router.push(`/artist/${id}`)}>
      <Text style={{ fontSize: 18 }}>{name}</Text>
    </TouchableOpacity>
  );
}
