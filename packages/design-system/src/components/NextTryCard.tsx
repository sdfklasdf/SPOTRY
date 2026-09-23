import { Text, View, StyleSheet } from 'react-native';
import type { NextTryRecommendation } from '../domain/types.js';
import { validateRecommendation } from '../contracts/recommendation.js';
import { AvailabilityBadge } from './AvailabilityBadge.js';
import { RecommendationReason } from './RecommendationReason.js';
import { colors, radius, spacing, typography } from '../tokens/index.js';
export function NextTryCard({recommendation}:{recommendation:NextTryRecommendation}){validateRecommendation(recommendation);return <View style={styles.card}><View style={styles.header}><Text style={styles.title}>{recommendation.sportName}</Text><AvailabilityBadge availability={recommendation.availability}/></View><Text style={styles.session}>{recommendation.title}</Text><RecommendationReason sportName={recommendation.sportName} evidence={recommendation.evidence}/></View>}
const styles=StyleSheet.create({card:{gap:spacing[3],padding:spacing[4],borderRadius:radius.lg,borderWidth:1,borderColor:colors.line[200],backgroundColor:colors.canvas},header:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},title:{fontFamily:typography.family.sans,fontSize:typography.size.lg,fontWeight:typography.weight.bold,color:colors.ink[950]},session:{fontFamily:typography.family.sans,fontSize:typography.size.sm,color:colors.ink[800]}});
