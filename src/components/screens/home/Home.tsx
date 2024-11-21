import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { ThemedText } from "../../ThemedText";
import { ThemedView } from "../../ThemedView";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const { width } = Dimensions.get("window");
const productWidth = width / 2 - 24;

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const products: Product[] = [
    {
      id: "1",
      name: "Somali Tea Set",
      price: 25.99,
      image: "https://picsum.photos/200",
    },
    {
      id: "2",
      name: "Traditional Dirac",
      price: 39.99,
      image: "https://picsum.photos/201",
    },
    {
      id: "3",
      name: "Somali Spice Mix",
      price: 12.99,
      image: "https://picsum.photos/202",
    },
    {
      id: "4",
      name: "Handmade Basket",
      price: 18.99,
      image: "https://picsum.photos/203",
    },
    {
      id: "5",
      name: "Handmade Basket",
      price: 18.99,
      image: "https://picsum.photos/204",
    },
    {
      id: "6",
      name: "Handmade Basket",
      price: 18.99,
      image: "https://picsum.photos/205",
    },
  ];

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity style={styles.productItem}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.productImage}
        imageStyle={{ borderRadius: 12 }}
      >
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>10% OFF</Text>
        </View>
      </ImageBackground>
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ThemedView style={styles.searchContainer}>
        <Feather
          name="search"
          size={24}
          color="#666"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </ThemedView>

      <View style={styles.categoriesContainer}>
        <ThemedText style={styles.sectionTitle}>Categories</ThemedText>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={["All", "Clothing", "Home", "Food", "Crafts"]}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
      </View>

      <ThemedText style={styles.sectionTitle}>Featured Products</ThemedText>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.productRow}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f7f7f7",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "white",
    borderRadius: 25,
    margin: 16,
    paddingHorizontal: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 16,
    marginBottom: 12,
    // color: "#333",
  },
  categoryItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    marginHorizontal: 6,
    marginLeft: 16,
  },
  categoryText: {
    fontSize: 16,
    color: "#333",
  },
  productList: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  productRow: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  productItem: {
    width: productWidth,
    marginHorizontal: 8,
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    height: productWidth,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: 10,
  },
  discountBadge: {
    backgroundColor: "#ff6b6b",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  discountText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: "#4a90e2",
    fontWeight: "bold",
  },
});

export default Home;
