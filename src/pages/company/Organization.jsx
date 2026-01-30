import SubPage from '../../components/SubPage'

function CompanyOrganization() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>조직 구성</h2>
        <p>
          피식스에스씨는 효율적인 조직 구조를 통해 고객에게 최상의 서비스를 제공합니다.
        </p>
      </div>
      <div className="org-chart">
        <div className="org-level org-ceo">
          <div className="org-box org-box-ceo">
            <span className="org-title">대표이사</span>
            <span className="org-name">CEO</span>
          </div>
        </div>
        <div className="org-level org-departments">
          <div className="org-box">
            <span className="org-title">기술본부</span>
            <span className="org-desc">솔루션 개발 및 기술 지원</span>
          </div>
          <div className="org-box">
            <span className="org-title">사업본부</span>
            <span className="org-desc">프로젝트 수행 및 컨설팅</span>
          </div>
          <div className="org-box">
            <span className="org-title">경영지원본부</span>
            <span className="org-desc">인사, 재무, 총무</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="조직도"
      subtitle="Organization Chart"
      content={content}
      image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default CompanyOrganization
