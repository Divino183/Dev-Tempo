import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "./colors";

const seachBarStyle = StyleSheet.create({
  container: {
    padding: spacing.md,
  },

  inputContainer: {
    flexDirection: 'row',
    gap: spacing.md,
  },

  input: {
    flex: 1,
    borderColor: colors.border,
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    borderWidth: 1,
    padding: spacing.md,
    fontSize: 16,
    color: colors.text
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.md,
    paddingHorizontal: spacing.lg,
  },

  buttonText: {
    color: colors.cardBackground,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default seachBarStyle;
