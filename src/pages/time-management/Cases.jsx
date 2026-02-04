import SubPage from '../../components/SubPage'

function TimeManagementCases() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>적용 사례</h2>
        <p>Time Management 솔루션이 적용된 프로젝트 사례를 소개합니다.</p>
      </div>
      <div className="case-studies">
        <div className="case-card">
          <img src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Case 1" />
          <div className="case-content">
            <span className="case-tag">건설</span>
            <h4>대형 플랜트 프로젝트</h4>
            <p>복합 발전소 건설 프로젝트의 일정 관리 시스템 구축</p>
          </div>
        </div>
        <div className="case-card">
          <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Case 2" />
          <div className="case-content">
            <span className="case-tag">인프라</span>
            <h4>교통 인프라 프로젝트</h4>
            <p>도시 철도 건설 프로젝트 일정 최적화</p>
          </div>
        </div>
        <div className="case-card">
          <img src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Case 3" />
          <div className="case-content">
            <span className="case-tag">해외</span>
            <h4>해외 건설 프로젝트</h4>
            <p>중동 지역 대형 건설 프로젝트 관리</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="적용 사례"
      subtitle="Case Studies"
      content={content}
      image="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default TimeManagementCases
