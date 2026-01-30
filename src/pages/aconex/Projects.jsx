import SubPage from '../../components/SubPage'

function AconexProjects() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>프로젝트 사례</h2>
        <p>Aconex가 적용된 글로벌 프로젝트 사례를 소개합니다.</p>
      </div>
      <div className="case-studies">
        <div className="case-card">
          <img src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Case 1" />
          <div className="case-content">
            <span className="case-tag">건축</span>
            <h4>대형 복합 건물</h4>
            <p>초고층 복합 건물 프로젝트의 문서 협업 관리</p>
          </div>
        </div>
        <div className="case-card">
          <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Case 2" />
          <div className="case-content">
            <span className="case-tag">교통</span>
            <h4>철도 인프라</h4>
            <p>고속철도 건설 프로젝트 문서 관리</p>
          </div>
        </div>
        <div className="case-card">
          <img src="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Case 3" />
          <div className="case-content">
            <span className="case-tag">에너지</span>
            <h4>발전소 건설</h4>
            <p>해외 발전소 EPC 프로젝트 협업</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="프로젝트 사례"
      subtitle="Project Cases"
      content={content}
      image="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default AconexProjects
