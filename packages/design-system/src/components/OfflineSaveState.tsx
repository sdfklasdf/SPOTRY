import { Text, View, StyleSheet } from 'react-native';
import { colors, radius, spacing, typography } from '../tokens/index.js';
export function OfflineSaveState(){return <View accessibilityRole="alert" style={styles.root}><Text style={styles.title}>기록을 아직 저장하지 못했어요</Text><Text style={styles.copy}>연결이 돌아오면 다시 시도해주세요. 저장 완료로 표시하지 않았어요.</Text></View>}
const styles=StyleSheet.create({root:{borderRadius:radius.md,backgroundColor:colors.semantic.warningBg,padding:spacing[3],gap:spacing[1]},title:{fontFamily:typography.family.sans,fontSize:typography.size.sm,fontWeight:typography.weight.bold,color:colors.semantic.warningText},copy:{fontFamily:typography.family.sans,fontSize:typography.size.xs,color:colors.ink[800]}});
