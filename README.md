# wyatt-ai-hub-skills

와이어트(Wyatt) AI Hub 공식 스킬 리포지토리. 임직원이 만든 Claude 스킬을 모아 전사에 공유한다.

> 카탈로그·검증 상태는 Notion **와이어트 AI Hub > AI Asset Hub**가 정본이다.
> 스킬 등록·검증 절차는 공식 Wiki "Claude 스킬 개발·등록 가이드라인 v1.0"을 따른다.

## 스킬 목록

| 스킬 | 용도 | 만든 사람 | 상태 |
|---|---|---|---|
| `skills/wyatt-kpi-lookup` | KPI·관리회계 용어를 정본 기준으로 답변 | 이상봉 (AX전략파트) | 검증완료 |
| `skills/wyatt-weekly-report` | 주간 경영보고 초안 생성 (SOP 목차 고정) | 박민재 (전략팀) | 검증완료 |
| `skills/wyatt-meeting-minutes` | 회의 메모를 표준 회의록 포맷으로 정리 | 김신애 (AX전략파트) | 검증완료 |
| `skills/wyatt-wiki-draft-check` | 정본 등록 전 자가점검 (거버넌스 2단계) | 하율 (AX전략파트) | 검토중 |

## 사용법

각 스킬 폴더의 SKILL.md를 Claude 스킬로 등록하면 대화에서 자동 호출된다.
예: "공헌이익 정의 알려줘" → wyatt-kpi-lookup

## 규칙

- 스킬 명명: wyatt-{기능} (소문자·하이픈)
- 정본·KPI를 다루는 스킬은 공식 Wiki 정본만 근거로 인용 (근거 링크 의무)
- 민감정보(단가·개인정보) 하드코딩 금지 — 정보보안·민감정보 마스킹 정책 준수
