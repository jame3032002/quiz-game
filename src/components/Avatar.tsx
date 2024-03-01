import { Image, StyleSheet, Text, View } from "react-native";

interface AvatarInterface {
  width?: number;
  height?: number;
  name: string;
  rank: number;
  imageUri?: string;
}

export default function Avatar(props: AvatarInterface) {
  const { width = 50, height = 50, name, imageUri, rank } = props;

  return (
    <View style={styles.avatarContainer}>
      <View
        style={{
          width,
          height,
          ...styles.textContainer,
        }}
      >
        {imageUri ? (
          <Image
            style={styles.avatar}
            width={width}
            height={height}
            source={{
              uri: imageUri,
            }}
          />
        ) : (
          <Text style={styles.text}>{name.slice(0, 1).toUpperCase()}</Text>
        )}

        <View style={styles.rank}>
          <Text
            style={{
              ...styles.rankLabel,
              fontSize: (width * 12) / 80,
            }}
          >
            {rank}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  avatar: {
    borderWidth: 4,
    borderColor: "#f3f3f3",
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textContainer: {
    display: "flex",
    borderWidth: 4,
    borderRadius: 100,
    borderColor: "#f3f3f3",
    color: "#000000",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  rank: {
    position: "absolute",
    bottom: -8,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "black",
    borderRadius: 2,
    alignItems: "center",
  },
  rankLabel: {
    fontWeight: "bold",
    color: "white",
    paddingHorizontal: 5,
  },
});
