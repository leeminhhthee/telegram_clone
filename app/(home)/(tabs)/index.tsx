import React, { useState } from 'react'
import { Text } from 'react-native'
import { Channel, ChannelList } from 'stream-chat-expo'
import { Channel as ChannelType, StreamChat } from "stream-chat";

export default function MainTabScreen() {
  const [ channel, setChannel ] = useState<ChannelType>()
  console.log(channel)
  
  if(channel) {
    return (
      <Channel channel={channel}></Channel>
    )
  }

  return (
    <ChannelList onSelect={setChannel} />
  )
  
}
