import { ScrollView, StyleSheet, Text } from 'react-native';
import { BookingPrepActions, BookingSummary, colors, spacing, typography } from '@spotry/design-system';

export default function ScheduleScreen(){
 return <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.content}>
  <Text style={styles.title}>예약</Text>
  <Text style={styles.dday}>D-4 · 예약 확정</Text>
  <BookingSummary
    title="초보 수영 90분"
    dateTimeLabel="토요일 19:00"
    venueLabel="마포 아쿠아센터"
    providerLabel="김민서 코치"
    beginnerLabel="수영을 전혀 못해도 참여할 수 있어요."
    equipmentLabel="수영복 · 수건"
    availability={{ status: 'few_seats', remainingSeats: 2 }}
    price={{ cashPriceKrw: 35000, membershipCreditEnabled: true, creditCost: 7 }}
  />
  <Text style={styles.section}>체험 전에 이것만 확인하세요</Text>
  <BookingPrepActions />
 </ScrollView>
}
const styles=StyleSheet.create({content:{padding:spacing[5],gap:spacing[4],backgroundColor:colors.canvas},title:{fontFamily:typography.family.sans,fontSize:typography.size.xxl,fontWeight:typography.weight.bold,color:colors.ink[950]},dday:{fontFamily:typography.family.sans,fontWeight:typography.weight.bold,color:colors.ink[800]},section:{fontFamily:typography.family.sans,fontSize:typography.size.lg,fontWeight:typography.weight.bold,color:colors.ink[950]}});
