import SubPage from '../../components/SubPage'

function TimeManagementFeatures() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>주요 기능</h2>
        <p>Time Management의 핵심 기능들을 소개합니다.</p>
      </div>
      <div className="features-list">
        <div className="feature-card">
          <div className="feature-number">01</div>
          <h4>Critical Path Analysis</h4>
          <p>주공정 분석을 통한 핵심 일정 식별 및 관리</p>
        </div>
        <div className="feature-card">
          <div className="feature-number">02</div>
          <h4>Resource Leveling</h4>
          <p>자원 평준화를 통한 효율적인 리소스 배분</p>
        </div>
        <div className="feature-card">
          <div className="feature-number">03</div>
          <h4>Baseline Comparison</h4>
          <p>기준선 대비 실적 비교 분석</p>
        </div>
        <div className="feature-card">
          <div className="feature-number">04</div>
          <h4>What-if Analysis</h4>
          <p>다양한 시나리오 분석 및 시뮬레이션</p>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="기능 소개"
      subtitle="Features"
      content={content}
      image="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default TimeManagementFeatures
