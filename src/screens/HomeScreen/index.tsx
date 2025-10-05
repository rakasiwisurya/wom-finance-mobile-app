import React from "react";
import { FlatList } from "react-native";
import Header from "../../components/Header";
import MovieCard from "../../components/MovieCard";
import NoData from "../../components/NoData";
import Separator from "../../components/Separator";
import useHomeScreen from "./useHomeScreen";

const HomeScreen = () => {
  const { isMoviesLoading, movies, logout, onRefresh } = useHomeScreen();

  return (
    <>
      <Header title="Home" onLogout={logout} />
      <FlatList
        data={movies}
        renderItem={(item) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id}
        refreshing={isMoviesLoading}
        onRefresh={onRefresh}
        contentContainerStyle={{ padding: 15 }}
        ItemSeparatorComponent={() => <Separator y={15} />}
        ListEmptyComponent={<NoData />}
      />
    </>
  );
};

export default HomeScreen;
