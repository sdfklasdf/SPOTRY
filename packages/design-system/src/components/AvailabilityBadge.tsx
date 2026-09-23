import { Text, View, StyleSheet } from 'react-native';
import type { Availability } from '../domain/types.js';
import { presentAvailability } from '../contracts/availability.js';
import { colors, radius, spacing, typography } from '../tokens/index.js';

export function AvailabilityBadge({availability}:{availability:Availability}){
  const p=presentAvailability(availability);
  return <View accessibilityLabel={`예약 상태 ${p.label}`} style={[styles.base,p.tone==='positive'?styles.positive:p.tone==='warning'?styles.warning:styles.muted]}><Text style={styles.text}>{p.label}</Text></View>;
}
const styles=StyleSheet.create({base:{alignSelf:'flex-start',borderRadius:radius.pill,paddingHorizontal:spacing[2],paddingVertical:spacing[1]},positive:{backgroundColor:colors.semantic.successBg},warning:{backgroundColor:colors.semantic.warningBg},muted:{backgroundColor:colors.soft},text:{fontFamily:typography.family.sans,fontSize:typography.size.xs,fontWeight:typography.weight.semibold,color:colors.ink[800]}});
