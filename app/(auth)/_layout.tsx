import { useAuth } from '@/providers/AuthProvider'
import { Redirect, Stack } from 'expo-router'
import React from 'react'

export default function AuthLayout() {
  const { user } = useAuth()

  if (user) {
    return <Redirect href={"/(home)/(tabs)"} />
  }

  return (
    <Stack />
  )
}
