import { Text, TouchableOpacity } from 'react-native';
import TrackPlayer from 'react-native-track-player';

export default function MusicCard({ title, artist, url }) {
  const play = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.reset();
    await TrackPlayer.add({
      id: title,
      url,
      title,
      artist,
    });
    await TrackPlayer.play();
  };

  return (
    <TouchableOpacity
      onPress={play}
      style={{
        backgroundColor: '#1E293B',
        padding: 15,
        borderRadius: 12,
        marginVertical: 10,
      }}
    >
      <Text style={{ color: 'white', fontSize: 16 }}>{title}</Text>
      <Text style={{ color: '#94A3B8' }}>{artist}</Text>
    </TouchableOpacity>
  );
}
