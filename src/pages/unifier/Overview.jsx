import SubPage from '../../components/SubPage'

function UnifierOverview() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>Unifier 개요</h2>
        <p>
          Oracle Primavera Unifier는 프로젝트 비용, 계약, 문서 관리를 통합하는
          엔터프라이즈급 프로젝트 제어 솔루션입니다.
        </p>
      </div>
      <div className="feature-grid">
        <div className="feature-item">
          <h4>비용 관리</h4>
          <p>프로젝트 예산 및 비용 통합 관리</p>
        </div>
        <div className="feature-item">
          <h4>계약 관리</h4>
          <p>계약 및 변경 관리 자동화</p>
        </div>
        <div className="feature-item">
          <h4>문서 관리</h4>
          <p>프로젝트 문서 중앙 관리</p>
        </div>
        <div className="feature-item">
          <h4>워크플로우</h4>
          <p>업무 프로세스 자동화</p>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="개요"
      subtitle="Unifier Overview"
      content={content}
      image="https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default UnifierOverview
