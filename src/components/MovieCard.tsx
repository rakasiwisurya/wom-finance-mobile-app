import React from "react";
import {
  ListRenderItemInfo,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Card, Icon, MD2Colors, Text } from "react-native-paper";
import { TMovie } from "../types/movie";

const MovieCard = ({ item }: ListRenderItemInfo<TMovie>) => {
  return (
    <Card style={styles.card}>
      <TouchableOpacity>
        <Text style={styles.title}>{item.primaryTitle}</Text>
        <Card.Cover
          source={{
            uri: item.primaryImage.url,
          }}
        />
        <Card.Content style={styles.contentContainer}>
          <View style={styles.dataContainer}>
            <View style={styles.ratingContainer}>
              <Icon source="star" color={MD2Colors.yellow700} size={25} />
              <Text style={styles.description}>
                {item?.rating?.aggregateRating || 0} (
                {item?.rating?.voteCount || 0})
              </Text>
            </View>
            <Text style={styles.description}>{item.startYear}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{item.plot}</Text>
          </View>
        </Card.Content>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
  contentContainer: {
    marginTop: 15,
    gap: 10,
    marginHorizontal: -5,
  },
  dataContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -5,
  },
  descriptionContainer: {
    flexDirection: "row",
  },
  description: {
    textAlign: "justify",
    fontSize: 15,
    fontWeight: "500",
  },
});

export default MovieCard;
