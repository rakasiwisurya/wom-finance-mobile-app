import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

export const useAppNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

export const useAppRoute = <T extends keyof RootStackParamList>() =>
  useRoute<RouteProp<RootStackParamList, T>>();
