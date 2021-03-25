import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "auth_token";

export async function tokenInsertLocalStorage(token) {
  if (!key) {
    return null;
  }

  try {
    await AsyncStorage.setItem(key, token);
    return true;
  } catch (e) {
    console.log("Error storing key locally.");
    return false;
  }
}

export async function tokenInLocalStorage() {
  if (!key) {
    return null;
  }

  try {
    const value = await AsyncStorage.getItem(key);
    console.log("Is token in local storage: " + value);
    if (value !== null) {
      // token found in local storage
      return true;
    } else {
      // token not present in local storage
      return false;
    }
  } catch (e) {
    console.log("Error reading value");
    return false;
  }
}

export async function deleteAuthToken() {
  if (!key) {
    return null;
  }

  try {
    const value = await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    console.log("Error deleting token");
    return false;
  }
}

export async function readTokenInLocalStorage() {
  if (!key) {
    return null;
  }

  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // token found in local storage
      return value;
    } else {
      // token not present in local storage
      return null;
    }
  } catch (e) {
    console.log("Error reading value");
    return false;
  }
}
