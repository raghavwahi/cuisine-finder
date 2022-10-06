import { StyleSheet, ScrollView, View } from "react-native";

import Item from "./Item";

const Items = (props) => {
  const itemsList = props.items.map((item) => {
    if (props.filter) {
      return (
        props.filter === item.category && (
          <Item key={item.id} title={item.title} />
        )
      );
    }
    return <Item key={item.id} title={item.title} />;
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.items}>{itemsList}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  items: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Items;
