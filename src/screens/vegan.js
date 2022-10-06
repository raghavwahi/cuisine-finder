import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import Items from "../Items/Items";

const Vegan = () => {
  const { items } = useSelector((store) => store.items);
  return (
    <View>
      <Items items={items} filter="vegan" />
    </View>
  );
};

export default Vegan;
