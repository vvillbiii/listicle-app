import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    height: 1,
    backgroundColor: colors.grey,
    flex: 1,
  },
  text: {
    color: colors.blue,
    marginHorizontal: 8,
    fontWeight: '500',
    fontSize: 17,
  },
});
