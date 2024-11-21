import { StyleSheet, View, Text } from 'react-native';

import { ExternalLink } from '@/src/components/ExternalLink';
import { ThemedText } from '@/src/components/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';

export default function Cart() {
  return (
    <View style={styles.container}>
      <Text>Shopping Cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
