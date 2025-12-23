import { View, TextInput, StyleSheet } from "react-native";

type SearchBarProps = {
  onSearch: (text: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search music..."
        onChangeText={onSearch}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8,
  },
});
