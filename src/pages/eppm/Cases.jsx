import SubPage from '../../components/SubPage'

function EPPMCases() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>구축 사례</h2>
        <p>EPPM 솔루션 구축 사례를 소개합니다.</p>
      </div>
      <div className="case-studies">
        <div className="case-card">
          <img src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Case 1" />
          <div className="case-content">
            <span className="case-tag">제조</span>
            <h4>글로벌 제조기업</h4>
            <p>전사 R&D 프로젝트 통합 관리 시스템 구축</p>
          </div>
        </div>
        <div className="case-card">
          <img src="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Case 2" />
          <div className="case-content">
            <span className="case-tag">에너지</span>
            <h4>에너지 기업</h4>
            <p>발전소 건설 프로젝트 포트폴리오 관리</p>
          </div>
        </div>
        <div className="case-card">
          <img src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Case 3" />
          <div className="case-content">
            <span className="case-tag">건설</span>
            <h4>종합 건설사</h4>
            <p>국내외 건설 프로젝트 통합 관리</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="구축 사례"
      subtitle="Implementation Cases"
      content={content}
      image="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default EPPMCases
