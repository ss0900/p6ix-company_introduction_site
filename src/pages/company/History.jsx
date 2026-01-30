import SubPage from '../../components/SubPage'

function CompanyHistory() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>피식스에스씨 연혁</h2>
        <p>창립 이래 지속적인 성장과 발전을 거듭해온 피식스에스씨의 발자취입니다.</p>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-year">2024</div>
          <div className="timeline-content">
            <h4>글로벌 파트너십 확대</h4>
            <p>Oracle 공식 파트너 자격 갱신 및 해외 사업 확장</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">2023</div>
          <div className="timeline-content">
            <h4>신규 솔루션 출시</h4>
            <p>자체 개발 프로젝트 관리 솔루션 런칭</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">2022</div>
          <div className="timeline-content">
            <h4>대형 프로젝트 수주</h4>
            <p>국내 대형 건설사 프로젝트 관리 시스템 구축</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">2020</div>
          <div className="timeline-content">
            <h4>회사 설립</h4>
            <p>피식스에스씨 설립 및 사업 개시</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="회사연혁"
      subtitle="Company History"
      content={content}
      image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default CompanyHistory
