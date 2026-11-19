import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "./colors";

const datailStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
  },

  backButton: {
    padding: spacing.md,
    marginTop: spacing.md,
  },

  backButtonText: {
    ...typography.body,
    color: colors.primary,
    fontWeight: '900'
  },

  header: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },

  title: {
    ...typography.title,
    color: colors.text,
    alignItems: 'center',
    justifyContent: 'center'
  },

  subTitle: {
    ...typography.subtitle,
    color: colors.textSecondary,
    alignItems: 'center',
    marginTop: spacing.xs
  },

  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xl * 2
  },

  loadingText: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: spacing.md
  },

  errorContainer: {
    alignItems: "center",
    padding: spacing.md,
  },

  errorText: {
    color: colors.error,
    fontSize: 20,
    fontWeight: '900',
    textAlign: "center",
    marginBottom: spacing.md,
  },

  retryButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },

  retryButtonText: {
    ...typography.body,
    color: colors.cardBackground,
    fontWeight: "600",
  },

});

export default datailStyle;