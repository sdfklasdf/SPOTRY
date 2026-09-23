import { Text, View, StyleSheet } from 'react-native';
import { PrimaryButton } from './primitives.js';
import { colors, radius, spacing, typography } from '../tokens/index.js';
export function SoldOutState({onExplore}:{onExplore?:()=>void}){return <View style={styles.root}><Text style={styles.title}>이번 회차는 마감됐어요</Text><Text style={styles.copy}>다른 날짜나 비슷한 초보 체험을 확인해보세요.</Text><PrimaryButton label="다른 체험 보기" {...(onExplore?{onPress:onExplore}:{})}/></View>}
export function RecoveryState({title,copy,actionLabel,onAction}:{title:string;copy:string;actionLabel:string;onAction?:()=>void}){return <View style={styles.root}><Text style={styles.title}>{title}</Text><Text style={styles.copy}>{copy}</Text><PrimaryButton label={actionLabel} {...(onAction?{onPress:onAction}:{})}/></View>}
const styles=StyleSheet.create({root:{gap:spacing[3],padding:spacing[5],borderWidth:1,borderColor:colors.line[200],borderRadius:radius.lg,backgroundColor:colors.canvas},title:{fontFamily:typography.family.sans,fontSize:typography.size.lg,fontWeight:typography.weight.bold,color:colors.ink[950]},copy:{fontFamily:typography.family.sans,fontSize:typography.size.sm,color:colors.ink[600]}});
