export const meta = {
  name: 'suhyup-tech-writing',
  description: '수협 AI거버넌스 제안서 기술부문(Ⅲ) 21개 소절을 sub agent가 병렬 집필하고 검증·취합',
  whenToUse: '제안서 기술부문 초안을 한 번에 생성하거나, 특정 소절만 재집필할 때',
  phases: [
    { title: 'Draft',     detail: 'level-3 소절 1개당 sub agent 1명이 BRIEF를 읽고 원고 집필' },
    { title: 'Verify',    detail: '금칙어·커버리지 / 경계중복 / 과제간 정합성 3개 축 독립 검증' },
    { title: 'Integrate', detail: '통합본·스토리라인·시각화 계획표·미해결 이슈 생성' },
  ],
}

const ROOT = '/home/claude/suhyup/제안서_작성'
const SUP  = ROOT + '/_supervisor'

const ALL = [
  {key:'3.1.1', roman:'Ⅲ.1.1', title:'사업목표', brief:'3.1_사업목표및범위/BRIEF_3.1.1.md', out:'3.1_사업목표및범위/3.1.1_사업목표.md', pages:2},
  {key:'3.1.2', roman:'Ⅲ.1.2', title:'업무범위 및 추진과제 구조 (과제1~4)', brief:'3.1_사업목표및범위/BRIEF_3.1.2.md', out:'3.1_사업목표및범위/3.1.2_업무범위및추진과제구조.md', pages:2},
  {key:'3.1.3', roman:'Ⅲ.1.3', title:'Phase 구분 및 과업 우선순위', brief:'3.1_사업목표및범위/BRIEF_3.1.3.md', out:'3.1_사업목표및범위/3.1.3_Phase구분및과업우선순위.md', pages:2},
  {key:'3.1.4', roman:'Ⅲ.1.4', title:'RFP 요구사항 대응 총괄표', brief:'3.1_사업목표및범위/BRIEF_3.1.4.md', out:'3.1_사업목표및범위/3.1.4_RFP요구사항대응총괄표.md', pages:1},
  {key:'3.2.1', roman:'Ⅲ.2.1', title:'3대 추진원칙 : 즉시적용성·이원산출·규제추적', brief:'3.2_사업전략및방향/BRIEF_3.2.1.md', out:'3.2_사업전략및방향/3.2.1_3대추진원칙.md', pages:1},
  {key:'3.2.2', roman:'Ⅲ.2.2', title:'전략1) Phase1 데드라인 역산 전략 (금보원·금감원 일정 연동)', brief:'3.2_사업전략및방향/BRIEF_3.2.2.md', out:'3.2_사업전략및방향/3.2.2_전략1Phase1데드라인역산전략.md', pages:2},
  {key:'3.2.3', roman:'Ⅲ.2.3', title:'전략2) 은행·상호금융 이원 산출물 전략', brief:'3.2_사업전략및방향/BRIEF_3.2.3.md', out:'3.2_사업전략및방향/3.2.3_전략2은행_상호금융이원산출물전략.md', pages:2},
  {key:'3.2.4', roman:'Ⅲ.2.4', title:'전략3) 법령·규제 변화 추적 및 반영 체계', brief:'3.2_사업전략및방향/BRIEF_3.2.4.md', out:'3.2_사업전략및방향/3.2.4_전략3법령_규제변화추적및반영체계.md', pages:2},
  {key:'3.2.5', roman:'Ⅲ.2.5', title:'사업 위험요소 및 대응 방향', brief:'3.2_사업전략및방향/BRIEF_3.2.5.md', out:'3.2_사업전략및방향/3.2.5_사업위험요소및대응방향.md', pages:2},
  {key:'3.2.6', roman:'Ⅲ.2.6', title:'시스템 구축방향 및 적용기술', brief:'3.2_사업전략및방향/BRIEF_3.2.6.md', out:'3.2_사업전략및방향/3.2.6_시스템구축방향및적용기술.md', pages:2},
  {key:'3.3.1', roman:'Ⅲ.3.1', title:'전체 방법론 프레임워크 및 수행 경험', brief:'3.3_수행방법론/BRIEF_3.3.1.md', out:'3.3_수행방법론/3.3.1_전체방법론프레임워크및수행경험.md', pages:2},
  {key:'3.3.2', roman:'Ⅲ.3.2', title:'단계별 기법·분석도구 및 방법론의 특징·장단점', brief:'3.3_수행방법론/BRIEF_3.3.2.md', out:'3.3_수행방법론/3.3.2_단계별기법_분석도구및방법론의특징_장단점.md', pages:2},
  {key:'3.3.3', roman:'Ⅲ.3.3', title:'산출물 체계 : 종류·내역·제출시기', brief:'3.3_수행방법론/BRIEF_3.3.3.md', out:'3.3_수행방법론/3.3.3_산출물체계.md', pages:2},
  {key:'3.3.4', roman:'Ⅲ.3.4', title:'예상 위험요소 식별 및 유사 프로젝트 기반 해결방안', brief:'3.3_수행방법론/BRIEF_3.3.4.md', out:'3.3_수행방법론/3.3.4_예상위험요소식별및유사프로젝트기반해결방안.md', pages:2},
  {key:'3.4.1', roman:'Ⅲ.4.1', title:'현황 분석·진단 방안 및 개선점 도출방안', brief:'3.4_수행방안/BRIEF_3.4.1.md', out:'3.4_수행방안/3.4.1_현황분석_진단방안및개선점도출방안.md', pages:2},
  {key:'3.4.2', roman:'Ⅲ.4.2', title:'[과제1] AI 거버넌스 체계 수립', brief:'3.4_수행방안/BRIEF_3.4.2.md', out:'3.4_수행방안/3.4.2_과제1_AI거버넌스체계수립.md', pages:8},
  {key:'3.4.3', roman:'Ⅲ.4.3', title:'[과제2] AI 서비스 라이프사이클 표준 수립', brief:'3.4_수행방안/BRIEF_3.4.3.md', out:'3.4_수행방안/3.4.3_과제2_AI서비스라이프사이클표준수립.md', pages:8},
  {key:'3.4.4', roman:'Ⅲ.4.4', title:'[과제3] AI 플랫폼 확대방안 설계', brief:'3.4_수행방안/BRIEF_3.4.4.md', out:'3.4_수행방안/3.4.4_과제3_AI플랫폼확대방안설계.md', pages:7},
  {key:'3.4.5', roman:'Ⅲ.4.5', title:'[과제4] 공동 AI 플랫폼 비용 배분 체계 합리화', brief:'3.4_수행방안/BRIEF_3.4.5.md', out:'3.4_수행방안/3.4.5_과제4_공동AI플랫폼비용배분체계합리화.md', pages:5},
  {key:'3.4.6', roman:'Ⅲ.4.6', title:'산출물 목록·세부내용 및 소유권', brief:'3.4_수행방안/BRIEF_3.4.6.md', out:'3.4_수행방안/3.4.6_산출물목록_세부내용및소유권.md', pages:2},
  {key:'3.4.7', roman:'Ⅲ.4.7', title:'추가 과제 및 산출물 제안 (규제 요구 확대 대응)', brief:'3.4_수행방안/BRIEF_3.4.7.md', out:'3.4_수행방안/3.4.7_추가과제및산출물제안.md', pages:3}
]

