import SubPage from '../../components/SubPage'

function PPMBenefits() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>도입 효과</h2>
        <p>PPM 솔루션 도입을 통해 기대할 수 있는 효과입니다.</p>
      </div>
      <div className="benefits-grid">
        <div className="benefit-card">
          <div className="benefit-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="20" x2="12" y2="10"/>
              <line x1="18" y1="20" x2="18" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="16"/>
            </svg>
          </div>
          <h4>의사결정 개선</h4>
          <p>데이터 기반의 전략적 의사결정 지원</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <h4>효율성 향상</h4>
          <p>프로젝트 수행 효율 30% 이상 개선</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h4>자원 최적화</h4>
          <p>전사 자원 활용도 극대화</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h4>리스크 감소</h4>
          <p>체계적인 리스크 관리로 실패율 감소</p>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="도입 효과"
      subtitle="Benefits"
      content={content}
      image="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default PPMBenefits
