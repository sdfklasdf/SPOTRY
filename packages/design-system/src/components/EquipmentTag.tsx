import { Text, View, StyleSheet } from 'react-native';
import { colors, radius, spacing, typography } from '../tokens/index.js';
export function EquipmentTag({label,included=false}:{label:string;included?:boolean}){return <View style={[styles.tag,included&&styles.included]}><Text style={styles.text}>{included?'포함 · ':''}{label}</Text></View>}
const styles=StyleSheet.create({tag:{minHeight:32,alignSelf:'flex-start',justifyContent:'center',paddingHorizontal:spacing[3],borderRadius:radius.pill,backgroundColor:colors.soft},included:{backgroundColor:colors.action[100]},text:{fontFamily:typography.family.sans,fontSize:typography.size.xs,fontWeight:typography.weight.semibold,color:colors.ink[800]}});
