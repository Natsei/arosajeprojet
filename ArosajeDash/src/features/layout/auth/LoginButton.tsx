"use client"

import React from 'react'
import { Button } from '@nextui-org/react'
import { signIn } from 'next-auth/react'

export const LoginButton = () => {
  return (
    <Button onClick={() => {
        signIn();
    }}>
         Connexion
    </Button>
  )
}
