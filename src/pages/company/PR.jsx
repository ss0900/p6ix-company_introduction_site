import SubPage from '../../components/SubPage'

function CompanyPR() {
  const content = (
    <div className="content-section">
      <div className="content-block">
        <h2>홍보자료</h2>
        <p>피식스에스씨의 다양한 홍보자료를 다운로드 받으실 수 있습니다.</p>
      </div>
      <div className="pr-materials">
        <div className="pr-card">
          <div className="pr-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <h4>회사소개서</h4>
          <p>피식스에스씨 회사 소개 브로슈어</p>
          <button className="pr-download-btn">다운로드</button>
        </div>
        <div className="pr-card">
          <div className="pr-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
          </div>
          <h4>로고 및 CI</h4>
          <p>피식스에스씨 로고 및 CI 파일</p>
          <button className="pr-download-btn">다운로드</button>
        </div>
        <div className="pr-card">
          <div className="pr-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="23 7 16 12 23 17 23 7"/>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
            </svg>
          </div>
          <h4>홍보 영상</h4>
          <p>피식스에스씨 소개 영상</p>
          <button className="pr-download-btn">보기</button>
        </div>
      </div>
    </div>
  )

  return (
    <SubPage
      title="홍보자료"
      subtitle="PR Materials"
      content={content}
      image="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1200"
    />
  )
}

export default CompanyPR
