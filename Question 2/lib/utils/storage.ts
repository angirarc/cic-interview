import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(`Error setting item for key ${key}:`, e);
  }
};

export const getItem = async (key: string): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.error(`Error getting item for key ${key}:`, e);
    return null;
  }
};

export const removeItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(`Error removing item for key ${key}:`, e);
  }
};
