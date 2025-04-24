import { useAuth } from "@/providers/AuthProvider";
import { router } from "expo-router";
import { useState } from "react";
import { Text } from "react-native";
import {
  Channel,
  ChannelList,
  MessageInput,
  MessageList,
} from "stream-chat-expo";

export default function MainTabScreen() {
  const {user} = useAuth()

  return (
    <ChannelList
      filters={{ members: { $in: [user.id] }}}
      onSelect={ (channel) => router.push(`/channel/${channel.cid}`) } 
    />
  )
}
