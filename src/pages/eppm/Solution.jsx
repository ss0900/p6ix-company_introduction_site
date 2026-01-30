import SubPage from '../../components/SubPage'

function EPPMSolution() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>솔루션 특징</h2>
        <p>EPPM 솔루션의 차별화된 특징을 소개합니다.</p>
      </div>
      <div className="solution-features">
        <div className="solution-card">
          <h4>확장성</h4>
          <p>대규모 프로젝트 및 사용자 지원이 가능한 엔터프라이즈급 확장성</p>
        </div>
        <div className="solution-card">
          <h4>유연성</h4>
          <p>다양한 산업 및 비즈니스 프로세스에 맞춤 적용 가능</p>
        </div>
        <div className="solution-card">
          <h4>통합성</h4>
          <p>ERP, CRM 등 기존 시스템과의 원활한 연동</p>
        </div>
        <div className="solution-card">
          <h4>보안성</h4>
          <p>엔터프라이즈급 보안 및 권한 관리</p>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="솔루션 특징"
      subtitle="Solution Features"
      content={content}
      image="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default EPPMSolution
