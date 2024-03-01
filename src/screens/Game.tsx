import { useCallback, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  RefreshControl,
  TouchableOpacity,
} from "react-native";

import type { GameScreenProps } from "../types";
import { ANSWER, getQuestions } from "../../helpers";

const QUESTIONS = getQuestions();

export default function Game({ navigation }: GameScreenProps) {
  const flatListRef = useRef<FlatList>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [score, setScore] = useState({ isShowScore: false, score: 0 });
  const [state, setState] = useState(QUESTIONS);

  const handlePressAnswer = ({
    value,
    index,
  }: {
    value: string;
    index: number;
  }) => {
    setState((prevState) => {
      state[index].choose = value;
      return [...prevState];
    });
  };

  const handleCheckScore = () => {
    let indexNotAnswer: undefined | number;
    const isNotAnwerAll = state.some((question, index) => {
      const isNotAnswer =
        question.choose === "" || question.choose === undefined;

      if (isNotAnswer && indexNotAnswer === undefined) {
        indexNotAnswer = index;
      }

      return isNotAnswer;
    });

    if (isNotAnwerAll) {
      flatListRef.current?.scrollToIndex({
        index: indexNotAnswer || 0,
        animated: true,
      });

      return;
    }

    let total = 0;

    state.map(({ id, choose }) => {
      if (ANSWER[id] === choose) {
        total++;
      }
    });

    setScore({ isShowScore: true, score: total });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      const getNewQuestions = getQuestions();

      setState(getNewQuestions);
      setRefreshing(false);
      setScore({ isShowScore: false, score: 0 });
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.topicCongtainer}>
          <Text style={styles.topic}>BDMS GAME</Text>
          <Text style={styles.coder}>
            Created By - ITSARAPHONG SANGKAMONGKHOLGIT
          </Text>
        </View>

        <FlatList
          ref={flatListRef}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={styles.gameContainer}
          data={state}
          renderItem={({ item, index }) => (
            <View
              style={{
                ...styles.questionCard,
                marginBottom: index === state.length - 1 ? 15 : 55,
              }}
            >
              <Text style={styles.questionTitle}>{item.question}</Text>

              <View style={styles.choicesContainer}>
                {item.choices.map((i: { value: string; label: string }) => {
                  const isAnswer = score.isShowScore;
                  const isSelected =
                    i.value.toString() === item?.choose?.toString();
                  const isIncorrect =
                    item?.choose?.toString() !== ANSWER[item.id] &&
                    ANSWER[item.id] === i.value;
                  const isCorrect =
                    item?.choose?.toString() === ANSWER[item.id] &&
                    ANSWER[item.id] === i.value;

                  const selectedStyle = isSelected ? styles.selected : {};
                  const incorrectStyle =
                    isAnswer && isIncorrect ? styles.incorrect : {};
                  const correctStyle =
                    isAnswer && isCorrect ? styles.correct : {};

                  return (
                    <TouchableOpacity
                      style={{
                        ...styles.choice,
                        ...selectedStyle,
                        ...incorrectStyle,
                        ...correctStyle,
                      }}
                      key={i.value}
                      onPress={() =>
                        handlePressAnswer({ value: i.value, index })
                      }
                      disabled={isAnswer}
                    >
                      <Text
                        style={{
                          color:
                            isSelected ||
                            ((isCorrect || isIncorrect) && isAnswer)
                              ? "white"
                              : "black",
                        }}
                      >
                        {i.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}
        />
        {score.isShowScore && (
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreLabel}>คุณได้: {score.score} คะแนน</Text>
          </View>
        )}

        {!score.isShowScore ? (
          <TouchableOpacity onPress={handleCheckScore} style={styles.submit}>
            <Text style={styles.textSubmit}>ส่งคำตอบ</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate("leaderBoard")}
            style={styles.submit}
          >
            <Text style={styles.textSubmit}>ดูตารางคะแนน</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 150,
  },
  topicCongtainer: {
    padding: 20,
  },
  topic: {
    fontSize: 30,
    fontWeight: "bold",
  },
  coder: {
    fontSize: 10,
  },
  gameContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  questionCard: {
    width: "100%",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 55,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  questionTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  choicesContainer: {
    display: "flex",
    alignContent: "flex-start",
    gap: 8,
  },
  choice: {
    borderWidth: 2,
    borderColor: "black",
    flex: 1,
    width: "100%",
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  selected: {
    backgroundColor: "black",
  },
  incorrect: {
    backgroundColor: "red",
  },
  correct: {
    backgroundColor: "green",
  },
  scoreContainer: { marginBottom: 10 },
  scoreLabel: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
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
