import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: colors.darkGrey,
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderRadius: 14,
    width: '40%',
    alignSelf: 'center',
  },
  googleIcon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
});
