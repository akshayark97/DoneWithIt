import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../config/colors";

export default function AppButton({title, onPress, color}) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: 'tomato',
    borderRadius: 25,
    justifyContent: "center",
    marginVertical: 10,
    padding: 15,
    width: "100%",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
});