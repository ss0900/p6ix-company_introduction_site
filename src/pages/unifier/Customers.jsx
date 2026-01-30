import SubPage from '../../components/SubPage'

function UnifierCustomers() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>고객 사례</h2>
        <p>Unifier를 도입한 고객 사례를 소개합니다.</p>
      </div>
      <div className="case-studies">
        <div className="case-card">
          <img src="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Case 1" />
          <div className="case-content">
            <span className="case-tag">공공</span>
            <h4>공공기관 시설 관리</h4>
            <p>대규모 공공 시설의 자산 및 유지보수 관리 시스템 구축</p>
          </div>
        </div>
        <div className="case-card">
          <img src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Case 2" />
          <div className="case-content">
            <span className="case-tag">부동산</span>
            <h4>부동산 개발사</h4>
            <p>복합 개발 프로젝트의 비용 및 계약 관리</p>
          </div>
        </div>
        <div className="case-card">
          <img src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Case 3" />
          <div className="case-content">
            <span className="case-tag">인프라</span>
            <h4>인프라 운영사</h4>
            <p>도로 및 철도 자산의 생애주기 관리</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="고객 사례"
      subtitle="Customer Cases"
      content={content}
      image="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default UnifierCustomers
