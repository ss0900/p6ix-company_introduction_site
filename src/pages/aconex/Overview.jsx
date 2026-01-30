import SubPage from '../../components/SubPage'

function AconexOverview() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>Aconex 개요</h2>
        <p>
          Oracle Aconex는 건설 프로젝트의 문서 관리와 협업을 위한
          클라우드 기반 플랫폼입니다.
        </p>
      </div>
      <div className="feature-grid">
        <div className="feature-item">
          <h4>문서 관리</h4>
          <p>프로젝트 문서의 중앙 집중 관리</p>
        </div>
        <div className="feature-item">
          <h4>워크플로우</h4>
          <p>승인 및 검토 프로세스 자동화</p>
        </div>
        <div className="feature-item">
          <h4>협업</h4>
          <p>프로젝트 참여자간 실시간 협업</p>
        </div>
        <div className="feature-item">
          <h4>추적성</h4>
          <p>모든 커뮤니케이션 이력 관리</p>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="개요"
      subtitle="Aconex Overview"
      content={content}
      image="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default AconexOverview
