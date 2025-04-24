import { FontAwesome5 } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabsNavigator() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Chats',
          tabBarIcon: ({size, color}) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({size, color}) => (
            <FontAwesome5 name="user-alt" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
