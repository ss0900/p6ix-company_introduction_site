import SubPage from '../../components/SubPage'

function OPCApplication() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>활용 방안</h2>
        <p>OPC를 활용한 프로젝트 관리 방안을 소개합니다.</p>
      </div>
      <div className="application-grid">
        <div className="application-card">
          <h4>중소기업</h4>
          <p>초기 투자 없이 클라우드 서비스로 프로젝트 관리 시작</p>
          <ul>
            <li>빠른 도입 및 적용</li>
            <li>낮은 초기 비용</li>
            <li>유연한 확장</li>
          </ul>
        </div>
        <div className="application-card">
          <h4>대기업</h4>
          <p>기존 On-premise 솔루션과 연계한 하이브리드 운영</p>
          <ul>
            <li>P6와 연동</li>
            <li>글로벌 팀 협업</li>
            <li>통합 대시보드</li>
          </ul>
        </div>
        <div className="application-card">
          <h4>프로젝트 팀</h4>
          <p>현장 중심의 실시간 프로젝트 관리</p>
          <ul>
            <li>모바일 접근</li>
            <li>실시간 업데이트</li>
            <li>팀 협업 강화</li>
          </ul>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="활용 방안"
      subtitle="Application"
      content={content}
      image="https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default OPCApplication
