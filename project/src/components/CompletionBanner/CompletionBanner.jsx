import { useState } from 'react'
import { bannerStyles } from './CompletionBannerStyles'

function CompletionBanner() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div style={bannerStyles.container}>
      <div style={bannerStyles.content}>
        <h2 style={bannerStyles.title}>
          Our garden of memories is full—will you go on a date to grow even more?
        </h2>
        
        <button 
          style={{
            ...bannerStyles.button,
            animation: isHovering ? 'wiggle 0.5s ease infinite' : 'none',
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => alert("She said yes! 💖")}
          aria-label="Accept date invitation"
        >
          Say Yes!
        </button>
      </div>
    </div>
  )
}

export default CompletionBanner