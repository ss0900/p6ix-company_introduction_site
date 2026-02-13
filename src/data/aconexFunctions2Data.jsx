import { aconexFunctionsIntro } from "./aconexFunctionsData";
import { getAssetPath } from "../utils/assetPath";

const [workflowIcon, taskIcon, timesheetIcon, scopeIcon] =
  aconexFunctionsIntro.items.map((item) => item.icon);

export const aconexFunctions2Title = "기능 소개";

export const aconexFunctions2FeatureItems = [
  {
    icon: workflowIcon,
    title: (
      <>
        이슈, 점검,
        <br />
        펀치리스트
      </>
    ),
  },
  {
    icon: taskIcon,
    title: (
      <>
        뷰잉 / 공유 및<br />
        모델 코디네이션
      </>
    ),
  },
  { icon: timesheetIcon, title: "협력사 / 벤더 문서" },
  { icon: scopeIcon, title: "대시보드 / 리포팅" },
];

export const aconexFunctions2Images = [
  {
    src: getAssetPath("/Field_Mobile_Issues_Inspections_Punch_Lists.png"),
    alt: "기능 소개 - 이슈, 점검, 펀치리스트",
  },
  {
    src: getAssetPath("/Models_Viewing_Sharing_Model_Coordination.png"),
    alt: "기능 소개 - 뷰잉 / 공유 및 모델 코디네이션",
  },
  {
    src: getAssetPath("/Supplier_Vendor_Documents.png"),
    alt: "기능 소개 - 협력사 / 벤더 문서",
  },
  {
    src: getAssetPath("/Dashboard_Reporting.png"),
    alt: "기능 소개 - 대시보드 / 리포팅",
  },
];
