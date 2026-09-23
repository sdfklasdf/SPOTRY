import { Text, View, StyleSheet } from 'react-native';
import { colors, radius, spacing, typography } from '../tokens/index.js';
export type VerificationKind='identity'|'school'|'qualification'|'coaching';
export function VerificationBadge({label,verified=true}:{label:string;verified?:boolean}){return <View accessibilityLabel={`${label} ${verified?'검증 완료':'본인 입력'}`} style={[styles.badge,verified?styles.verified:styles.claim]}><Text style={styles.text}>{label} · {verified?'검증 완료':'본인 입력'}</Text></View>}
const styles=StyleSheet.create({badge:{minHeight:32,borderRadius:radius.pill,paddingHorizontal:spacing[3],justifyContent:'center',alignSelf:'flex-start'},verified:{backgroundColor:colors.semantic.successBg},claim:{backgroundColor:colors.soft},text:{fontFamily:typography.family.sans,fontSize:typography.size.xs,fontWeight:typography.weight.semibold,color:colors.ink[800]}});
