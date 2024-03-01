import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import Avatar from "../components/Avatar";
import { mockLeaderboard } from "../../helpers";
import type { LeaderBoardScreenProps } from "../types";

export default function LeaderBoard({ navigation }: LeaderBoardScreenProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>LEADERBOARD</Text>
          <Text style={styles.subHeader}>Top 10 winners</Text>
          <View style={styles.border} />
        </View>

        <FlatList
          style={styles.flatList}
          data={mockLeaderboard}
          renderItem={({ item, index }) => (
            <View style={styles.flatListCardContainer} key={item.id}>
              {index === 0 ? (
                <View style={styles.no1Container}>
                  <Avatar
                    name={mockLeaderboard[0].name}
                    imageUri={mockLeaderboard[0].image}
                    width={120}
                    height={120}
                    rank={1}
                  />
                  <View style={styles.no1ScoreContainer}>
                    <Text style={styles.no1Name}>
                      {mockLeaderboard[0].name}
                    </Text>
                    <Text style={styles.no1Score}>
                      {mockLeaderboard[0].score} คะแนน
                    </Text>
                  </View>
                </View>
              ) : (
                <View style={styles.cardContainer}>
                  <Avatar
                    rank={index + 1}
                    name={item.name}
                    imageUri={item.image}
                    width={64}
                    height={64}
                  />
                  <View style={styles.scoreContainer}>
                    <Text style={styles.scoreLabel}>{item.name}</Text>
                    <Text style={styles.scoreLabel}>{item.score} คะแนน</Text>
                  </View>
                </View>
              )}
            </View>
          )}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("game")}
          style={styles.submit}
        >
          <Text style={styles.textSubmit}>กลับไปหน้าเล่นเกม</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const BACKGROUND = "#FFFFFF";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 150,
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 40,
  },
  header: {
    color: "#0872b9",
    fontWeight: "700",
    fontSize: 35,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "300",
    marginTop: 10,
    color: "#d73a32",
    backgroundColor: BACKGROUND,
    zIndex: 1,
    paddingHorizontal: 4,
  },
  border: {
    marginTop: -10,
    borderWidth: 0.6,
    borderColor: "#d73a32",
    width: "60%",
  },
  flatList: {
    marginTop: 20,
    display: "flex",
    width: "100%",
    marginBottom: 20,
  },
  no1Container: {
    marginTop: 40,
    display: "flex",
    alignItems: "center",
  },
  leadersList: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },

  flatListCardContainer: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  no1ScoreContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
  },
  no1Name: { fontSize: 30, fontWeight: "bold" },
  no1Score: { fontSize: 40, fontWeight: "bold" },
  cardContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    height: 100,
    borderColor: "#ffffff",
    borderWidth: 3,
    borderRadius: 5,
    marginTop: 15,
    paddingLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    marginBottom: 5,
  },
  scoreContainer: { display: "flex", gap: 4, paddingLeft: 30 },
  scoreLabel: { fontSize: 20, fontWeight: "bold" },
  submit: {
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    marginHorizontal: 20,
  },
  textSubmit: {
    color: "white",
  },
});
