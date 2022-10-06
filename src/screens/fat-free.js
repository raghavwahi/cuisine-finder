import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import Items from "../Items/Items";

const FatFree = () => {
  const { items } = useSelector((store) => store.items);
  return (
    <View>
      <Items items={items} filter="fat-free" />
    </View>
  );
};

export default FatFree;
