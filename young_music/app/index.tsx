import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme';

export default function Home() {
  return (
    <LinearGradient
      colors={[colors.primary, colors.background]}
      style={{ flex: 1, padding: 20 }}
    >
      <Text style={{ color: 'white', fontSize: 28 }}>
        🎵 Young Music & Movies
      </Text>
      <Text style={{ color: '#CBD5E1', marginTop: 10 }}>
        Stream music & movies for free
      </Text>
    </LinearGradient>
  );
}
