import { Pressable, Text, StyleSheet } from 'react-native';
import { colors, radius, spacing, typography } from '../tokens/index.js';

interface BaseButtonProps { label: string; disabled?: boolean; onPress?: () => void; }

export function SecondaryButton({ label, disabled = false, onPress }: BaseButtonProps) {
  return <Pressable accessibilityRole="button" accessibilityState={{ disabled }} disabled={disabled} onPress={onPress} style={[styles.secondary, disabled && styles.disabled]}><Text style={styles.secondaryText}>{label}</Text></Pressable>;
}

export function TextButton({ label, disabled = false, onPress }: BaseButtonProps) {
  return <Pressable accessibilityRole="button" accessibilityState={{ disabled }} disabled={disabled} onPress={onPress} style={[styles.textButton, disabled && styles.disabled]}><Text style={styles.textLabel}>{label}</Text></Pressable>;
}

const styles = StyleSheet.create({
  secondary: { minHeight: 48, borderRadius: radius.md, borderWidth: 1, borderColor: colors.line[200], alignItems: 'center', justifyContent: 'center', paddingHorizontal: spacing[5], backgroundColor: colors.canvas },
  secondaryText: { fontFamily: typography.family.sans, fontSize: typography.size.md, fontWeight: typography.weight.bold, color: colors.ink[950] },
  textButton: { minHeight: 44, justifyContent: 'center', paddingHorizontal: spacing[2] },
  textLabel: { fontFamily: typography.family.sans, fontSize: typography.size.sm, fontWeight: typography.weight.semibold, color: colors.ink[800] },
  disabled: { opacity: 0.45 },
});
