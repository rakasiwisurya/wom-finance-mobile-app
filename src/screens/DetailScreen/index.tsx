import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import { Divider, Icon, MD2Colors, Text } from "react-native-paper";
import Box from "../../components/Box";
import Header from "../../components/Header";
import { formatTime } from "../../utils/formatter";
import useDetailScreen from "./useDetailScreen";

const DetailScreen = () => {
  const { params, navigate, screenWidth, aspectRatio } = useDetailScreen();

  return (
    <>
      <Header title="Detail" onBack={() => navigate.goBack()} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{params?.primaryTitle}</Text>

        <Divider bold style={styles.divider} />

        <Image
          source={{ uri: params?.primaryImage.url }}
          resizeMode="contain"
          style={{
            width: screenWidth,
            aspectRatio,
            borderRadius: 8,
          }}
        />

        <Divider bold style={styles.divider} />

        <FlatList
          horizontal
          data={params?.genres || []}
          keyExtractor={(genre) => genre}
          renderItem={({ item }) => <Box>{item}</Box>}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
        />

        <Divider bold style={styles.divider} />

        <View style={styles.containerData}>
          <View style={styles.containerRow}>
            <Text style={styles.containerLabel}>Rating</Text>
            <Text style={styles.containerColon}>:</Text>
            <Text style={styles.containerValue}>
              {params?.rating?.aggregateRating || 0} (
              {params?.rating?.voteCount || 0})
            </Text>
            <Icon source="star" color={MD2Colors.yellow700} size={18} />
          </View>

          <View style={styles.containerRow}>
            <Text style={styles.containerLabel}>Year</Text>
            <Text style={styles.containerColon}>:</Text>
            <Text style={styles.containerValue}>{params?.startYear}</Text>
          </View>

          <View style={styles.containerRow}>
            <Text style={styles.containerLabel}>Duration</Text>
            <Text style={styles.containerColon}>:</Text>
            <Text style={styles.containerValue}>
              {formatTime(params?.runtimeSeconds || 0)}
            </Text>
          </View>
        </View>

        <Divider bold style={styles.divider} />

        <View>
          <Text style={styles.subtitle}>Synopsis</Text>
          <Text style={styles.description}>{params?.plot}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  title: {
    fontSize: 23,
    fontWeight: "700",
  },
  divider: {
    marginVertical: 10,
  },
  containerData: {
    gap: 5,
  },
  containerRow: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  containerLabel: {
    fontSize: 15,
    width: 75,
  },
  containerColon: {
    fontSize: 15,
  },
  containerValue: {
    fontSize: 15,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    textAlign: "justify",
  },
});
