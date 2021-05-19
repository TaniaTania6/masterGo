import {PermissionsAndroid, Platform} from 'react-native';

const checkAndroidPermission = async (permission, modalParams) => {
  if (Platform.OS === 'ios') return true;
  const hasPermission = await PermissionsAndroid.check(permission);

  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission, modalParams);
  console.log(status, 'status');

  return status === PermissionsAndroid.RESULTS.GRANTED;
};

export const checkAndroidLocationPermission = () =>
  checkAndroidPermission(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
    title: 'MasterGO App Geolocation Permission',
    message: 'MasterGo mobile app needs access to your geolocation',
    buttonNeutral: 'Ask Me Later',
    buttonNegative: 'Cancel',
    buttonPositive: 'OK',
  });