// args 로 특정 소절만 지정 가능: ["3.4.2","3.4.5"]  (미지정 시 전체 21개)
const pick = Array.isArray(args) && args.length ? ALL.filter(s => args.includes(s.key)) : ALL
log(`집필 대상 ${pick.length}개 소절 / 예상 슬라이드 ${pick.reduce((a,b)=>a+b.pages,0)}장`)

const COMMON = `
너는 수협은행 『AI 거버넌스 실행전략 수립』 제안서의 기술부문 원고를 쓰는 컨설턴트다.

## 먼저 읽어라 (순서대로, 반드시)
1. ${SUP}/01_작성지침.md   ← 5개 섹션 구조 · 금지 표현 · 구체성 판정 기준
2. ${SUP}/02_사업배경_브리핑.md ← 사업 배경 · Phase 구조 · 과제 간 연결
3. 아래 지정된 너의 BRIEF 파일
4. ${SUP}/03_요구사항_원장.md  ← BRIEF에 적힌 요구사항 ID의 원문 확인용

## 규제 근거
BRIEF의 '참조할 근거 자료'에 프로젝트 파일이 있으면 Projects 도구의 project_search / project_read 로
**원문을 실제로 검색해 조항 단위로 인용**하라. 기억에 의존한 일반론은 반려된다.
- 1. 제안요청서.pdf
- 260622_금융분야 인공지능 가이드라인_vFN.pdf  (점검항목 수록)
- 260622_금융분야 AI 위험관리 프레임워크RMF_vFN.pdf
- 260622_금융분야 인공지능 보안 안내서_vFN.pdf

## 절대 금지
"가능하다" "가능함" "할 수 있을 것 같다" "고려하고 있다" "검토 예정" "제공할 수 있다"
→ RFP가 **평가 시 '불가능'으로 처리한다고 명시**했다. 한 번이라도 쓰면 그 문장은 실패다.
RFP 문장 복사 금지. 프로젝트 맥락 없는 일반론 금지. BRIEF의 '경계'를 넘지 말 것.

## 산출
지정 경로에 md 파일을 **Write 도구로 저장**하라. 다른 파일은 건드리지 마라.
최종 응답은 사람에게 보내는 메시지가 아니라 데이터다 — 아래 스키마대로만 반환하라.
`

