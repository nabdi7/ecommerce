import { StyleSheet, View, Text, SafeAreaView} from "react-native";
import Menu from "@/src/components/screens/menu/Menu";


export default function Cart() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
