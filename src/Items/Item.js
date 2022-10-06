import { StyleSheet, View, Text } from "react-native";

const Item = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4c8bf5",
    borderRadius: 7,
    justifyContent: "space-between",
  },
  text: {
    flex: 0.9,
    marginRight: 10,
    padding: 10,
    fontSize: 30,
    fontWeight: "200",
    color: "#000000",
  },
});

export default Item;
