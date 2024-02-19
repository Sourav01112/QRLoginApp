import AsyncStorage from '@react-native-async-storage/async-storage';
export const UserData = 'UserData'

export const _setUserData = async (data) => {
    try {

      await AsyncStorage.setItem(
        UserData,
        JSON.stringify(data)
      );
    } catch (error) {
      // Error saving data
    }
};

export const _getUserData = async () => {
    try {
      const value = await AsyncStorage.getItem(UserData);
      if (value !== null) {
        // We have data!!
        const jsonValue = await AsyncStorage.getItem(UserData)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      }
    } catch (error) {
      // Error retrieving data
    }
};

export const _removeUserData = async () => {
    try {
        await AsyncStorage.removeItem(UserData);

    } catch (error) {

    }
}