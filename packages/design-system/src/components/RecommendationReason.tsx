import { Text, View, StyleSheet } from 'react-native';
import type { RecommendationEvidence } from '../domain/types.js';
import { colors, spacing, typography } from '../tokens/index.js';
export function RecommendationReason({sportName,evidence}:{sportName:string;evidence:readonly RecommendationEvidence[]}){return <View style={styles.root}><Text style={styles.title}>왜 {sportName}을 추천했나요?</Text>{evidence.map((x,i)=><Text key={`${x.kind}-${i}`} style={styles.row}>{x.kind==='personal'?'내 기록':'현실 조건'} · {x.text}</Text>)}</View>}
const styles=StyleSheet.create({root:{gap:spacing[1]},title:{fontFamily:typography.family.sans,fontSize:typography.size.sm,fontWeight:typography.weight.bold,color:colors.ink[950]},row:{fontFamily:typography.family.sans,fontSize:typography.size.sm,color:colors.ink[600]}});
