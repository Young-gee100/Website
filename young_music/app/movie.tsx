import { View, Text } from 'react-native';
import Video from 'react-native-video';

export default function Movie() {
  return (
    <View>
      <Text style={{ fontSize: 22 }}>🎬 Movies</Text>

      <Video
        source={{ uri: 'https://example.com/movie.mp4' }}
        style={{ width: '100%', height: 300 }}
        controls
      />
    </View>
  );
}
