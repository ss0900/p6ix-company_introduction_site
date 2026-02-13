import { getAssetPath } from "../utils/assetPath";
function Loader({ isLoading }) {
  return (
    <div className={`loader ${!isLoading ? 'hidden' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo">
          <img
            src={getAssetPath("/P6ix_SC_Logo_White.png")}
            alt="Company Logo"
            style={{ height: '3.5rem', objectFit: 'contain' }}
          />
        </div>
        <div className="loader-bar">
          <div className="loader-progress" />
        </div>
      </div>
    </div>
  )
}

export default Loader
