import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  game: undefined;
  leaderBoard: undefined;
};

export type GameScreenProps = NativeStackScreenProps<RootStackParamList>;
export type LeaderBoardScreenProps = NativeStackScreenProps<RootStackParamList>;
