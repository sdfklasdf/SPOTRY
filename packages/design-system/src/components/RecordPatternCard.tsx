import { Text, View, StyleSheet } from 'react-native';
import type { PatternInsight } from '../domain/types.js';
import { colors, radius, spacing, typography } from '../tokens/index.js';
export function RecordPatternCard({insight}:{insight:PatternInsight}){return <View style={styles.card}><Text style={styles.title}>{insight.title}</Text>{insight.statements.map((x,i)=><Text key={`${i}-${x}`} style={styles.statement}>• {x}</Text>)}</View>}
const styles=StyleSheet.create({card:{gap:spacing[2],padding:spacing[4],borderRadius:radius.lg,backgroundColor:colors.soft},title:{fontFamily:typography.family.sans,fontSize:typography.size.lg,fontWeight:typography.weight.bold,color:colors.ink[950]},statement:{fontFamily:typography.family.sans,fontSize:typography.size.sm,color:colors.ink[800]}});
