import SubPage from '../../components/SubPage'

function TimeManagementOverview() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>Time Management 개요</h2>
        <p>
          Time Management는 프로젝트 일정 관리의 핵심 솔루션으로,
          복잡한 건설 프로젝트의 일정을 효과적으로 계획하고 관리할 수 있습니다.
        </p>
      </div>
      <div className="feature-grid">
        <div className="feature-item">
          <h4>일정 계획</h4>
          <p>WBS 기반의 체계적인 일정 계획 수립</p>
        </div>
        <div className="feature-item">
          <h4>진도 관리</h4>
          <p>실시간 진도 추적 및 편차 분석</p>
        </div>
        <div className="feature-item">
          <h4>리소스 관리</h4>
          <p>인력 및 장비 자원의 효율적 배분</p>
        </div>
        <div className="feature-item">
          <h4>리포팅</h4>
          <p>다양한 형태의 일정 보고서 생성</p>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="개요"
      subtitle="Time Management Overview"
      content={content}
      image="https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default TimeManagementOverview
