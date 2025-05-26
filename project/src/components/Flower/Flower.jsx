import { useState, useEffect } from 'react'
import { flowerStyles } from './FlowerStyles'

function Flower({ memory }) {
  const [isAnimating, setIsAnimating] = useState(true)
  const [showMemory, setShowMemory] = useState(false)

  useEffect(() => {
    // Show memory message after flower blooms
    const timer = setTimeout(() => {
      setIsAnimating(false)
      setShowMemory(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const flowerColors = [
    '#ffafd1', // Pink
    '#aec9ff', // Light blue
    '#c4f0c4', // Light green
  ]

  // Use memory id to determine flower color (0, 1, or 2)
  const flowerColor = flowerColors[memory.id % flowerColors.length]

  return (
    <div style={flowerStyles.container}>
      <div style={flowerStyles.flowerContainer}>
        <div style={{
          ...flowerStyles.stem,
          height: isAnimating ? '0px' : '80px',
        }}></div>
        <div style={{
          ...flowerStyles.flowerHead,
          backgroundColor: flowerColor,
          transform: isAnimating ? 'scale(0)' : 'scale(1)',
        }}>
          <div style={{
            ...flowerStyles.flowerCenter,
            opacity: isAnimating ? 0 : 1,
          }}></div>
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              style={{
                ...flowerStyles.petal,
                transform: `rotate(${i * 45}deg) translateY(-15px)`,
                backgroundColor: flowerColor,
                opacity: isAnimating ? 0 : 1,
              }}
            ></div>
          ))}
        </div>
      </div>
      
  {showMemory && (
  <div style={flowerStyles.memoryText}>
    <p style={{ color: 'black' }}>{memory.message}</p>
  </div>
)}

      <div style={flowerStyles.soil}></div>
    </div>
  )
}

export default Flower