import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { PrimaryButton, ProductLoopStrip, QuickFilterChip, colors, radius, spacing, typography } from '@spotry/design-system';

const HERO_IMAGE = require('../../../assets/home-hero-editorial.jpg');

export default function HomeScreen() {
  return <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.content}>
    <View style={styles.brandRow}><View style={styles.mark}/><Text style={styles.brand}>SPOTRY</Text><View style={styles.avatar}/></View>

    <View style={styles.heroCard}>
      <Image source={HERO_IMAGE} style={styles.heroImage} resizeMode="cover" accessibilityLabel="달리는 동작과 속도감을 중심으로 보여주는 스포츠 에디토리얼 이미지" />
      <View style={styles.heroScrim}/>
      <View style={styles.heroCopy}>
        <Text style={styles.heroEyebrow}>BEGINNER-FIRST SPORTS</Text>
        <Text style={styles.hero}>이번 주, 새로운 운동{`\n`}하나 해볼래요?</Text>
        <Text style={styles.sub}>잘 맞는 운동은 직접 해봐야 알 수 있으니까.{`\n`}초보도 부담 없는 체험부터 시작해요.</Text>
      </View>
    </View>

    <PrimaryButton label="이번 주말 체험 찾기" onPress={() => router.push('/explore')} />
    <View style={styles.chips}>{['이번 주말','초보 가능','3만원 이하','5km 이내','혼자 가능'].map((label,index)=><QuickFilterChip key={label} label={label} selected={index===0}/>)}</View>
    <ProductLoopStrip />

    <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>지금 시작하기 좋은 체험</Text><Text style={styles.sectionLink}>전체 보기</Text></View>
    <View style={styles.pilot}><Text style={styles.kicker}>FIRST PILOT</Text><Text style={styles.pilotTitle}>1명이어도 열리는 보디빌딩 입문</Text><Text style={styles.pilotCopy}>90분 · 최대 2명 · 초보 가능</Text><Text style={styles.pilotNote}>장소 · 일정 · 가격 확정 전에는 예약 가능 상태로 노출하지 않아요.</Text></View>

    <View style={styles.section}><Text style={styles.sectionTitle}>왜 SPOTRY인가요?</Text><Text style={styles.sectionCopy}>예약으로 끝내지 않고, 체험 뒤 30초 기록을 남기면 다음 운동을 고를 근거가 쌓여요.</Text></View>
    <Text style={styles.photoCredit}>Action-first prototype editorial image · 실제 공급자/시설/세션 증빙 이미지 아님</Text>
  </ScrollView>;
}

const styles=StyleSheet.create({
  content:{padding:spacing[5],paddingBottom:spacing[8],gap:spacing[5],backgroundColor:colors.canvas},
  brandRow:{flexDirection:'row',alignItems:'center',gap:8},
  mark:{width:19,height:19,borderRadius:7,backgroundColor:colors.action[500],transform:[{rotate:'32deg'}]},
  brand:{fontFamily:typography.family.sans,fontWeight:'800',fontSize:18,color:colors.ink[950],letterSpacing:-.4},
  avatar:{marginLeft:'auto',width:34,height:34,borderRadius:17,backgroundColor:colors.soft},
  heroCard:{height:390,borderRadius:radius.xl,overflow:'hidden',position:'relative',backgroundColor:colors.ink[950]},
  heroImage:{position:'absolute',width:'100%',height:'100%'},
  heroScrim:{position:'absolute',left:0,right:0,top:0,bottom:0,backgroundColor:'rgba(11,17,27,0.42)'},
  heroCopy:{position:'absolute',left:spacing[5],right:spacing[5],bottom:spacing[5],gap:spacing[3]},
  heroEyebrow:{fontFamily:typography.family.sans,fontSize:11,fontWeight:'800',letterSpacing:1.2,color:colors.action[500]},
  hero:{fontFamily:typography.family.sans,fontSize:34,lineHeight:42,fontWeight:typography.weight.bold,color:colors.canvas,letterSpacing:-1.2},
  sub:{fontFamily:typography.family.sans,fontSize:15,color:'#F0F2F4',lineHeight:23},
  chips:{flexDirection:'row',flexWrap:'wrap',gap:spacing[2]},
  sectionHeader:{flexDirection:'row',alignItems:'center'},
  sectionTitle:{fontFamily:typography.family.sans,fontSize:typography.size.lg,fontWeight:typography.weight.bold,color:colors.ink[950]},
  sectionLink:{marginLeft:'auto',fontFamily:typography.family.sans,fontSize:13,fontWeight:'600',color:colors.ink[600]},
  pilot:{padding:spacing[5],borderRadius:radius.xl,backgroundColor:colors.ink[950],gap:spacing[2]},
  kicker:{fontFamily:typography.family.sans,fontSize:11,fontWeight:'800',letterSpacing:1.1,color:colors.action[500]},
  pilotTitle:{fontFamily:typography.family.sans,fontSize:20,fontWeight:typography.weight.bold,color:colors.canvas},
  pilotCopy:{fontFamily:typography.family.sans,fontSize:13,lineHeight:20,color:'#F0F2F4'},
  pilotNote:{fontFamily:typography.family.sans,fontSize:12,lineHeight:18,color:'#AEB5BF'},
  section:{gap:spacing[3]},
  sectionCopy:{fontFamily:typography.family.sans,fontSize:14,lineHeight:21,color:colors.ink[600]},
  photoCredit:{fontFamily:typography.family.sans,fontSize:10,color:colors.ink[400]},
});
