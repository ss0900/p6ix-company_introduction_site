import SubPage from '../../components/SubPage'

function UnifierModules() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>모듈 소개</h2>
        <p>Unifier의 주요 모듈을 소개합니다.</p>
      </div>
      <div className="modules-grid">
        <div className="module-card">
          <h4>Cost Management</h4>
          <p>예산 수립, 비용 추적, 지출 관리를 위한 통합 비용 관리 모듈</p>
        </div>
        <div className="module-card">
          <h4>Contract Management</h4>
          <p>계약 생성, 변경 관리, 기성 처리를 위한 계약 관리 모듈</p>
        </div>
        <div className="module-card">
          <h4>Document Management</h4>
          <p>도면, 문서, 레코드의 중앙 관리 및 버전 제어 모듈</p>
        </div>
        <div className="module-card">
          <h4>Capital Planning</h4>
          <p>자본 투자 계획 및 포트폴리오 관리 모듈</p>
        </div>
        <div className="module-card">
          <h4>Asset Lifecycle</h4>
          <p>자산 생애주기 전반의 관리 모듈</p>
        </div>
        <div className="module-card">
          <h4>Space Management</h4>
          <p>시설 및 공간 관리 모듈</p>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="모듈 소개"
      subtitle="Module Introduction"
      content={content}
      image="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default UnifierModules
