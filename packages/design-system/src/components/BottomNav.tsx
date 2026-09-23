import { Text, View, Pressable, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../tokens/index.js';
export type ConsumerTab='home'|'explore'|'schedule'|'record'|'my';
const tabs:readonly [ConsumerTab,string][]=[['home','홈'],['explore','탐색'],['schedule','예약'],['record','기록'],['my','MY']];
export function BottomNav({active,onChange}:{active:ConsumerTab;onChange?:(tab:ConsumerTab)=>void}){return <View accessibilityRole="tablist" style={styles.root}>{tabs.map(([key,label])=><Pressable key={key} accessibilityRole="tab" accessibilityState={{selected:active===key}} onPress={()=>onChange?.(key)} style={styles.item}><Text style={[styles.label,active===key&&styles.active]}>{label}</Text></Pressable>)}</View>}
const styles=StyleSheet.create({root:{minHeight:64,flexDirection:'row',borderTopWidth:1,borderTopColor:colors.line[200],backgroundColor:colors.canvas},item:{flex:1,minHeight:48,alignItems:'center',justifyContent:'center'},label:{fontFamily:typography.family.sans,fontSize:typography.size.xs,fontWeight:typography.weight.semibold,color:colors.ink[400]},active:{color:colors.ink[950]}});
