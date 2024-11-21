import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "../../ThemedView";
import { ThemedText } from "../../ThemedText";
interface MenuItemProps {
  iconName: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
  badge?: number;
}

interface MenuSectionProps {
  title: string;
  items: MenuItemProps[];
}

const MenuItem: React.FC<MenuItemProps> = ({
  iconName,
  label,
  onPress,
  badge,
}) => {
  const [scaleValue] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.7}
    >
      <Animated.View
        style={[styles.menuItem, { transform: [{ scale: scaleValue }] }]}
      >
        <View style={styles.iconContainer}>
          <Ionicons name={iconName} size={24} color="#007185" />
          {badge !== undefined && badge > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{badge > 99 ? "99+" : badge}</Text>
            </View>
          )}
        </View>
        <Text style={styles.label}>{label}</Text>
        <Ionicons name="chevron-forward" size={24} color="#888" />
      </Animated.View>
    </TouchableOpacity>
  );
};

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => (
  <View style={styles.section}>
    <ThemedText style={styles.sectionTitle}>{title}</ThemedText>
    {items.map((item, index) => (
      <MenuItem key={index} {...item} />
    ))}
  </View>
);

const Menu: React.FC = () => {
  const sections: MenuSectionProps[] = [
    {
      title: "Your Account",
      items: [
        {
          iconName: "person-outline",
          label: "Profile",
          onPress: () => console.log("Profile pressed"),
        },
        {
          iconName: "cart-outline",
          label: "Your Orders",
          onPress: () => console.log("Your Orders pressed"),
          badge: 2,
        },
        {
          iconName: "heart-outline",
          label: "Wishlist",
          onPress: () => console.log("Wishlist pressed"),
          badge: 5,
        },
        {
          iconName: "star-outline",
          label: "Your Reviews",
          onPress: () => console.log("Your Reviews pressed"),
        },
        {
          iconName: "card-outline",
          label: "Payment Methods",
          onPress: () => console.log("Payment Methods pressed"),
        },
        {
          iconName: "location-outline",
          label: "Addresses",
          onPress: () => console.log("Addresses pressed"),
        },
      ],
    },
    {
      title: "Customer Service",
      items: [
        {
          iconName: "chatbubble-outline",
          label: "Contact Us",
          onPress: () => console.log("Contact Us pressed"),
        },
        {
          iconName: "help-circle-outline",
          label: "Help Center",
          onPress: () => console.log("Help Center pressed"),
        },
        {
          iconName: "repeat-outline",
          label: "Returns & Refunds",
          onPress: () => console.log("Returns & Refunds pressed"),
        },
        {
          iconName: "shield-checkmark-outline",
          label: "Report an Issue",
          onPress: () => console.log("Report an Issue pressed"),
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          iconName: "notifications-outline",
          label: "Notifications",
          onPress: () => console.log("Notifications pressed"),
        },
        {
          iconName: "language-outline",
          label: "Language",
          onPress: () => console.log("Language pressed"),
        },
        {
          iconName: "moon-outline",
          label: "Dark Mode",
          onPress: () => console.log("Dark Mode pressed"),
        },
        {
          iconName: "lock-closed-outline",
          label: "Privacy & Security",
          onPress: () => console.log("Privacy & Security pressed"),
        },
      ],
    },
    {
      title: "More",
      items: [
        {
          iconName: "gift-outline",
          label: "Gift Cards",
          onPress: () => console.log("Gift Cards pressed"),
        },
        {
          iconName: "share-social-outline",
          label: "Invite Friends",
          onPress: () => console.log("Invite Friends pressed"),
        },
        {
          iconName: "information-circle-outline",
          label: "About Us",
          onPress: () => console.log("About Us pressed"),
        },
        {
          iconName: "log-out-outline",
          label: "Sign Out",
          onPress: () => console.log("Sign Out pressed"),
        },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {sections.map((section, index) => (
        <MenuSection key={index} {...section} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f7f7f7',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    // color: '#111',
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e7f4f5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: "#111",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#ff9900",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Menu;
