import * as SecureStore from "expo-secure-store";

const getLocalData = async (
  key: string
): Promise<Record<string, any> | null> => {
  try {
    const data = await SecureStore.getItemAsync(key);
    if (!data) return null;
    return JSON.parse(data);
  } catch (error) {
    console.error("Error loading data from secure storage:", error);
    throw error;
  }
};

const setLocalData = async (key: string, value: any) => {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving data to secure storage:", error);
  }
};

const removeLocalData = async (key: string) => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error("Error removing data from secure storage:", error);
  }
};

export { getLocalData, removeLocalData, setLocalData };
