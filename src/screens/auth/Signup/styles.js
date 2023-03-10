import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  agreeText: {
    fontSize: 17,
    color: colors.blue,
    marginLeft: 8,
  },
  agreeTextBold: {
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 24,
  },
  footerText: {
    color: colors.blue,
    marginBottom: 14,
    textAlign: 'center',
  },
  footerLink: {
    fontWeight: 'bold',
  },
});