const DRAFT_SCHEMA = {
  type: 'object',
  properties: {
    key: { type: 'string' },
    savedPath: { type: 'string' },
    governingMessage: { type: 'string', description: '작성한 거버닝 메시지 한 문장' },
    slideCount: { type: 'number' },
    splitPatterns: { type: 'array', items: { type: 'string' }, description: '사용한 슬라이드 분할 패턴' },
    citedClauses: { type: 'array', items: { type: 'string' }, description: '인용한 규제 조항 (문서명 + 조항)' },
    assumptions: { type: 'array', items: { type: 'string' }, description: '[가정] 태그로 표시한 미확인 사항' },
    handedOff: { type: 'array', items: { type: 'string' }, description: '경계 때문에 인접 절로 넘긴 내용' },
  },
  required: ['key','savedPath','governingMessage','slideCount','splitPatterns','assumptions'],
}

phase('Draft')
const drafts = (await parallel(pick.map(s => () =>
  agent(`${COMMON}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 너의 담당
- 목차: **${s.roman} ${s.title}**
- BRIEF: \`${ROOT}/${s.brief}\`
- 저장 경로: \`${ROOT}/${s.out}\`  (기존 자리표시 파일을 덮어쓴다)
- 목표 분량: 슬라이드 ${s.pages}장
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BRIEF의 '반드시 본문에 들어가야 할 것'을 **하나도 빠뜨리지 말고** 반영하라.
'본문'은 이 문서의 존재 이유다 — 읽은 컨설턴트가 다음 주 월요일에 무엇을 할지 알 수 있어야 한다.
프로세스에는 [단계/주체/입력/산출/소요일/판정기준]을, 산식에는 [변수정의 + 숫자 예시 1건]을,
선택지가 있는 사안에는 [옵션 비교 → 권고안과 근거]를 반드시 넣어라.`,
    { label: `draft:${s.key}`, phase: 'Draft', schema: DRAFT_SCHEMA })
))).filter(Boolean)

log(`초안 ${drafts.length}/${pick.length}건 완료`)

// ─────────────────────────────────────────────
phase('Verify')

const VERIFY_SCHEMA = {
  type: 'object',
  properties: {
    axis: { type: 'string' },
    findings: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          file: { type: 'string' },
          severity: { type: 'string', enum: ['반려','수정필요','참고'] },
          issue: { type: 'string' },
          fix: { type: 'string', description: '구체적 수정 지시' },
        },
        required: ['file','severity','issue','fix'],
      },
    },
    verdict: { type: 'string', enum: ['통과','조건부통과','반려'] },
  },
  required: ['axis','findings','verdict'],
}

const files = pick.map(s => `${ROOT}/${s.out}`).join('\n- ')

const AXES = [
 { key: 'form', label: '금칙어·구조·커버리지', prompt: `
아래 파일들을 모두 Read 하고 **형식과 커버리지만** 검증하라.

1) **금칙어**: "가능하다" "가능함" "할 수 있을 것 같" "고려하고 있" "고려중" "검토 예정" "제공할 수 있" "~할 수도"
   → 발견 시 severity='반려', fix에 대체 문장을 확정형으로 써 줄 것
2) **5개 섹션 구조**: 거버닝 메시지 / 본문 / 제안서용 요약·논리 구조 / 시각적 표현 방안 / 경계·인용 근거
3) **커버리지**: 각 파일의 BRIEF(같은 폴더의 BRIEF_*.md)에 지정된 요구사항 ID가 본문에서 **실제로 다뤄졌는가**.
   ID만 나열하고 내용이 없으면 severity='반려'
4) **구체성**: 프로세스에 주체·소요일·판정기준이 없거나, 산식에 변수정의·숫자예시가 없으면 '수정필요'` },

 { key: 'boundary', label: '경계 중복', prompt: `
아래 파일들을 Read 하고 **인접 절 간 내용 중복**만 검증하라.
\`${SUP}/05_취합_체크리스트.md\` 의 'D. 경계 중복 점검' 표가 판정 기준이다.

중복이 발견되면 **뒤쪽 절에서 삭제하고 앞쪽 참조로 바꾸라**는 형태로 fix를 쓸 것.
표에 없는 쌍이라도 실제 중복이 있으면 보고하라.` },

 { key: 'consistency', label: '과제 간 정합성', prompt: `
아래 파일들을 Read 하고 **내용 정합성**만 검증하라. \`${SUP}/05_취합_체크리스트.md\` 의 'E. 정합성 점검'이 기준이다.

특히 다음 4개는 어긋나면 제안서 전체가 무너진다 —
① 과제1(3.4.2)의 위험등급 체계 ↔ 과제3(3.4.4)의 가드레일 자동 적용 등급이 같은 체계인가
② 과제3(3.4.4)의 사용량 계측 단위 ↔ 과제4(3.4.5)의 정산 산식 변수가 일치하는가
③ 3.2.2의 역산 일정(D+n) ↔ 3.3.3의 산출물 제출 시기가 모순되지 않는가
④ 라이프사이클 단계 명칭이 3.4.3과 3.4.4에서 동일한가
어긋난 경우 **어느 쪽을 기준으로 맞출지**까지 fix에 지정하라.` },
]

