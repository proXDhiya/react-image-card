import React from 'react'

import { ImageCard } from './components/ImageCard'

function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <ImageCard hueRotate={370} width="350px" />
    </div>
  )
}

export default App
