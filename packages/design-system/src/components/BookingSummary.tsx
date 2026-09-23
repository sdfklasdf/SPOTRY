import { Text, View, StyleSheet } from 'react-native';
import type { Availability } from '../domain/types.js';
import { AvailabilityBadge } from './AvailabilityBadge.js';
import { PriceBlock } from './PriceBlock.js';
import type { ExperiencePrice } from '../domain/types.js';
import { colors, radius, spacing, typography } from '../tokens/index.js';
export interface BookingSummaryProps { title:string; dateTimeLabel:string; venueLabel:string; providerLabel:string; beginnerLabel:string; equipmentLabel?:string; availability:Availability; price:ExperiencePrice; }
export function BookingSummary({title,dateTimeLabel,venueLabel,providerLabel,beginnerLabel,equipmentLabel,availability,price}:BookingSummaryProps){return <View style={styles.card}><View style={styles.header}><Text style={styles.title}>{title}</Text><AvailabilityBadge availability={availability}/></View><Text style={styles.meta}>{dateTimeLabel}</Text><Text style={styles.meta}>{venueLabel}</Text><Text style={styles.meta}>{providerLabel}</Text><Text style={styles.beginner}>{beginnerLabel}</Text>{equipmentLabel?<Text style={styles.meta}>{equipmentLabel}</Text>:null}<PriceBlock price={price}/></View>}
const styles=StyleSheet.create({card:{gap:spacing[2],padding:spacing[4],borderWidth:1,borderColor:colors.line[200],borderRadius:radius.lg,backgroundColor:colors.canvas},header:{gap:spacing[2]},title:{fontFamily:typography.family.sans,fontSize:typography.size.lg,fontWeight:typography.weight.bold,color:colors.ink[950]},meta:{fontFamily:typography.family.sans,fontSize:typography.size.sm,color:colors.ink[600]},beginner:{fontFamily:typography.family.sans,fontSize:typography.size.sm,fontWeight:typography.weight.semibold,color:colors.ink[800]}});
