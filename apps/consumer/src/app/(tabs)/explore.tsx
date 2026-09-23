import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { EmptyState, ExperienceRow, QuickFilterChip, colors, radius, spacing, typography, type ExperienceSummary } from '@spotry/design-system';

const HERO_IMAGE = require('../../../assets/home-hero-editorial.jpg');
const experiences: ExperienceSummary[] = [
  { id:'boxing-1', sportName:'복싱', title:'처음 글러브를 끼는 60분 복싱', beginnerCopy:'기초 스텝부터 시작해요.', sessionLabel:'토 16:00', venueLabel:'성수 복싱랩', travelLabel:'선택 지역 기준 3.4km', durationMin:60, capacity:4, soloFriendly:true, equipmentLabel:'글러브 대여 포함', price:{cashPriceKrw:30000,membershipCreditEnabled:true,creditCost:7}, availability:{status:'available'} },
  { id:'climb-1', sportName:'클라이밍', title:'완전 초보 볼더링 체험', beginnerCopy:'낙법과 기본 움직임부터 배워요.', sessionLabel:'일 14:00', venueLabel:'합정 클라이밍짐', travelLabel:'선택 지역 기준 1.9km', durationMin:90, capacity:6, soloFriendly:true, equipmentLabel:'암벽화 대여 포함', price:{cashPriceKrw:29000,membershipCreditEnabled:true,creditCost:7}, availability:{status:'few_seats',remainingSeats:1} },
];

export default function ExploreScreen() {
  const hasResults = experiences.length > 0;
  return <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.content}>
    <View style={styles.hero}>
      <Image source={HERO_IMAGE} style={styles.heroImage} resizeMode="cover" accessibilityLabel="운동 동작과 속도감이 중심인 스포츠 탐색 이미지" />
      <View style={styles.scrim}/><View style={styles.heroCopy}><Text style={styles.eyebrow}>DISCOVER YOUR NEXT SPORT</Text><Text allowFontScaling style={styles.heroTitle}>이번 주말,{`\n`}직접 해볼 운동</Text></View>
    </View>
    <View style={styles.heading}><Text allowFontScaling style={styles.title}>탐색</Text><Text allowFontScaling style={styles.caption}>초보 가능 여부와 실제 예약 조건부터 확인해요.</Text></View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>{['이번 주말','거리','초보 가능','가격','혼자/친구'].map((x,i)=><QuickFilterChip key={x} label={x} selected={i===0}/>)}</ScrollView>
    {hasResults ? <View style={styles.results}>{experiences.map(x=><ExperienceRow key={x.id} experience={x}/>)}</View> : <EmptyState title="조건에 맞는 체험이 아직 없어요" copy="거리나 날짜 조건을 조금 넓혀 다시 찾아보세요."/>}
    <Text allowFontScaling style={styles.truth}>거리·잔여석·일정은 실제 데이터가 있을 때만 표시합니다.</Text>
  </ScrollView>;
}
const styles=StyleSheet.create({content:{padding:spacing[5],paddingBottom:spacing[8],gap:spacing[5],backgroundColor:colors.canvas},hero:{height:250,borderRadius:radius.xl,overflow:'hidden',position:'relative',backgroundColor:colors.ink[950]},heroImage:{position:'absolute',width:'100%',height:'100%'},scrim:{...StyleSheet.absoluteFillObject,backgroundColor:'rgba(11,17,27,.36)'},heroCopy:{position:'absolute',left:spacing[5],right:spacing[5],bottom:spacing[5],gap:spacing[2]},eyebrow:{fontFamily:typography.family.sans,fontSize:11,fontWeight:'800',letterSpacing:1.1,color:colors.actionGreen},heroTitle:{fontFamily:typography.family.sans,fontSize:typography.size.xxl,lineHeight:typography.lineHeight.xxl,fontWeight:typography.weight.bold,color:colors.canvas},heading:{gap:spacing[1]},title:{fontFamily:typography.family.sans,fontSize:typography.size.xxl,lineHeight:typography.lineHeight.xxl,fontWeight:typography.weight.bold,color:colors.ink[950]},caption:{fontFamily:typography.family.sans,fontSize:typography.size.sm,lineHeight:typography.lineHeight.sm,color:colors.ink[600]},chips:{gap:spacing[2],paddingRight:spacing[5]},results:{gap:spacing[3]},truth:{fontFamily:typography.family.sans,fontSize:typography.size.xs,lineHeight:typography.lineHeight.xs,color:colors.ink[400]}});