const verdicts = await parallel(AXES.map(a => () =>
  agent(`너는 제안서 원고 검수자다. 칭찬·요약 없이 **결함만** 보고하라.

## 검증 대상 파일
- ${files}

## 너의 검증 축: ${a.label}
${a.prompt}

결함이 없으면 findings를 빈 배열로 두고 verdict='통과'.`,
    { label: `verify:${a.key}`, phase: 'Verify', schema: VERIFY_SCHEMA })
))

const V = verdicts.filter(Boolean)
const blockers = V.flatMap(v => (v.findings||[]).filter(f => f.severity === '반려'))
log(`검증 결과 — ${V.map(v=>`${v.axis}:${v.verdict}`).join(' / ')} | 반려 ${blockers.length}건`)

// ─────────────────────────────────────────────
phase('Integrate')

const findingsText = JSON.stringify(V, null, 1)
const draftsText = JSON.stringify(drafts.map(d => ({
  key: d.key, gm: d.governingMessage, slides: d.slideCount,
  patterns: d.splitPatterns, assumptions: d.assumptions, cited: d.citedClauses })), null, 1)

const integ = await parallel([
  () => agent(`아래 원고 파일들을 목차 순서대로 Read 하여 **하나의 통합본**으로 결합하라.

## 대상
- ${files}

## 저장
\`${ROOT}/_통합/기술부문_통합본.md\`

## 규칙
- 목차 번호 순서(3.1.1 → 3.4.7)를 지킬 것
- 각 소절은 '거버닝 메시지 → 본문 → 요약·논리구조 → 시각화 지시' 순으로 싣되, 5번 섹션(경계·근거)은 통합본 말미에 '인용 근거 총괄'로 몰아서 정리
- **원고 문장을 임의로 고치지 마라.** 결합과 재배치만 한다
- 맨 앞에 전체 목차와 소절별 슬라이드 장수 표를 넣을 것

검증에서 나온 반려 사항은 아래와 같다. 통합본 맨 뒤에 '## 미조치 반려 사항' 으로 그대로 옮겨 적어라(수정하지는 말 것).
${findingsText}`,
    { label: 'integrate:통합본', phase: 'Integrate' }),

  () => agent(`아래는 21개 소절의 거버닝 메시지와 시각화 정보다.

${draftsText}

## 만들 파일 3개

### 1) \`${ROOT}/_통합/거버닝메시지_스토리라인.md\`
거버닝 메시지를 목차 순서대로 나열한 뒤, **하나의 이야기로 읽히는지 검증**하라.
- 논리가 끊기는 지점, 같은 말을 반복하는 지점, 앞뒤가 뒤집힌 지점을 지목
- 각 지점마다 **수정 문장을 직접 제시**할 것
- 마지막에 '기술부문 전체 스토리 3줄 요약'

### 2) \`${ROOT}/_통합/시각화_계획표.md\`
- 소절별 [슬라이드 장수 / 분할 패턴 / 주요 도해] 표
- **같은 분할 패턴이 3개 절 연속 반복되는 구간을 찾아 변화 지시**를 낼 것
- 전체 슬라이드 장수 합계와 패턴별 사용 빈도 집계

### 3) \`${ROOT}/_통합/미해결_이슈.md\`
- 모든 소절의 assumptions([가정] 태그)를 수집해 **발주처 확인 필요 목록**으로 정리
- 각 항목마다 [무엇이 불확실한가 / 누구에게 물어야 하는가 / 언제까지 확인해야 하는가(제안 마감 8/3 전 vs 착수 후)]
- 제안 마감 전 확인이 필요한 것을 맨 위로`,
    { label: 'integrate:스토리라인', phase: 'Integrate' }),
])

return {
  집필: drafts.length,
  총슬라이드: drafts.reduce((a,d) => a + (d.slideCount||0), 0),
  검증: V.map(v => ({ 축: v.axis, 판정: v.verdict, 결함: (v.findings||[]).length })),
  반려: blockers,
  통합산출: ['_통합/기술부문_통합본.md','_통합/거버닝메시지_스토리라인.md','_통합/시각화_계획표.md','_통합/미해결_이슈.md'],
}
