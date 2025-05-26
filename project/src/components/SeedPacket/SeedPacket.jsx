import { useState, useEffect } from 'react'
import { seedPacketStyles } from './SeedPacketStyles'
import Flower from '../Flower/Flower'

function SeedPacket({ memory, onPlant }) {
  const [isPlanting, setIsPlanting] = useState(false)
  const [showFlower, setShowFlower] = useState(false)

  useEffect(() => {
    if (isPlanting) {
      const timer = setTimeout(() => {
        setShowFlower(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isPlanting])

  const handleClick = () => {
    if (!isPlanting && !memory.isPlanted) {
      setIsPlanting(true)
      onPlant()
    }
  }

  if (showFlower || memory.isPlanted) {
    return <Flower memory={memory} />
  }

  return (
    <div 
      style={{
        ...seedPacketStyles.container,
        ...(isPlanting ? seedPacketStyles.planting : {}),
      }}
      onClick={handleClick}
      role="button"
      aria-label={`Plant memory: ${memory.title}`}
      tabIndex="0"
    >
      {isPlanting ? (
        <div style={seedPacketStyles.plantingAnimation}>
          <div style={seedPacketStyles.seed}></div>
          <div style={seedPacketStyles.soil}></div>
        </div>
      ) : (
        <>
          <div style={seedPacketStyles.packet}>
            <h3 style={seedPacketStyles.title}>{memory.title}</h3>
            <div style={seedPacketStyles.emoji}>{memory.emoji}</div>
          </div>
          <div style={seedPacketStyles.instruction}>
            Tap to plant this memory
          </div>
        </>
      )}
    </div>
  )
}

export default SeedPacket