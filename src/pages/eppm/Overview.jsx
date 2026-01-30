import SubPage from '../../components/SubPage'

function EPPMOverview() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>EPPM 개요</h2>
        <p>
          EPPM(Enterprise Project Portfolio Management)은 대규모 조직의
          복잡한 프로젝트 포트폴리오를 통합 관리하는 엔터프라이즈급 솔루션입니다.
        </p>
      </div>
      <div className="feature-grid">
        <div className="feature-item">
          <h4>통합 관리</h4>
          <p>전사 프로젝트 통합 관리 체계</p>
        </div>
        <div className="feature-item">
          <h4>실시간 모니터링</h4>
          <p>프로젝트 현황 실시간 추적</p>
        </div>
        <div className="feature-item">
          <h4>협업 강화</h4>
          <p>부서간 협업 효율화</p>
        </div>
        <div className="feature-item">
          <h4>보고 체계</h4>
          <p>경영진 보고 자동화</p>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="개요"
      subtitle="EPPM Overview"
      content={content}
      image="https://images.pexels.com/photos/5989932/pexels-photo-5989932.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default EPPMOverview
