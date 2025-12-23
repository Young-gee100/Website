import { View, TextInput, Button } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';

export default function Login() {
  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button
        title="Login"
        onPress={() =>
          signInWithEmailAndPassword(auth, 'test@mail.com', '123456')
        }
      />
    </View>
  );
}
