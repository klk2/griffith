import React from 'react'

const NormalVideo = props => {
  const {
    onRef,
    /* eslint-disable no-unused-vars */
    paused,
    currentQuality,
    useAutoQuality,
    sources,
    /* eslint-disable no-unused-vars */
    ...restProps
  } = props
  return <video x5-video-player-type='h5-page' {...restProps} ref={onRef} />
}

export default {
  pluginName: 'native',
  VideoComponent: NormalVideo,
}
