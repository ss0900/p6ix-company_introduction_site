export interface EppmHomeMenuCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

// 홈 EPPM 섹션 카드 데이터입니다.
// 추후 이미지/문구를 교체하려면 이 배열의 imageSrc, title, description을 수정하세요.
export const eppmHomeMenuCards: EppmHomeMenuCard[] = [
  {
    id: "overview",
    title: "개요",
    description:
      "EPPM의 핵심 개념과 적용 범위를 빠르게 확인하고, 조직 전반의 프로젝트 운영 방향을 정리합니다.",
    imageSrc: encodeURI("/EPPM 개요.png"),
    href: "/eppm/overview/1",
  },
  {
    id: "functions",
    title: "기능 소개",
    description:
      "포트폴리오 계획, 자원 최적화, 일정 연계, 대시보드 분석까지 주요 기능을 한눈에 살펴봅니다.",
    // 실제 라우팅 구조가 /eppm/:sectionId/:subId 이므로 function 대신 functions를 사용합니다.
    href: "/eppm/functions/1",
    imageSrc: encodeURI("/EPPM 기능 소개.png"),
  },
  {
    id: "process",
    title: "과정",
    description:
      "우선순위 결정부터 계획 수립, 실행 통제, 성과 분석까지 EPPM 운영 과정을 단계별로 확인합니다.",
    imageSrc: encodeURI("/EPPM 과정.png"),
    href: "/eppm/process/1",
  },
];
