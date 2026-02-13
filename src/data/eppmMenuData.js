import { getAssetPath } from "../utils/assetPath";
export const eppmMenuItems = [
  {
    id: "overview",
    title: "개요",
    description:
      "EPPM(Enterprise Project Portfolio Management) 개요 및 핵심 기능",
    image: getAssetPath("/EPPM_Overview.png"),
    sectionId: "integration",
    path: "/eppm/overview/1",
  },
  {
    id: "functions",
    title: "기능 소개",
    description: "Critical Path Method 기반 공정 관리 솔루션",
    image: getAssetPath("/EPPM_Functions.png"),
    sectionId: "functions",
    path: "/eppm/functions/1",
  },
  {
    id: "cases",
    title: "과정",
    description: "우선순위 결정 및 투자 최적화 과정",
    image: getAssetPath("/EPPM_Process.png"),
    sectionId: "cases",
    path: "/eppm/process/1",
  },
];
