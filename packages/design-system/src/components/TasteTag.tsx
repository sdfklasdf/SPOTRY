import { Text, View, StyleSheet } from 'react-native';
import { colors, radius, spacing, typography } from '../tokens/index.js';
export function TasteTag({label,evidenceCount}:{label:string;evidenceCount?:number}){const suffix=evidenceCount!==undefined?` · 기록 ${evidenceCount}개 기준`:'';return <View style={styles.tag}><Text style={styles.text}>{label}{suffix}</Text></View>}
const styles=StyleSheet.create({tag:{minHeight:32,alignSelf:'flex-start',justifyContent:'center',paddingHorizontal:spacing[3],borderRadius:radius.pill,backgroundColor:colors.action[100]},text:{fontFamily:typography.family.sans,fontSize:typography.size.xs,fontWeight:typography.weight.semibold,color:colors.ink[800]}});
