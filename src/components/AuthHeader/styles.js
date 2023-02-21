import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginBottom: 15,
  },
  image: {
    width: 18,
    height: 18,
  },
  title: {
    fontSize: 26,
    color: colors.blue,
    fontWeight: '500',
    paddingHorizontal: 16,
  },
});
