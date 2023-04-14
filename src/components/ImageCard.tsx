import './style.css'

import React from 'react'

import defaultImg from './res/null.png'

export interface IImageCard {
  // image url or default image
  imageSrc?: string
  hueRotate?: number
  width?: string
  aspectRatio?: string
}

/**
 * @description This component is used to display an image card
 * @param imageSrc {string} image url or default image
 * @param hueRotate {number} image hue rotate degree (0-360)
 * @param width {string} image width (default: 280px)
 * @param aspectRatio {string} image aspect ratio (default: 10/16)
 * @returns {JSX.Element}
 */
export const ImageCard = ({
  imageSrc,
  hueRotate = 0,
  width = '280px',
  aspectRatio = '10/16',
}: IImageCard) => {
  return (
    <div
      style={{
        width: width,
        aspectRatio: aspectRatio,
        borderRadius: '4px',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'rgb(194 224 240 / 50%)',
        backgroundImage: `linear-gradient(
          rgb(65 92 233),
          rgb(65 92 233) 1px,
          rgb(194 224 240 / 0%) 2px,
          rgb(194 224 240 / 0%) 10px
        )`,
        backgroundSize: '10px 10px',
        border: '1px solid hsl(200, 60%, 60%)',
        animation: 'spin 20s infinite linear',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0.95,
          filter: `hue-rotate(${hueRotate}deg)`,
          backgroundImage: `url(${imageSrc || defaultImg})`,
          backgroundSize: '300%',
          backgroundPosition: '0 0',
          backgroundRepeat: 'no-repeat',
          animation: 'move 60s infinite linear',
        }}
      ></div>
    </div>
  )
}
