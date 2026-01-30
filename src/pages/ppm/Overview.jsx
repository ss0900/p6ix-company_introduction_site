import SubPage from '../../components/SubPage'

function PPMOverview() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>PPM 개요</h2>
        <p>
          PPM(Project Portfolio Management)은 조직의 전체 프로젝트 포트폴리오를
          통합 관리하여 전략적 의사결정을 지원하는 솔루션입니다.
        </p>
      </div>
      <div className="feature-grid">
        <div className="feature-item">
          <h4>포트폴리오 관리</h4>
          <p>전사 프로젝트 현황 통합 관리</p>
        </div>
        <div className="feature-item">
          <h4>우선순위 결정</h4>
          <p>전략 기반 프로젝트 우선순위 설정</p>
        </div>
        <div className="feature-item">
          <h4>자원 최적화</h4>
          <p>전사 자원의 효율적 배분</p>
        </div>
        <div className="feature-item">
          <h4>성과 분석</h4>
          <p>프로젝트 성과 측정 및 분석</p>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="개요"
      subtitle="PPM Overview"
      content={content}
      image="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default PPMOverview
