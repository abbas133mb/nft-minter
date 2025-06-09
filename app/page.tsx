'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">🎉 Welcome to My NFT Airdrop</h1>
      <ConnectButton />
    </main>
  )
}
