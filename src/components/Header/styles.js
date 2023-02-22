import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '500',
  },
  space: {
    width: 24,
  },
});
