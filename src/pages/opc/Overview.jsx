import SubPage from '../../components/SubPage'

function OPCOverview() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>OPC 개요</h2>
        <p>
          OPC(Oracle Primavera Cloud)는 클라우드 기반의 프로젝트 관리 솔루션으로,
          언제 어디서나 프로젝트를 관리할 수 있는 유연성을 제공합니다.
        </p>
      </div>
      <div className="feature-grid">
        <div className="feature-item">
          <h4>클라우드 기반</h4>
          <p>SaaS 기반의 유연한 서비스</p>
        </div>
        <div className="feature-item">
          <h4>모바일 지원</h4>
          <p>모바일 기기에서의 접근성</p>
        </div>
        <div className="feature-item">
          <h4>실시간 협업</h4>
          <p>팀원간 실시간 협업 환경</p>
        </div>
        <div className="feature-item">
          <h4>자동 업데이트</h4>
          <p>최신 기능 자동 업데이트</p>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="개요"
      subtitle="OPC Overview"
      content={content}
      image="https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default OPCOverview
