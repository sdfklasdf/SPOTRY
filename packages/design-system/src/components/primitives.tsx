import { Pressable, Text, View, StyleSheet } from 'react-native';
import { colors, radius, spacing, typography } from '../tokens/index.js';

export interface ButtonProps { label:string; disabled?:boolean; onPress?:()=>void; }
export function PrimaryButton({label,disabled=false,onPress}:ButtonProps){
  return <Pressable accessibilityRole="button" accessibilityState={{disabled}} disabled={disabled} onPress={onPress} style={[styles.button,disabled&&styles.disabled]}><Text style={styles.buttonText}>{label}</Text></Pressable>;
}

export interface ChipProps { label:string; selected?:boolean; onPress?:()=>void; }
export function QuickFilterChip({label,selected=false,onPress}:ChipProps){
  return <Pressable accessibilityRole="button" accessibilityState={{selected}} onPress={onPress} style={[styles.chip,selected&&styles.chipSelected]}><Text style={styles.chipText}>{label}</Text></Pressable>;
}

const styles=StyleSheet.create({
  button:{minHeight:48,borderRadius:radius.md,backgroundColor:colors.action[500],alignItems:'center',justifyContent:'center',paddingHorizontal:spacing[5]},
  disabled:{opacity:0.45},
  buttonText:{fontFamily:typography.family.sans,fontSize:typography.size.md,fontWeight:typography.weight.bold,color:colors.ink[950]},
  chip:{minHeight:44,paddingHorizontal:spacing[4],borderRadius:radius.pill,borderWidth:1,borderColor:colors.line[200],alignItems:'center',justifyContent:'center',backgroundColor:colors.canvas},
  chipSelected:{backgroundColor:colors.action[100],borderColor:colors.action[600]},
  chipText:{fontFamily:typography.family.sans,fontSize:typography.size.sm,fontWeight:typography.weight.semibold,color:colors.ink[800]}
});
