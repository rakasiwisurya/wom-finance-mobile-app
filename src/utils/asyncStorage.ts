import AsyncStorage from "@react-native-async-storage/async-storage";

export const asyncStorage = {
  getItem: async (key: string, isJSON: boolean = true) => {
    try {
      const value = await AsyncStorage.getItem(key);

      if (value) {
        if (isJSON) return JSON.parse(JSON.parse(value));
        return value;
      }
    } catch (error) {
      return null;
    }
  },
  setItem: async (key: string, value: string, isJSON: boolean = true) => {
    try {
      await AsyncStorage.setItem(key, isJSON ? JSON.stringify(value) : value);
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
