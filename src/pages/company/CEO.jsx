import SubPage from '../../components/SubPage'

function CompanyCEO() {
  const content = (
    <div className="content-section">
      <div className="ceo-profile">
        <div className="ceo-image-wrapper">
          <img
            src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="CEO"
            className="ceo-image"
          />
        </div>
        <div className="ceo-info">
          <h2>CEO 인사말</h2>
          <p className="greeting">
            안녕하십니까, 피식스에스씨 대표이사입니다.
          </p>
          <p>
            저희 피식스에스씨를 찾아주셔서 감사합니다.
            저희는 건설 프로젝트 관리 분야의 선도 기업으로서,
            고객 여러분의 프로젝트 성공을 위해 최선을 다하고 있습니다.
          </p>
          <p>
            급변하는 건설 산업 환경 속에서 프로젝트 관리의 중요성은
            날로 커지고 있습니다. 저희는 Oracle Primavera를 기반으로 한
            최첨단 솔루션과 전문 컨설팅 서비스를 통해
            고객의 프로젝트가 성공적으로 완료될 수 있도록 지원하겠습니다.
          </p>
          <p>
            앞으로도 변함없는 관심과 성원을 부탁드립니다.
          </p>
          <p className="signature">대표이사</p>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="CEO 소개"
      subtitle="CEO Profile"
      content={content}
      image="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default CompanyCEO
