import { StyleSheet, View, Text } from 'react-native';

import { ExternalLink } from '@/src/components/ExternalLink';
import { ThemedText } from '@/src/components/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';
import CategoriesScreen from '@/src/components/screens/categories/CategoriesScreen';

export default function Categories() {
  return (
    <CategoriesScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
