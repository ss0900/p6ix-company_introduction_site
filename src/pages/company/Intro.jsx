import SubPage from '../../components/SubPage'

function CompanyIntro() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>피식스에스씨 소개</h2>
        <p>
          피식스에스씨는 건설 프로젝트 관리 솔루션 전문 기업으로서,
          Oracle Primavera 파트너로서 국내외 대형 건설 프로젝트의 성공적인 수행을 지원하고 있습니다.
        </p>
        <p>
          우리는 프로젝트 관리의 모든 영역에서 최적의 솔루션과 서비스를 제공하며,
          고객의 비즈니스 가치 창출에 기여하고 있습니다.
        </p>
      </div>
      <div className="content-block">
        <h3>핵심 가치</h3>
        <div className="value-cards">
          <div className="value-card">
            <h4>전문성</h4>
            <p>프로젝트 관리 분야의 깊은 전문 지식과 경험</p>
          </div>
          <div className="value-card">
            <h4>혁신</h4>
            <p>끊임없는 기술 혁신과 솔루션 개발</p>
          </div>
          <div className="value-card">
            <h4>신뢰</h4>
            <p>고객과의 지속적인 파트너십 구축</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="회사소개"
      subtitle="Company Introduction"
      content={content}
      image="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default CompanyIntro
