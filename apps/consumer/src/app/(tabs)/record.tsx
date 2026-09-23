import { ScrollView, StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';
import { NextTryCard, PrimaryButton, RecordPatternCard, colors, spacing, typography, type NextTryRecommendation, type PatternInsight } from '@spotry/design-system';

const insight: PatternInsight={stage:'pattern_ready',title:'내 운동 패턴',statements:['혼자 참여 가능한 운동에서 만족도가 높았어요.','중간 강도에서 다시 하고 싶은 정도가 높았어요.']};
const next:NextTryRecommendation={sportName:'복싱',sessionId:'boxing-1',title:'처음 글러브를 끼는 60분 복싱',evidence:[{kind:'personal',text:'클라이밍 재미 4.8'},{kind:'personal',text:'중간 강도도 괜찮았어요'},{kind:'practical',text:'이번 주말 3.4km · 혼자 참여 가능'}],availability:{status:'available'}};
export default function RecordScreen(){return <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.content}><Text style={styles.title}>내 스포츠 기록</Text><RecordPatternCard insight={insight}/><NextTryCard recommendation={next}/><PrimaryButton label="내 기록 비교하기" onPress={()=>router.push('/record/compare')}/></ScrollView>}
const styles=StyleSheet.create({content:{padding:spacing[5],gap:spacing[4],backgroundColor:colors.canvas},title:{fontFamily:typography.family.sans,fontSize:typography.size.xxl,fontWeight:typography.weight.bold,color:colors.ink[950]}});
