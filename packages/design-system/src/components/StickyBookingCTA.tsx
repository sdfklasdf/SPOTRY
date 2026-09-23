import { View, StyleSheet } from 'react-native';
import { PrimaryButton } from './primitives.js';
import { colors, spacing } from '../tokens/index.js';
export function StickyBookingCTA({label,disabled=false,onPress}:{label:string;disabled?:boolean;onPress?:()=>void}){return <View style={styles.root}><PrimaryButton label={label} disabled={disabled} {...(onPress ? { onPress } : {})}/></View>}
const styles=StyleSheet.create({root:{paddingHorizontal:spacing[5],paddingVertical:spacing[3],backgroundColor:colors.canvas,borderTopWidth:1,borderTopColor:colors.line[200]}});
