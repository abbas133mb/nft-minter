'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import crystal from '../public/crystal.png'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-5xl font-bold mb-6">Crystal Airdrop</h1>
      
      <div className="relative w-48 h-48 mb-6">
        <Image
          src={crystal}
          alt="Crystal"
          layout="fill"
          objectFit="contain"
          className="rounded-full border-4 border-purple-500 shadow-2xl"
        />
      </div>

      <div className="w-full max-w-md bg-gray-800 rounded-xl p-6 mb-6 shadow-lg">
        <div className="flex justify-between mb-2 text-sm text-gray-300">
          <span>Participants</span>
          <span>3250 / 5000</span>
        </div>
        <div className="w-full bg-gray-600 h-3 rounded-full overflow-hidden">
          <div className="bg-purple-500 h-full" style={{ width: '65%' }}></div>
        </div>
      </div>

      <ConnectButton />

      <button className="mt-6 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl text-lg font-semibold">
        Mint NFT (30 MATIC)
      </button>
    </main>
  )
}
