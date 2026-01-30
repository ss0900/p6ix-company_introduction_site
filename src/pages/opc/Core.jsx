import SubPage from '../../components/SubPage'

function OPCCore() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>핵심 기능</h2>
        <p>Oracle Primavera Cloud의 핵심 기능을 소개합니다.</p>
      </div>
      <div className="features-list">
        <div className="feature-card">
          <div className="feature-number">01</div>
          <h4>Schedule Management</h4>
          <p>클라우드 기반 일정 관리 및 협업</p>
        </div>
        <div className="feature-card">
          <div className="feature-number">02</div>
          <h4>Risk Analysis</h4>
          <p>Monte Carlo 시뮬레이션 기반 리스크 분석</p>
        </div>
        <div className="feature-card">
          <div className="feature-number">03</div>
          <h4>Portfolio Analytics</h4>
          <p>포트폴리오 분석 및 인사이트 도출</p>
        </div>
        <div className="feature-card">
          <div className="feature-number">04</div>
          <h4>Lean Task Management</h4>
          <p>애자일 방식의 태스크 관리</p>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="핵심 기능"
      subtitle="Core Features"
      content={content}
      image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default OPCCore
