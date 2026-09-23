import { ScrollView, Text, View } from 'react-native';
import {
  BottomNav,
  BookingPrepActions,
  CommitOffer,
  DecisionSummaryGrid,
  ExperienceRow,
  NextTryCard,
  ProductLoopStrip,
  RecordPatternCard,
  SessionRow,
  SportPersonalityCard,
  StickyBookingCTA,
  deriveRecordPattern,
} from '../src/index.js';

const sample = {
  id: 'exp-swim-01',
  sportName: '수영',
  title: '물을 무서워해도 시작하는 초보 수영',
  beginnerCopy: '수영을 전혀 못해도 참여할 수 있어요.',
  sessionLabel: '토 19:00',
  venueLabel: '마포 아쿠아센터',
  travelLabel: '합정역 도보 8분',
  durationMin: 90,
  capacity: 6,
  soloFriendly: true,
  equipmentLabel: '수모·킥판 대여',
  price: { cashPriceKrw: 35000, creditCost: 7, membershipCreditEnabled: true },
  availability: { status: 'few_seats', remainingSeats: 2 },
} as const;

const rec = {
  sportName: '복싱',
  sessionId: 'box-01',
  title: '이번 주말 초보 복싱',
  availability: { status: 'available' } as const,
  evidence: [
    { kind: 'personal', text: '클라이밍 재미 4.8' },
    { kind: 'personal', text: '중간 강도도 괜찮았어요' },
    { kind: 'practical', text: '이번 주말 2.2km · 혼자 참여 가능' },
  ] as const,
};

export function PreviewScreen() {
  const pattern = deriveRecordPattern([
    { sportId:'swim', sportName:'수영', fun:4.2, perceivedIntensity:3, wantAgain:4.4, soloComfort:'comfortable', travelMinutes:20 },
    { sportId:'climb', sportName:'클라이밍', fun:4.8, perceivedIntensity:3.6, wantAgain:4.7, soloComfort:'comfortable', travelMinutes:25 },
    { sportId:'run', sportName:'러닝', fun:3.9, perceivedIntensity:3.2, wantAgain:4.1, soloComfort:'comfortable', travelMinutes:15 },
  ]);

  return <View style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ padding: 20, gap: 16 }}>
      <Text>이번 주, 새로운 운동 하나 해볼래요?</Text>
      <ProductLoopStrip />
      <SportPersonalityCard sportName="클라이밍" personality="성취감이 확실해요" />
      <ExperienceRow experience={sample} />
      <SessionRow dateLabel="토요일" timeLabel="19:00" venueLabel="마포 아쿠아센터" priceLabel="35,000원" availability={sample.availability} selected />
      <DecisionSummaryGrid items={[{ label:'시간', value:'90분' },{ label:'인원', value:'최대 6명' },{ label:'초보', value:'완전 초보 가능' },{ label:'참여', value:'혼자 신청 OK' }]} />
      <BookingPrepActions />
      <RecordPatternCard insight={pattern} />
      <NextTryCard recommendation={rec} />
      <CommitOffer title="수영을 더 이어가볼까요?" copy="원데이 체험이 좋았다면 같은 코치의 지속 수업을 확인할 수 있어요." cta="계속 배우기 보기" />
    </ScrollView>
    <StickyBookingCTA label="35,000원으로 예약하기" />
    <BottomNav active="home" />
  </View>;
}
