import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";
import { ThemedText } from "../../ThemedText";
import { ThemedView } from "../../ThemedView";

const { width } = Dimensions.get("window");
const itemWidth = (width - 40) / 3;

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Continent {
  id: string;
  name: string;
  countries: Category[];
}

export const continents: Continent[] = [
  {
    id: "africa",
    name: "Africa",
    countries: [
      { id: "somalia", name: "Somalia", imageUrl: "https://picsum.photos/300" },
      { id: "kenya", name: "Kenya", imageUrl: "https://picsum.photos/301" },
      { id: "egypt", name: "Egypt", imageUrl: "https://picsum.photos/302" },
      { id: "nigeria", name: "Nigeria", imageUrl: "https://picsum.photos/303" },
      {
        id: "tanzania",
        name: "Tanzania",
        imageUrl: "https://picsum.photos/304",
      },
      {
        id: "south-africa",
        name: "South Africa",
        imageUrl: "https://picsum.photos/305",
      },
      { id: "uganda", name: "Uganda", imageUrl: "https://picsum.photos/306" },
    ],
  },
  {
    id: "north america",
    name: "North America",
    countries: [
      { id: "usa", name: "USA", imageUrl: "https://picsum.photos/300" },
      { id: "canada", name: "Canada", imageUrl: "https://picsum.photos/301" },
      { id: "mexico", name: "Mexico", imageUrl: "https://picsum.photos/302" },
    ],
  },
  {
    id: "south america",
    name: "South America",
    countries: [
      { id: "brazil", name: "Brazil", imageUrl: "https://picsum.photos/303" },
      {
        id: "argentina",
        name: "Argentina",
        imageUrl: "https://picsum.photos/304",
      },
      {
        id: "colombia",
        name: "Colombia",
        imageUrl: "https://picsum.photos/305",
      },
      { id: "peru", name: "Peru", imageUrl: "https://picsum.photos/306" },
      {
        id: "venezuela",
        name: "Venezuela",
        imageUrl: "https://picsum.photos/307",
      },
      { id: "chile", name: "Chile", imageUrl: "https://picsum.photos/308" },
      { id: "ecuador", name: "Ecuador", imageUrl: "https://picsum.photos/309" },
    ],
  },
  {
    id: "europe",
    name: "Europe",
    countries: [
      { id: "france", name: "France", imageUrl: "https://picsum.photos/303" },
      { id: "germany", name: "Germany", imageUrl: "https://picsum.photos/304" },
      { id: "italy", name: "Italy", imageUrl: "https://picsum.photos/305" },
      { id: "russia", name: "Russia", imageUrl: "https://picsum.photos/306" },
      { id: "uk", name: "UK", imageUrl: "https://picsum.photos/307" },
      {
        id: "switzerland",
        name: "Switzerland",
        imageUrl: "https://picsum.photos/308",
      },
      { id: "belgium", name: "Belgium", imageUrl: "https://picsum.photos/309" },
      {
        id: "netherlands",
        name: "Netherlands",
        imageUrl: "https://picsum.photos/310",
      },
      {
        id: "portugal",
        name: "Portugal",
        imageUrl: "https://picsum.photos/311",
      },
      { id: "spain", name: "Spain", imageUrl: "https://picsum.photos/312" },
      { id: "austria", name: "Austria", imageUrl: "https://picsum.photos/313" },
    ],
  },
  {
    id: "asia",
    name: "Asia",
    countries: [
      { id: "japan", name: "Japan", imageUrl: "https://picsum.photos/306" },
      { id: "china", name: "China", imageUrl: "https://picsum.photos/307" },
      { id: "india", name: "India", imageUrl: "https://picsum.photos/308" },
      {
        id: "indonesia",
        name: "Indonesia",
        imageUrl: "https://picsum.photos/309",
      },
      {
        id: "malaysia",
        name: "Malaysia",
        imageUrl: "https://picsum.photos/310",
      },
      {
        id: "philippines",
        name: "Philippines",
        imageUrl: "https://picsum.photos/311",
      },
      {
        id: "singapore",
        name: "Singapore",
        imageUrl: "https://picsum.photos/312",
      },
      {
        id: "thailand",
        name: "Thailand",
        imageUrl: "https://picsum.photos/313",
      },
    ],
  },
  {
    id: "middle east",
    name: "Middle East",
    countries: [
      { id: "kuwait", name: "Kuwait", imageUrl: "https://picsum.photos/306" },
      { id: "bahrain", name: "Bahrain", imageUrl: "https://picsum.photos/307" },
      {
        id: "saudi arabia",
        name: "Saudi Arabia",
        imageUrl: "https://picsum.photos/308",
      },
      { id: "iraw", name: "Iraq", imageUrl: "https://picsum.photos/309" },
      { id: "qatar", name: "Qatar", imageUrl: "https://picsum.photos/310" },
      { id: "oman", name: "Oman", imageUrl: "https://picsum.photos/311" },
      { id: "yemen", name: "Yemen", imageUrl: "https://picsum.photos/312" },
      {
        id: "united arab emairates",
        name: "United Arab Emairates",
        imageUrl: "https://picsum.photos/313",
      },
    ],
  },
  {
    id: "australia",
    name: "Australia",
    countries: [
      {
        id: "australia",
        name: "Australia",
        imageUrl: "https://picsum.photos/309",
      },
      {
        id: "new-zealand",
        name: "New Zealand",
        imageUrl: "https://picsum.photos/310",
      },
      {
        id: "papua-new-guinea",
        name: "Papua New Guinea",
        imageUrl: "https://picsum.photos/311",
      },
      { id: "fiji", name: "Fiji", imageUrl: "https://picsum.photos/312" },
    ],
  },
];

interface CategoryItemProps {
  category: Category;
  onPress: (category: Category) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, onPress }) => (
  <TouchableOpacity
    style={styles.categoryItem}
    onPress={() => onPress(category)}
  >
    <Image source={{ uri: category.imageUrl }} style={styles.categoryImage} />
    <ThemedText style={styles.categoryName}>{category.name}</ThemedText>
  </TouchableOpacity>
);

interface ContinentItemProps {
  continent: Continent;
  onCountryPress: (country: Category) => void;
}

const ContinentItem: React.FC<ContinentItemProps> = ({
  continent,
  onCountryPress,
}) => (
  <View style={styles.continentContainer}>
    <ThemedText style={styles.continentName}>{continent.name}</ThemedText>
    <View style={styles.countriesContainer}>
      {continent.countries.map((country) => (
        <CategoryItem
          key={country.id}
          category={country}
          onPress={onCountryPress}
        />
      ))}
    </View>
  </View>
);

interface CategoriesListProps {
  onCountryPress: (category: Category) => void;
}

export const CategoriesList: React.FC<CategoriesListProps> = ({
  onCountryPress,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {continents.map((continent) => (
        <ContinentItem
          key={continent.id}
          continent={continent}
          onCountryPress={onCountryPress}
        />
      ))}
    </ScrollView>
  );
};

export const CategoriesScreen: React.FC = () => {
  const handleCountryPress = (country: Category) => {
    console.log(`Country pressed: ${country.name}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CategoriesList onCountryPress={handleCountryPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  container: {
    padding: 10,
  },
  continentContainer: {
    marginBottom: 20,
  },
  continentName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  countriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  categoryItem: {
    alignItems: "center",
    justifyContent: "center",
    width: itemWidth,
    height: itemWidth + 20,
    marginBottom: 10,
  },
  categoryImage: {
    width: itemWidth - 20,
    height: itemWidth - 20,
    borderRadius: 10,
  },
  categoryName: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 5,
  },
});

export default CategoriesScreen;
