import { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import actions from "../components/action";
import Items from "../Items/Items";

const Home = ({ navigation }) => {
  const { items } = useSelector((store) => store.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchItems());
  }, []);

  return (
    <View>
      <View style={styles.navigation}>
        <Button
          style={styles.button}
          title="Fat Free"
          onPress={() => navigation.navigate("fat-free")}
        />
        <Button title="Vegan" onPress={() => navigation.navigate("vegan")} />
      </View>
      <Items items={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 90,
    marginVertical: 20,
  },
});

export default Home;
