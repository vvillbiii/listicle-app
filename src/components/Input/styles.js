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
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
  },
  eye: {
    width: 20,
    height: 20,
    marginHorizontal: 16,
  },
});
