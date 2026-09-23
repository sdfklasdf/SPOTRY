import { Text, View, StyleSheet } from 'react-native';
import type { ExperiencePrice } from '../domain/types.js';
import { presentPrice } from '../contracts/price.js';
import { colors, spacing, typography } from '../tokens/index.js';

export function PriceBlock({price}:{price:ExperiencePrice}){
 const p=presentPrice(price);
 return <View style={styles.root}><Text style={styles.primary}>{p.primary}</Text>{p.secondary?<Text style={styles.secondary}>{p.secondary}</Text>:null}{p.helper?<Text style={styles.helper}>{p.helper}</Text>:null}</View>;
}
const styles=StyleSheet.create({root:{gap:spacing[1]},primary:{fontFamily:typography.family.sans,fontSize:typography.size.xl,fontWeight:typography.weight.bold,color:colors.ink[950]},secondary:{fontFamily:typography.family.sans,fontSize:typography.size.sm,fontWeight:typography.weight.semibold,color:colors.ink[800]},helper:{fontFamily:typography.family.sans,fontSize:typography.size.xs,color:colors.ink[600]}});
