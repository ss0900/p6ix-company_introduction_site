import SubPage from '../../components/SubPage'

function PPMFeatures() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>주요 기능</h2>
        <p>PPM의 핵심 기능들을 소개합니다.</p>
      </div>
      <div className="features-list">
        <div className="feature-card">
          <div className="feature-number">01</div>
          <h4>Dashboard</h4>
          <p>실시간 프로젝트 현황 대시보드</p>
        </div>
        <div className="feature-card">
          <div className="feature-number">02</div>
          <h4>Pipeline Management</h4>
          <p>프로젝트 파이프라인 관리</p>
        </div>
        <div className="feature-card">
          <div className="feature-number">03</div>
          <h4>Capacity Planning</h4>
          <p>조직 역량 기반 계획 수립</p>
        </div>
        <div className="feature-card">
          <div className="feature-number">04</div>
          <h4>Risk Management</h4>
          <p>포트폴리오 레벨 리스크 관리</p>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="주요 기능"
      subtitle="Main Features"
      content={content}
      image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default PPMFeatures
