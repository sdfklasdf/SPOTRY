import { Text, View, StyleSheet } from 'react-native';
import { colors, radius, spacing, typography } from '../tokens/index.js';

export interface DecisionSummaryItem { label: string; value: string; }
export function DecisionSummaryGrid({ items }: { items: readonly DecisionSummaryItem[] }) {
  return <View style={styles.grid}>{items.map((item) => <View key={`${item.label}-${item.value}`} style={styles.item}><Text style={styles.label}>{item.label}</Text><Text style={styles.value}>{item.value}</Text></View>)}</View>;
}
const styles = StyleSheet.create({grid:{flexDirection:'row',flexWrap:'wrap',gap:spacing[2]},item:{width:'48%',minHeight:64,borderWidth:1,borderColor:colors.line[200],borderRadius:radius.md,padding:spacing[3],gap:spacing[1],backgroundColor:colors.canvas},label:{fontFamily:typography.family.sans,fontSize:typography.size.xs,color:colors.ink[600]},value:{fontFamily:typography.family.sans,fontSize:typography.size.sm,fontWeight:typography.weight.bold,color:colors.ink[950]}});
