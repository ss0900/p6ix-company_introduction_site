import SubPage from '../../components/SubPage'

function AconexFeatures() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>기능 안내</h2>
        <p>Aconex의 주요 기능을 소개합니다.</p>
      </div>
      <div className="features-list">
        <div className="feature-card">
          <div className="feature-number">01</div>
          <h4>Document Control</h4>
          <p>버전 관리, 개정 이력, 배포 관리가 통합된 문서 제어</p>
        </div>
        <div className="feature-card">
          <div className="feature-number">02</div>
          <h4>Mail & Correspondence</h4>
          <p>프로젝트 관련 모든 서신의 추적 및 관리</p>
        </div>
        <div className="feature-card">
          <div className="feature-number">03</div>
          <h4>BIM Collaboration</h4>
          <p>BIM 모델 협업 및 조정 도구</p>
        </div>
        <div className="feature-card">
          <div className="feature-number">04</div>
          <h4>Field Management</h4>
          <p>현장 이슈, 안전, 품질 관리</p>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="기능 안내"
      subtitle="Feature Guide"
      content={content}
      image="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default AconexFeatures
