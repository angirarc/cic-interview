import AsyncStorage from "@react-native-async-storage/async-storage";

// Storing data in async storage
export const setItem = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(`Error setting item for key ${key}:`, e);
  }
};

// Retrieving data from async storage
export const getItem = async (key: string): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.error(`Error getting item for key ${key}:`, e);
    return null;
  }
};

// Removing data from async storage
export const removeItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(`Error removing item for key ${key}:`, e);
  }
};
