import { DefaultUi, Player, Youtube } from '@vime/react'

import '@vime/core/themes/default.css'

import { VideoContainer } from './styles'

export function Video() {
  return (
    <VideoContainer>
      <Player>
        <Youtube videoId="5J6jAC6XxAI" />
        <DefaultUi />
      </Player>
    </VideoContainer>
  )
}
