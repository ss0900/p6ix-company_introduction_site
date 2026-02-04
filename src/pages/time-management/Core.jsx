import SectionIndicator from "../../components/SectionIndicator";
import useGsapScrollController from "../../hooks/useGsapScrollController";

const sections = [{ id: "core", label: "핵심 개념" }];

function TimeManagementCore() {
  const { activeSection, scrollToSection } = useGsapScrollController({
    panelSelector: ".tm-core-panel",
    sections,
  });

  return (
    <>
      <SectionIndicator
        sections={sections}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      <main className="tm-core-page">
        <section className="tm-core-panel panel" id="core">
          <div className="tm-core-content">
            <div className="tm-core-header">
              <h1 className="tm-core-title">WBS (Work Breakdown Structure</h1>
            </div>
            <div className="tm-core-definition">
              <p>
                정의: 프로젝트 산출물 중심의 계층적 구조 (의사소통 및 관리의 기준)
              </p>
            </div>
            <div className="tm-core-tree">
              <ul>
                <li>
                  <div className="tm-core-node tm-core-node-root">
                    Project (EPC 공사)
                  </div>
                  <ul>
                    <li>
                      <div className="tm-core-node tm-core-node-level1">
                        Design (설계)
                      </div>
                    </li>
                    <li>
                      <div className="tm-core-node tm-core-node-level1">
                        Procurement (구매)
                      </div>
                    </li>
                    <li>
                      <div className="tm-core-node tm-core-node-level1">
                        Construction (시공)
                      </div>
                      <ul>
                        <li>
                          <div className="tm-core-node tm-core-node-level2">
                            Zone A
                          </div>
                          <ul>
                            <li>
                              <div className="tm-core-node tm-core-node-level3">
                                토목
                              </div>
                              <ul className="tm-core-activity-list">
                                <li>
                                  <div className="tm-core-node tm-core-node-activity">
                                    Activity (단위 작업)
                                  </div>
                                </li>
                                <li>
                                  <div className="tm-core-node tm-core-node-activity">
                                    Activity (단위 작업)
                                  </div>
                                </li>
                                <li>
                                  <div className="tm-core-node tm-core-node-activity">
                                    Activity (단위 작업)
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="tm-core-node tm-core-node-level3">
                                건축
                              </div>
                              <ul className="tm-core-activity-list">
                                <li>
                                  <div className="tm-core-node tm-core-node-activity">
                                    Activity (단위 작업)
                                  </div>
                                </li>
                                <li>
                                  <div className="tm-core-node tm-core-node-activity">
                                    Activity (단위 작업)
                                  </div>
                                </li>
                                <li>
                                  <div className="tm-core-node tm-core-node-activity">
                                    Activity (단위 작업)
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="tm-core-node tm-core-node-level3">
                                기계
                              </div>
                              <ul className="tm-core-activity-list">
                                <li>
                                  <div className="tm-core-node tm-core-node-activity">
                                    Activity (단위 작업)
                                  </div>
                                </li>
                                <li>
                                  <div className="tm-core-node tm-core-node-activity">
                                    Activity (단위 작업)
                                  </div>
                                </li>
                                <li>
                                  <div className="tm-core-node tm-core-node-activity">
                                    Activity (단위 작업)
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="tm-core-node tm-core-node-level2">
                            Zone B
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default TimeManagementCore;
