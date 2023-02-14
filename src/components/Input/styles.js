import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  label: {
    color: colors.blue,
    marginVertical: 8,
    fontWeight: '500',
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 14,
    borderColor: colors.grey,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
});
