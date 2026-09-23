import { Text, View, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../tokens/index.js';
const required=['재미','체감 강도','다시 하고 싶은 정도'] as const;
const optional=['난이도','혼자 참여 편안함'] as const;
export function ReflectionFields(){return <View style={styles.root}><Text style={styles.helper}>3개만 기록해도 충분해요. 선택 정보는 건너뛸 수 있어요.</Text>{required.map(x=><Text key={x} style={styles.required}>필수 · {x}</Text>)}<Text style={styles.optionalTitle}>선택 입력</Text>{optional.map(x=><Text key={x} style={styles.optional}>{x}</Text>)}</View>}
const styles=StyleSheet.create({root:{gap:spacing[2]},helper:{fontFamily:typography.family.sans,fontSize:typography.size.sm,color:colors.ink[600]},required:{minHeight:44,fontFamily:typography.family.sans,fontSize:typography.size.md,fontWeight:typography.weight.semibold,color:colors.ink[950]},optionalTitle:{marginTop:spacing[2],fontFamily:typography.family.sans,fontSize:typography.size.sm,fontWeight:typography.weight.bold,color:colors.ink[800]},optional:{minHeight:44,fontFamily:typography.family.sans,fontSize:typography.size.sm,color:colors.ink[600]}});
