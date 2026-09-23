import { Text, View, Pressable, StyleSheet } from 'react-native';
import { colors, radius, spacing, typography } from '../tokens/index.js';
export type BookingPrepAction='prep'|'directions'|'calendar'|'cancel_support';
const labels:Record<BookingPrepAction,string>={prep:'준비물 다시 보기',directions:'길찾기',calendar:'캘린더 추가',cancel_support:'취소 · 문의'};
export function BookingPrepActions({onAction}:{onAction?:(action:BookingPrepAction)=>void}){return <View style={styles.grid}>{(Object.keys(labels) as BookingPrepAction[]).map(key=><Pressable key={key} accessibilityRole="button" onPress={()=>onAction?.(key)} style={styles.item}><Text style={styles.label}>{labels[key]}</Text></Pressable>)}</View>}
const styles=StyleSheet.create({grid:{flexDirection:'row',flexWrap:'wrap',gap:spacing[2]},item:{minHeight:44,borderRadius:radius.md,borderWidth:1,borderColor:colors.line[200],paddingHorizontal:spacing[3],justifyContent:'center',backgroundColor:colors.canvas},label:{fontFamily:typography.family.sans,fontSize:typography.size.sm,fontWeight:typography.weight.semibold,color:colors.ink[800]}});
