import AsyncStorage from "@react-native-async-storage/async-storage";

export const asyncStorage = {
  getItem: async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value) return JSON.parse(JSON.parse(value));
    } catch (error) {
      return null;
    }
  },
  setItem: async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  },
  removeItem: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  },
  clear: async () => {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (error) {
      return false;
    }
  },
};
