import {StyleSheet} from 'react-native';

export const globalColors = {
  primary: '#7037eb',
  secondary: '#f72585',
  background: '#fff',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.background,
  },
  primaryButton: {
    backgroundColor: globalColors.primary,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: globalColors.background,
    fontSize: 18,
  },
});
