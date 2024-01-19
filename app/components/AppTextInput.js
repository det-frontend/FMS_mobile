import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import color from "../config/color";

function AppTextInput({ icon, width = 100, value, onSearch, ...otherProps }) {
  return (
    <View style={[styles.container, { width: `${width}%` }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color='black'
          style={styles.icon}
        />
      )}
      {onSearch ? (
        <TextInput
          value={value}
          onChangeText={(newText) => onSearch(newText)}
          style={styles.text}
          {...otherProps}
        />
      ) : (
        <TextInput value={value} style={styles.text} {...otherProps} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.light,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    paddingVertical: 8,
    alignItems: "center",
    marginVertical: 7,
  },
  text: {
    fontSize: 14,
    height: 20,
    width: "95%",
    color: "black",
    fontWeight: "bold",
  },
  icon: {
    marginRight: 7,
    marginLeft: 3,
  },
});

export default AppTextInput;
