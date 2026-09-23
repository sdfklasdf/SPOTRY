import { Text, View, StyleSheet } from 'react-native';
import type { ExperienceSummary } from '../domain/types.js';
import { AvailabilityBadge } from './AvailabilityBadge.js';
import { PriceBlock } from './PriceBlock.js';
import { colors, radius, spacing, typography } from '../tokens/index.js';

export function ExperienceRow({experience}:{experience:ExperienceSummary}){
 return <View style={styles.card} accessible accessibilityLabel={`${experience.sportName}, ${experience.title}`}>
  <View style={styles.header}><Text allowFontScaling style={styles.sport}>{experience.sportName}</Text><AvailabilityBadge availability={experience.availability}/></View>
  <Text allowFontScaling style={styles.title}>{experience.title}</Text><Text allowFontScaling style={styles.beginner}>{experience.beginnerCopy}</Text>
  <Text allowFontScaling style={styles.meta}>{experience.sessionLabel} · {experience.venueLabel}{experience.travelLabel?` · ${experience.travelLabel}`:''}</Text>
  <Text allowFontScaling style={styles.meta}>{experience.durationMin}분 · 최대 {experience.capacity}명 · {experience.soloFriendly?'혼자 참여 OK':'동반 참여 권장'}</Text>
  {experience.equipmentLabel?<Text allowFontScaling style={styles.meta}>{experience.equipmentLabel}</Text>:null}<PriceBlock price={experience.price}/>
 </View>
}
const styles=StyleSheet.create({card:{gap:spacing[2],borderWidth:1,borderColor:colors.line[200],borderRadius:radius.lg,padding:spacing[4],backgroundColor:colors.canvas},header:{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start',gap:spacing[2],flexWrap:'wrap'},sport:{flexShrink:1,fontFamily:typography.family.sans,fontSize:typography.size.sm,lineHeight:typography.lineHeight.sm,fontWeight:typography.weight.bold,color:colors.ink[800]},title:{fontFamily:typography.family.sans,fontSize:typography.size.lg,lineHeight:typography.lineHeight.lg,fontWeight:typography.weight.bold,color:colors.ink[950]},beginner:{fontFamily:typography.family.sans,fontSize:typography.size.sm,lineHeight:typography.lineHeight.sm,color:colors.ink[800]},meta:{fontFamily:typography.family.sans,fontSize:typography.size.sm,lineHeight:typography.lineHeight.sm,color:colors.ink[600]}});
