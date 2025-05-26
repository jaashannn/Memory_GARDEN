import { useState, useEffect } from 'react'
import SeedPacket from '../SeedPacket/SeedPacket'
import CompletionBanner from '../CompletionBanner/CompletionBanner'
import { memoriesData } from '../../data/memories'
import { gardenStyles } from './MemoryGardenStyles'

function MemoryGarden() {
  const [memories, setMemories] = useState(memoriesData)
  const [allPlanted, setAllPlanted] = useState(false)

  // Check if all memories have been planted
  useEffect(() => {
    if (memories.every(memory => memory.isPlanted)) {
      setTimeout(() => {
        setAllPlanted(true)
      }, 1000)
    }
  }, [memories])

  const handlePlantMemory = (id) => {
    setMemories(prevMemories => 
      prevMemories.map(memory => 
        memory.id === id ? { ...memory, isPlanted: true } : memory
      )
    )
  }

  return (
    <div style={gardenStyles.container}>
      <h1 style={gardenStyles.title}>Memory Garden</h1>
      
      {!allPlanted ? (
        <div style={gardenStyles.gardenGrid}>
          {memories.map(memory => (
            <SeedPacket 
              key={memory.id}
              memory={memory}
              onPlant={() => handlePlantMemory(memory.id)}
            />
          ))}
        </div>
      ) : (
        <CompletionBanner />
      )}
    </div>
  )
}

export default MemoryGarden