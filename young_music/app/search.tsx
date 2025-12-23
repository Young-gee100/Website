import { View, Text } from 'react-native';
import SearchBar from '../components/SearcBar';

export default function Search() {
  return (
    <View style={{ padding: 15 }}>
      <SearchBar onSearch={q => console.log(q)} />
      <Text>Results will appear here</Text>
    </View>
  );
}
