import { Player, Youtube } from '@vime/react'

import '@vime/core/themes/default.css'

import { VideoContainer } from './styles'

export function Video() {
  return (
    <VideoContainer>
      <Player controls>
        <Youtube videoId="5J6jAC6XxAI" />
      </Player>
    </VideoContainer>
  )
}
