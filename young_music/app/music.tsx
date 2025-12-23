import { View, Text } from 'react-native';
import MusicCard from '../components/MusicCard';

export default function Music() {
  return (
    <View style={{ padding: 15 }}>
      <Text style={{ fontSize: 22 }}>🎧 Music</Text>

      <MusicCard
        title="Sample Song"
        artist="Young Gee"
        url="https://example.com/music.mp3"
      />
    </View>
  );
}
