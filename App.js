import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  FlatList,
  Button,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoalHandler = (goalTitle) => {
    if (goalTitle.length === 0) {
      return;
    }
    setGoals((prev) => [
      ...prev,
      {
        key: (Math.random() + Math.random()).toString(),
        value: goalTitle,
      },
    ]);
    setModalVisible(false);
  };

  const onDelete = (goalKey) => {
    setGoals((prev) => {
      return prev.filter((el, idx, arr) => el.key !== goalKey);
    });
  };

  return (
    <View style={styles.platform}>
      <View style={{ marginBottom: 10 }}>
        <Button title="Add New Goal" onPress={() => setModalVisible(true)} />
      </View>
      <GoalInput
        closeModal={() => setModalVisible(false)}
        visible={modalVisible}
        addGoalHandler={addGoalHandler}
      />

      {/* if yor object dont have a key property but id,then use keyExtractor to specify which one your want to use as key = {(item,index)=> item.id} */}
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            onDelete={onDelete}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  platform: {
    paddingTop:
      Platform.OS === "android" || Platform.OS === "ios"
        ? StatusBar.currentHeight + 30
        : 40,
    padding: 40,
    paddingBottom: 60,
  },
});
