import React from 'react'
import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className="w-full flex justify-center">
      <SignIn />
    </div>
  )
}