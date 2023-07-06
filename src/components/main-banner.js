import React from 'react'

const Main_Banner = () => {
  return (
    <div>
        <video
                width="100%"
                height="550"
                autoPlay="autoplay"
                className=""
                loop
                muted
              >
                <source src="/videos/main-video.mp4" type="video/mp4" />
              </video>
    </div>
  )
}

export default Main_Banner