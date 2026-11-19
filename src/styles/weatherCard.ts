import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "./colors";

const weatherCard = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    margin: spacing.md,
    padding: spacing.lg,
    elevation: 3,
  },
  city: {
    ...typography.subtitle,
    color: colors.text,
    textAlign: "center",
  },
  temperature: {
    color: colors.primary,
    fontSize: 56,
    fontWeight: "700",
    textAlign: "center",
    marginTop: spacing.md,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: "center",
    textTransform: "capitalize",
  },
  details: {
    borderTopColor: colors.border,
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: spacing.lg,
    paddingTop: spacing.md,
  },
  detail: {
    width: "50%",
    alignItems: "center",
    paddingVertical: spacing.sm,
  },
  label: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  value: {
    ...typography.body,
    color: colors.text,
    fontWeight: "600",
    marginTop: spacing.xs,
    textAlign: "center",
  },
});

export default weatherCard;